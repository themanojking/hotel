import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import Nav from "../Components/Nav";
import Footnav from "../Components/Footnav";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaCartShopping,FaStar } from "react-icons/fa6";
import Foot from "../Components/Foot";

function Burger() {
  const burger = [
    {
      id:'6',
      img: "/Images/burgerpic.avif",
      alt: "Burger",
      name:'Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'7',
      img: "/Images/chickenbur.jpg",
      alt: "Chicken Burger",
      name:'Chicken Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'8',
      img: "/Images/vegbur.avif",
      alt: "Veg Burger",
      name:'Veg Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'9',
      img: "/Images/meatbur.avif",
      alt: "Meat Burger",
      name:'Meat Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'10',
      img: "/Images/fishbur2.avif",
      alt: "Fish Burger",
      name:'Fish Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
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
      <div>
        <div className="flex flex-wrap justify-center gap-10 mt-10 mx-10">
          {burger.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl shadow-2xl w-96 hover:scale-110"
            >
              <img
                src={product.img}
                alt={product.alt}
                className="rounded-t-2xl "
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
        </div>
         <Foot/>
      </div>
    </>
  );
}

export default Burger;
