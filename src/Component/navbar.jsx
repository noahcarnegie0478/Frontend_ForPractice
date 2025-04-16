import React, { useContext } from "react";
import "boxicons";
import logo from "../assets/react.svg";
import { itemContext } from "../Context/ItemContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const { cart } = useContext(itemContext);
  const handleNetwork = () => {
    navigate("/cart");
  };
  return (
    <div className="nav-bar h-20 bg-white flex justify-center items-center px-30">
      <div className="logo w-1/3 ">
        <img src={logo} alt="" className="h-10 w-10" />
      </div>
      <div className="middile w-1/3"></div>
      <div className="icon w-1/3 text-end flex gap-4">
        <div className="icon-cart relative flex-1 "></div>
        <div className="icon-cart relative  flex-1 "></div>
        <div
          className="icon-cart relative flex-1 relative "
          onClick={() => handleNetwork()}
        >
          <box-icon
            name="cart-add"
            style={{
              width: "35px",
              height: "35px",
              marginRight: "10px",
              marginTop: "5px",
            }}
          ></box-icon>
          {cart?.length > 0 ? (
            <p className=" absolute right-0 top-0 bg-red-500 px-2 rounded-full ">
              {cart.length}
            </p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
