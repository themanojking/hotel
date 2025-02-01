import React from "react";
import Nav from "../Components/Nav";
import Footnav from "../Components/Footnav";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Foot from "../Components/Foot";

function Noodules() {
  const noodules = [
    {
      id: "18",
      img: "/Images/porn.avif",
      alt: "Porn Noodles",
      name: "Porn Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
    {
      id: "19",
      img: "/Images/nood1.jpg",
      alt: "Noodles",
      name: "Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
    {
      id: "20",
      img: "/Images/nood2.avif",
      alt: "Cheese Noodles",
      name: "Cheese Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
    {
      id: "21",
      img: "/Images/nood3.avif",
      alt: "Egg Noodles",
      name: "Egg Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
  ];

  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
    console.log(product);
  };

  return (
    <>
      <Nav />
      <Footnav />
      <div className="flex flex-wrap justify-center gap-10 mt-10 mx-10">
        {noodules.map((product) => (
          <div className="border shadow-2xl w-96 rounded-2xl hover:scale-110">
            <img
              src={product.img}
              alt={product.alt}
              className="rounded-t-2xl"
            ></img>
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
              <div
                className="flex justify-center items-center gap-4 px-3 py-2 bg-blue-500 rounded-2xl w-[10rem] h-[3rem] "
                onClick={() => addcart(product)}
              >
                <FaCartShopping className="text-2xl" />
                <button className="text-lg font-semibold">Add Cart</button>
              </div>
            </div>
          </div>
        ))}
         <Foot/>
      </div>
    </>
  );
}

export default Noodules;
