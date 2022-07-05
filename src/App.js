import "./App.css";
import { useState } from "react";
import products from "./products.json";
import Product from "./Product/Product";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal/Modal";

function App() {
  const [currentData, setCurrentData] = useState(products.slice(0, 20));
  const [clicked, setClicked] = useState(1);
  const [modal, setModal] = useState(null);

  const buttons = [];
  for (let i = 1; i <= Math.ceil(products.length / 20); i++) {
    buttons.push(i);
  }

  const changePage = (button) => {
    const num = parseInt(button.innerText);
    setClicked(num);
    setCurrentData(products.slice(20 * num - 20, num * 20));
    window.scrollTo(0, 0);
  };

  const toggleModal = (item = null) => {
    item
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
    item ? setModal(products[item]) : setModal(null);
  };

  return (
    <div className="App">
      <header>
        <img src="https://static.ateasesystems.net/images/facilis-logo.png" />
      </header>
      <>
        <ul className="App-list-products">
          {currentData.map((product) => {
            return (
              <li
                data-idx={products.indexOf(product)}
                onClick={(e) =>
                  toggleModal(e.currentTarget.getAttribute("data-idx"))
                }
                id={product.id}
                key={uuidv4()}
              >
                <Product props={product} />
              </li>
            );
          })}
        </ul>
        <ul className="App-list-pages">
          {buttons.map((btn) => {
            return (
              <li key={uuidv4()}>
                <button
                  onClick={(e) => changePage(e.target)}
                  className={clicked === btn ? "active" : "inactive"}
                >
                  {btn}
                </button>
              </li>
            );
          })}
        </ul>
      </>
      {modal && (
        <div onClick={() => toggleModal()}>
          <Modal props={modal} />
        </div>
      )}
    </div>
  );
}

export default App;
