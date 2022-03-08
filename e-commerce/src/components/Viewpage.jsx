import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Viewpage.css";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Viewpage() {
  const [products, setProducts] = useState([]);

  const [toshow, setToshow] = useState([]);

  const { handleCart, cart } = useContext(CartContext);

  const [page, setPage] = useState(1);

  const [start, setStart] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    handleSlice();
  }, [start]);

  const handlePagination = (value) => {
    setPage((p) => p + value);

    let tem = page * 20;
    setStart(tem);
  };

  const getProducts = async () => {
    try {
      let res = await fetch("https://api.sampleapis.com/wines/reds");
      let data = await res.json();

      setProducts(data);
      setToshow(data.slice(start, start + 20));
    } catch (e) {
      console.log("error:", e);
    }
  };

  const handleSlice = () => {
    setToshow(products.slice(start, start + 20));
  };

  return (
    <>
      <h1 className="heading">Jaguvar Wines</h1>
      <div className="page">
        <button
          disabled={page == 1 ? true : false}
          onClick={() => handlePagination(-1)}
        >
          {" "}
          {"<Prev"}{" "}
        </button>
        <button onClick={() => handlePagination(+1)}> {"Next>"} </button>
        <Link to={"/cartpage"}>
          <button>Cart</button>
        </Link>
      </div>

      <div className="all-products">
        {toshow.map((e) =>
          true ? (
            <div key={e.id}>
              <div className="details">
                <img src={e.image} alt="" />
                <p>
                  <strong>{e.winery}</strong>
                </p>
                {/* <p>{e.wine}</p> */}
                <p>{`${e.rating.average} - ${e.rating.reviews}`}</p>
              </div>

              <button onClick={() => handleCart(e)} className="btn">
                Add to Cart
              </button>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default Viewpage;
