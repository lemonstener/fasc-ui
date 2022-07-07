import { render } from "@testing-library/react";
import Product from "./Product";
import products from "../products.json";

test("testing html structure of Product, ensure correct information is displayed", () => {
  const { container } = render(<Product props={products[0]} />);
  const title = container.querySelector(".Product-name").innerHTML;
  const img = container.querySelector("img");
  const price = container.querySelector("strong").innerHTML;
  expect(img.alt).toBe(
    "Unisex Long Sleeve Round Neck T-Shirt w/ Sublimation Tshirts"
  );
  expect(title).toBe(
    "Unisex Long Sleeve Round Neck T-Shirt w/ Sublimation Tshirts"
  );
  expect(price).toBe("$13.77");
});
