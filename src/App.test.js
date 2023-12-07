import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Run render method(JSX에 관련한 인수)
  render(<App />);
  const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
});
