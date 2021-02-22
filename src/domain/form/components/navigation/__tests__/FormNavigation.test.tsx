import { screen } from "@testing-library/react";
import {
  clearMocksAfterTests,
  renderWithProviders,
} from "../../../../../test/testUtils";
import FormsNavigation from "../FormsNavigation";

describe("Forms", () => {
  it("should display forms navigation if more than limited number of forms per page", async () => {
    renderWithProviders(
      <FormsNavigation
        slug="dystopia-2"
        page={2}
        bookshelfId="5c6179511d2d140001899fcd"
      />,
      {
        bookshelves: {
          bookshelfIds: ["5c6179511d2d140001899fcd"],
          selectedBookshelf: "5c6179511d2d140001899fcd",
        },
      }
    );

    const goPrevious = await screen.findByText("Précédent");

    expect(goPrevious).toBeInTheDocument();
  });

  clearMocksAfterTests();
});
