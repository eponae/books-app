import {
  formatFormPrice,
  getFormVisibleInformation,
  getOffsetFromPage,
  getPageNumberFromUrl,
  getLastPageNumber,
} from "..";

describe("Form selector index", () => {
  describe("getFormVisibleInformation", () => {
    it("should return undefined if form information is missing", () => {
      const formId = "5b3a3da816786c5a863c76a8";
      const forms = {
        formImages: {},
        formAuthors: {},
        formPrices: {},
        formTitles: {},
        formIds: [],
        formsLoading: {
          isLoading: false,
          page: 1,
        },
      };
      const authors = {
        authorIds: [],
        authorNames: {},
        authorSlugs: {},
      };
      const formInformation = {
        id: "5b3a3da816786c5a863c76a8",
        image: undefined,
        short_title: undefined,
        authors: [],
        price: undefined,
      };
      const result = getFormVisibleInformation(formId, forms, authors);
      expect(result).toEqual(formInformation);
    });
    it("should return formatted form information", () => {
      const formId = "5b3a3da816786c5a863c76a8";
      const forms = {
        formImages: {
          "5b3a3da816786c5a863c76a8": "url-1",
          "5b3a3da816786c5a863c76a9": "url-2",
        },
        formAuthors: {
          "5b3a3da816786c5a863c76a8": [
            "5b236ccc16786c5a86ebf83c",
            "5b236ccc16786c5a86ebf83d",
          ],
          "5b3a3da816786c5a863c76a9": ["5b236ccc16786c5a86ebf83c"],
        },
        formPrices: {
          "5b3a3da816786c5a863c76a8": {
            amount: 849,
            currency: "EUR",
            includes_taxes: true,
          },
        },
        formTitles: {
          "5b3a3da816786c5a863c76a9": "title-2",
          "5b3a3da816786c5a863c76a8": "title-1",
        },
        formIds: ["5b3a3da816786c5a863c76a8", "5b3a3da816786c5a863c76a9"],
        formsLoading: {
          isLoading: false,
          page: 1,
        },
      };
      const authors = {
        authorIds: ["5b236ccc16786c5a86ebf83c", "5b236ccc16786c5a86ebf83d"],
        authorNames: {
          "5b236ccc16786c5a86ebf83c": "Aldous Huxley",
          "5b236ccc16786c5a86ebf83d": "Margaret Atwood",
        },
        authorSlugs: {
          "5b236ccc16786c5a86ebf83c": "aldous-huxley",
          "5b236ccc16786c5a86ebf83d": "margaret-atwood",
        },
      };
      const formInformation = {
        id: "5b3a3da816786c5a863c76a8",
        image: "url-1",
        short_title: "title-1",
        authors: [
          {
            id: "5b236ccc16786c5a86ebf83c",
            name: "Aldous Huxley",
            slug: "aldous-huxley",
          },
          {
            id: "5b236ccc16786c5a86ebf83d",
            name: "Margaret Atwood",
            slug: "margaret-atwood",
          },
        ],
        price: { amount: 849, currency: "EUR", includes_taxes: true },
      };
      const result = getFormVisibleInformation(formId, forms, authors);
      expect(result).toEqual(formInformation);
    });
  });
  describe("formatFormPrice", () => {
    it("return formatted price with taxes", () => {
      const price = { amount: 849, currency: "EUR", includes_taxes: true };
      const result = formatFormPrice(price);
      expect(result).toEqual("8.49 € TTC");
    });
    it("return formatted price without taxes", () => {
      const price = { amount: 849, currency: "EUR", includes_taxes: false };
      const result = formatFormPrice(price);
      expect(result).toEqual("8.49 € HT");
    });
  });
  describe("getOffsetFromPage", () => {
    it("should return the number of items already displayed until page number", () => {
      const result = getOffsetFromPage(12, 20);
      expect(result).toEqual(220);
    });
    it("should return 0", () => {
      const result = getOffsetFromPage(1, 20);
      expect(result).toEqual(0);
    });
    it("should return 0 if the page number is incorrect", () => {
      const result = getOffsetFromPage(-1, 20);
      expect(result).toEqual(0);
    });
  });
  describe("getPageNumberFromUrl", () => {
    it("should return rounded number if page url is float", () => {
      const result = getPageNumberFromUrl("2.1");
      expect(result).toEqual(2);
    });
    it("should return 1 if page url is incorrect", () => {
      const result = getPageNumberFromUrl(undefined);
      expect(result).toEqual(1);
    });
    it("should return 1 if page url is a negative number", () => {
      const result = getPageNumberFromUrl("-2");
      expect(result).toEqual(1);
    });

    it("should return page number as number", () => {
      const result = getPageNumberFromUrl("76");
      expect(result).toEqual(76);
    });
  });
  describe("getLastPageNumber", () => {
    it("should return computed last page number", () => {
      const result = getLastPageNumber(1504, 20);
      expect(result).toEqual(76);
    });
    it("should return 2 as computed last page number", () => {
      const result = getLastPageNumber(22, 20);
      expect(result).toEqual(2);
    });
    it("should return 1 if number of total items are inferior to page limit", () => {
      const result = getLastPageNumber(13, 20);
      expect(result).toEqual(1);
    });
    it("should return 1 there is no item", () => {
      const result = getLastPageNumber(0, 20);
      expect(result).toEqual(1);
    });
    it("should return 1 if page number is incorrect", () => {
      const result = getLastPageNumber(-34, 20);
      expect(result).toEqual(1);
    });
  });
});
