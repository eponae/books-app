import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app page", () => {
  render(<App />);
  const headerElement = screen.getByText(/Bibliothèque/i);
  expect(headerElement).toBeInTheDocument();
});
