import React, { useContext, useEffect, useState } from "react";
import { itemContext } from "../Context/ItemContext";
import axios from "axios";

function Cart() {
  //khi ma trang load len, goi ham fetch xuong nhung item o trong cart va display, sau do tao nut checkout.
  // sau khi an nut checkout thi di toi trang confirm item
  const { cart, cartItem, setCartItem } = useContext(itemContext);
  //   console.log("cart_item: ", cartItem);
  return (
    <div className="w-screen flex flex-col gap-5">
      <div>
        {cartItem.length > 0 ? (
          <div className="w-full h-auto mt-20 p-20 border-1">
            {cartItem.map(item => (
              <div
                className="item bg-white w-1/3 flex gap-4 mb-5"
                key={item?.id}
              >
                <div>
                  <img
                    src={item?.image}
                    className="itm-img w-30 h-30"
                    alt="item"
                  />
                </div>
                <div className="item-content  ">
                  <p className="font-bold text-lg">{item?.name}</p>
                  <p className="font-md text-gray-600"> ${item?.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button className=" bg-black text-white ">Checkout </button>
    </div>
  );
}

export default Cart;
