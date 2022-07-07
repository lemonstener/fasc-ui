import { render } from "@testing-library/react";
import Modal from "./Modal";
import products from "../products.json";

test("testing html structure of Modal, ensure correct information is displayed", () => {
  const { container } = render(<Modal props={products[0]} />);
  const h1 = container.querySelector("h1").innerHTML;
  const h2 = container.querySelector("h2").innerHTML;
  const img = container.querySelector("img");
  const p = container.querySelector("p").innerHTML;
  const strong = container.querySelector("strong").innerHTML;

  expect(h1).toBe(
    "Unisex Long Sleeve Round Neck T-Shirt w/ Sublimation Tshirts"
  );
  expect(h2).toContain("imprintID");
  expect(img.alt).toEqual(
    "Unisex Long Sleeve Round Neck T-Shirt w/ Sublimation Tshirts"
  );
  expect(p).toContain(
    "Boost your brand with our Unisex Long Sleeve Round Neck T-Shirt w/ "
  );
  expect(strong).toBe("$13.77");
});
