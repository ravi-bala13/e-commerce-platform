import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import "./Cartpage.css";

function Cartpage() {
  const { cart } = useContext(CartContext);
  console.log("cart:", cart);

  return (
    <div className="container">
      {cart.length > 0 ? (
        <div className="left-cart">
          {cart.map((e) => (
            <div className="each-product" key={e.id}>
              <div className="img">
                <img src={e.image} alt="" />
              </div>

              <div className="description">
                <p>
                  {" "}
                  <strong> {e.winery}</strong>{" "}
                </p>
                <p>{e.wine}</p>
                <p>{`${e.rating.average} - ${e.rating.reviews}`}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="empty"> Empty</h1>
        </div>
      )}

      <div className="right-saved-items"></div>
    </div>
  );
}

export default Cartpage;
