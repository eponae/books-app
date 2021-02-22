import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { funtcher } from "../../../../apiConfig";
import { mockedForms } from "../../../../test/testData";
import {
  clearMocksAfterTests,
  renderWithProvidersWithoutRouter,
} from "../../../../test/testUtils";
import Forms from "../Forms";

jest.mock("../../../../apiConfig");

jest.mock("react-router-dom", () => {
  const ReactRouterDomModule = jest.requireActual("react-router-dom");

  return {
    ...ReactRouterDomModule, // use actual for all non-hook parts
    useParams: () => ({
      slug: "dystopia-2",
      pageNumber: 1,
    }),
  };
});

describe("Forms", () => {
  it("should display forms navigation if more than limited number of forms per page", async () => {
    const apiMock = funtcher.get.mockResolvedValueOnce({
      data: mockedForms,
      headers: { "x-glose-count": 134 },
    });
    renderWithProvidersWithoutRouter(
      <MemoryRouter initialEntries={["/dystopia-2/1"]}>
        <Forms />
      </MemoryRouter>,
      {
        bookshelves: {
          selectedBookshelf: "5c6179511d2d140001899fcd",
        },
      }
    );
    await apiMock();

    const goNext = await screen.findAllByText("Suivant");
    const goPrevious = screen.queryByText("Précédent");

    expect(goNext).toHaveLength(2);
    expect(goPrevious).not.toBeInTheDocument();
  });

  clearMocksAfterTests();
});
