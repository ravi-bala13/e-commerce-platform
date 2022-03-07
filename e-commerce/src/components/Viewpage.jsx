import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Viewpage.css";

function Viewpage() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  console.log("cart:", cart);

  const handleCart = (e) => {
    console.log("e:", e);
    let tem = cart;
    tem.push(e);
    setCart(tem);
  };

  const [page, setPage] = useState(1);
  console.log("page:", page);

  const [start, setStart] = useState(20);
  console.log("start:", start);

  useEffect(() => {
    getProducts();
  }, []);

  const handlePagination = (value) => {
    // setPage((p) => p + value);
    // let tem = (page - 1) * 20;
    // setStart(tem);
  };

  const getProducts = async () => {
    try {
      let res = await fetch("https://api.sampleapis.com/wines/reds");
      let data = await res.json();
      // console.log("data:", data);
      setProducts(data);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <>
      <h1 className="heading">Jaguvar Wines</h1>
      <div className="page">
        {/* <button onClick={() => handlePagination(-1)}> {"<Prev"} </button>
        <button onClick={() => handlePagination(+1)}> {"Next>"} </button> */}
      </div>

      <div className="all-products">
        {products.map((e) =>
          e.id <= 20 ? (
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
