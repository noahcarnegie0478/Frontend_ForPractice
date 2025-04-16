import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { itemContext } from "../Context/ItemContext";
import NavBar from "../Component/navbar";

function ChooseItem() {
  const { product, setProduct, cart, setCart } = useContext(itemContext);

  const CallBackend = async () => {
    const result = await axios.get("http://localhost:3000/production");
    setProduct(result.data);
  };
  useEffect(() => {
    if (product.length <= 0) {
      CallBackend();
    }
  }, [product]);
  //add to cart
  console.log(cart);
  const addintoCart = prod => {
    setCart(prev => [...prev, prod]);
  };

  return (
    <div className="min-h-screen  ">
      <NavBar />
      <div className="product-display mt-50 h-100  w-full">
        <div className="title text-center font-bold text-3xl mb-5"> Items</div>
        <div className="items px-30 border-1 p-5">
          {product.length > 0 ? (
            <div className="flex justify-center items-center gap-4 h-90">
              {product.map(prod => (
                <div
                  className="item bg-white w-1/3 h-full"
                  key={prod?.id}
                  onClick={() => addintoCart(prod?.id)}
                >
                  <div>
                    <img
                      src={prod?.image}
                      className="itm-img w-full h-70"
                      alt="item"
                    />
                  </div>
                  <div className="item-content text-center ">
                    <p className="font-bold text-lg">{prod?.name}</p>
                    <p className="font-md text-gray-600"> ${prod?.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChooseItem;
