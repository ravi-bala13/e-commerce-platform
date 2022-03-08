import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //   console.log("cart:", cart);

  const handleCart = (e) => {
    // console.log("e:", e);
    let tem = cart;
    tem.push(e);
    // console.log("tem:", tem);
    setCart(tem);
    alert("Product added to cart successfully");
    // console.log("cart:", cart);
  };
  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
