import React from "react";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaCartShopping,FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import Nav from "../Components/Nav";
import Footnav from "../Components/Footnav";
import Foot from "../Components/Foot";

function Pizza() {
  const pizza = [
    {
      id:'1',
      img: "/Images/cornpizza.avif",
      alt: "cheese pizza",
      name:'Cheese Pizza',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'2',
      img: "/Images/mush1.avif",
      alt: "Veg Pizza",
      name:'Veg Pizza',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'3',
      img: "/Images/tomatopizza.jpg",
      alt: "Tomato Pizza",
      name:'Tomato Pizza',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'4',
      img: "/Images/mushroompizza.avif",
      alt: "Mushroom Pizza",
      name:'Mushroom Pizza',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'5',
      img: "/Images/cheesepizza.avif",
      alt: "Corn Pizza",
      name:'Corn Pizza',
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

      <div className="flex flex-wrap justify-center gap-10 mt-10 mx-10 ">
        {pizza.map((product) => (
          <div className="border shadow-2xl rounded-2xl w-96 hover:scale-110">
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

export default Pizza;
