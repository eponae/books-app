import { renderWithProviders } from "../../../../../test/testUtils";
import FormAuthors from "../FormAuthors";

describe("FormAuthors", () => {
  it("should display formatted list of authors for form", async () => {
    const { container } = renderWithProviders(
      <FormAuthors
        authors={[
          {
            id: "5b236ccc16786c5a86ebf83c",
            name: "Aldous Huxley",
            slug: "aldous-huxley",
          },
          {
            id: "5b236d7e16786c5a86f15b60",
            name: "Margaret Atwood",
            slug: "margaret-atwood",
          },
        ]}
        formId="5c6179511d2d140001899fcd"
      />
    );

    expect(container.textContent).toEqual(
      "par Aldous Huxley et Margaret Atwood"
    );
  });
});
