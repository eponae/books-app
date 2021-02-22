import { screen } from "@testing-library/react";
import {
  clearMocksAfterTests,
  renderWithProviders,
} from "../../../../test/testUtils";
import { funtcher } from "../../../../apiConfig";
import {
  mockedForm,
  mockedFormWithAuthor,
  mockedFormWithPrice,
  mockedFormWithPriceAndAuthors,
} from "../../../../test/testData";
import Form from "../Form";

jest.mock("../../../../apiConfig");

describe("Form", () => {
  it("should display form", async () => {
    const apiMock = funtcher.get.mockResolvedValue({ data: mockedForm });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);
    await apiMock();

    const form = await screen.findByText(
      mockedFormWithPriceAndAuthors.short_title
    );

    expect(form).toBeInTheDocument();
  });

  it("should display form with author if present", async () => {
    const apiMock = funtcher.get.mockResolvedValue({
      data: mockedFormWithAuthor,
    });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);
    await apiMock();

    const author1 = await screen.findByText("Margaret Atwood");
    const authorLink = screen.getByRole("link");

    expect(author1).toBeInTheDocument();
    expect(authorLink).toHaveAttribute(
      "href",
      "https://glose.com/author/margaret-atwood"
    );
  });

  it("should display form with price", async () => {
    const apiMock = funtcher.get.mockResolvedValue({
      data: mockedFormWithPrice,
    });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);
    await apiMock();

    const form = await screen.findByText("849 € HT");

    expect(form).toBeInTheDocument();
  });

  it("should throw error", async () => {
    const apiMock = funtcher.get.mockRejectedValueOnce({ message: "error" });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);
    await apiMock();

    const form = screen.queryByText("Brave New World");
    expect(form).not.toBeInTheDocument();
  });

  clearMocksAfterTests();
});
