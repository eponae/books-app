import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { clearMocksAfterTests } from "../../test/testUtils";
import { funtcher } from "../../apiConfig";

jest.mock("../../apiConfig");

describe("App", () => {
  it("should render error message", async () => {
    const apiMock = funtcher.get.mockRejectedValueOnce({ message: "error" });
    render(<App />);
    await apiMock();

    const headerElement = screen.getByText("Bibliothèque");
    expect(headerElement).toBeInTheDocument();

    const error = await screen.findByText("Une erreur s'est produite.");
    expect(error).toBeInTheDocument();

    const bookshelves = screen.queryByText("Étagères");
    expect(bookshelves).not.toBeInTheDocument();
  });

  clearMocksAfterTests();
});
