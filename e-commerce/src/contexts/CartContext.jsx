import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //   console.log("cart:", cart);

  const handleCart = (e) => {
    setCart([...cart, e]);
    alert("Product added to cart successfully");
  };
  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
