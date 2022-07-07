import { render } from "@testing-library/react";
import App from "./App";

test("testing that html structure is as expected", () => {
  const { container } = render(<App />);
  const lists = container.querySelectorAll("ul");
  const products = container.getElementsByClassName("Product");
  const buttons = container.querySelectorAll("button");
  expect(lists.length).toEqual(2);
  expect(products.length).toEqual(20);
  expect(buttons.length).toEqual(5);
});
