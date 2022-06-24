import "./Modal.css";

const Modal = ({ props }) => {
  return (
    <div className="Modal">
      <h1>{props.name}</h1>
      <h2>
        By<span className="Modal-supplier">{props.supplierName}</span>
      </h2>
      <img src={props.image} alt={props.name} />
      <p>{props.desc}</p>
      <span className="Modal-price">${parseFloat(props.price).toFixed(2)}</span>
    </div>
  );
};

export default Modal;
