import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const itemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <itemContext.Provider
      value={{
        product,
        setProduct,
        cart,
        setCart,
      }}
    >
      {" "}
      {children}
    </itemContext.Provider>
  );
};

export default ItemProvider;
