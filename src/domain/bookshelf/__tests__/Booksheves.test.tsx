import { fireEvent, screen } from "@testing-library/react";
import { mockedBookshelves } from "../../../test/testData";
import {
  clearMocksAfterTests,
  renderWithProviders,
} from "../../../test/testUtils";
import Bookshelves from "../components/Bookshelves";
import { funtcher } from "../../../apiConfig";

jest.mock("../../../apiConfig");

describe("Bookshelves", () => {
  beforeEach(() => {
    funtcher.get.mockResolvedValue({ data: mockedBookshelves });
  });

  it("should display and select first bookshelf", async () => {
    renderWithProviders(<Bookshelves />);

    const firstBookshelf = await screen.findByText("Dystopia");
    expect(firstBookshelf.className).toContain("active");
    expect(window.location.pathname).toEqual("/dystopia-2/1");
  });
  it("should display second bookshelf name", async () => {
    renderWithProviders(<Bookshelves />);

    const bookshelf = await screen.findByText("Free books");
    expect(bookshelf).toBeInTheDocument();
  });
  it("should select second bookshelf", async () => {
    renderWithProviders(<Bookshelves />);

    const bookshelf = await screen.findByText("Free books");
    fireEvent.click(bookshelf);
    expect(bookshelf.className).toContain("active");
    expect(window.location.pathname).toEqual("/free-books-18/1");
  });

  clearMocksAfterTests();
});
