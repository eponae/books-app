import { findBookshelfIdFromSlug } from "..";

describe("Bookshelf selector index", () => {
  describe("findBookshelfIdFromSlug", () => {
    it("should return associated bookshelf id to given slug", () => {
      const bookshelfSlugs = {
        "5c6179511d2d140001899fcd": "dystopia-2",
        "5c617433fefd4c0001f061c8": "free-books-18",
        "5c6179511d2d140001899fcf": "fantastic-13",
      };
      const slug = "dystopia-2";
      const result = findBookshelfIdFromSlug(bookshelfSlugs, slug);
      expect(result).toEqual("5c6179511d2d140001899fcd");
    });
    it("should return undefined if no bookshelf found", () => {
      const bookshelfSlugs = {
        "5c6179511d2d140001899fcd": "dystopia-2",
        "5c617433fefd4c0001f061c8": "free-books-18",
        "5c6179511d2d140001899fcf": "fantastic-13",
      };
      const slug = "fun-12";
      const result = findBookshelfIdFromSlug(bookshelfSlugs, slug);
      expect(result).toEqual(undefined);
    });
    it("should return undefined if slug is undefined", () => {
      const bookshelfSlugs = {
        "5c6179511d2d140001899fcd": "dystopia-2",
        "5c617433fefd4c0001f061c8": "free-books-18",
        "5c6179511d2d140001899fcf": "fantastic-13",
      };
      const slug = undefined;
      const result = findBookshelfIdFromSlug(bookshelfSlugs, slug);
      expect(result).toEqual(undefined);
    });
  });
});
