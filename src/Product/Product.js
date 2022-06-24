import { useState } from "react";
import "./Product.css";

const Product = ({ props }) => {
  return (
    <div className="Product">
      <img src={props.image} />
      <span className="Product-name">{props.name}</span>
      <span className="Product-price">
        ${parseFloat(props.price).toFixed(2)}
      </span>
    </div>
  );
};

export default Product;
