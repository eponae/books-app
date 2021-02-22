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
  it("should display and select first bookshelf", async () => {
    const apiMock = funtcher.get.mockResolvedValue({ data: mockedBookshelves });
    renderWithProviders(<Bookshelves />);
    await apiMock();

    const firstBookshelf = await screen.findByText("Dystopia");
    expect(firstBookshelf.className).toContain("active");
    expect(window.location.pathname).toEqual("/dystopia-2/1");
  });

  it("should display second bookshelf name", async () => {
    const apiMock = funtcher.get.mockResolvedValue({ data: mockedBookshelves });
    renderWithProviders(<Bookshelves />);
    await apiMock();

    const bookshelf = await screen.findByText("Free books");
    expect(bookshelf).toBeInTheDocument();
  });

  it("should select second bookshelf", async () => {
    const apiMock = funtcher.get.mockResolvedValue({ data: mockedBookshelves });
    renderWithProviders(<Bookshelves />);
    await apiMock();

    const bookshelf = await screen.findByText("Free books");
    fireEvent.click(bookshelf);
    expect(bookshelf.className).toContain("active");
    expect(window.location.pathname).toEqual("/free-books-18/1");
  });

  clearMocksAfterTests();
});
