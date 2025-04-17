import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const itemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const postCart = async cart => {
    await axios.post("http://localhost:3000/cart", {
      cart: cart,
    });
    fetchCartItems();
  };

  const fetchCartItems = async () => {
    const { data: result } = await axios.get("http://localhost:3000/cart");
    setCart(result);
    const ids = result.map(crt => crt.production_id);
    if (ids.length > 0) {
      const { data: item } = await axios.post("http://localhost:3000/cardID", {
        cart: ids,
      });
      setCartItem(item);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [0]);

  return (
    <itemContext.Provider
      value={{
        product,
        setProduct,
        cart,
        setCart,
        postCart,
        cartItem,
        setCartItem,
      }}
    >
      {" "}
      {children}
    </itemContext.Provider>
  );
};

export default ItemProvider;
