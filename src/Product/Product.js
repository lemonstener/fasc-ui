import "./Product.css";

const Product = ({ props }) => {
  return (
    <div className="Product">
      <img alt={props.name} src={props.image} />
      <span className="Product-name">{props.name}</span>
      <strong>${parseFloat(props.price).toFixed(2)}</strong>
    </div>
  );
};

export default Product;
