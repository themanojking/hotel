import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Cartslice";
import Nav from "../Components/Nav";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

function Cart() {
  const dispatch = useDispatch();

  const removecart = (id) => {
    dispatch(remove(id));
  };

  const productcart = useSelector((state) => state.cart);

  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center gap-10 ">
        {productcart.map((product) => (
          <div key={product.id} className="border rounded-2xl shadow-xl w-80 ">
            <img src={product.img} alt="" className="rounded-t-2xl"></img>
            <h1 className="text-xl font-bold px-3 mt-2 text-red-600">{product.name}</h1>
            <div className="flex items-center gap-1 text-lg font-semibold px-3">
              <MdVerified />
              <h3 className="text-lg font-semibold">{product.com}</h3>
            </div>
            <div className="flex justify-center items-center gap-10  ">
              <div className="px-3 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{product.rate}</h3>
                  <FaStar />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{product.pri}</h3>
                  <RiPriceTag3Line />
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 px-3 py-2 bg-red-500 rounded-2xl w-[10rem] h-[3rem] ">
                <button
                  className="text-lg font-semibold"
                  onClick={() => removecart(product.id)}
                >
                  Remove Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
