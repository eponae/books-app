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
    funtcher.get.mockResolvedValue({ data: mockedForm });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);

    const form = await screen.findByText(
      mockedFormWithPriceAndAuthors.short_title
    );

    expect(form).toBeInTheDocument();
  });
  it("should display form with authors if present", async () => {
    funtcher.get.mockResolvedValue({ data: mockedFormWithAuthor });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);

    const author1 = await screen.findByText(
      mockedFormWithAuthor.authors[0].name
    );

    expect(author1).toBeInTheDocument();
  });
  it("should display form with price", async () => {
    funtcher.get.mockResolvedValue({ data: mockedFormWithPrice });
    renderWithProviders(<Form id="5b3a3da816786c5a863c76a8" />);

    const form = await screen.findByText("849 € HT");

    expect(form).toBeInTheDocument();
  });

  clearMocksAfterTests();
});
