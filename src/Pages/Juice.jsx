import React from "react";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaCartShopping,FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import Nav from "../Components/Nav";
import Footnav from "../Components/Footnav";

function Juice() {
  const juice = [
    {
      id:'11',
      img: "/Images/mojito3.avif",
      alt: "Mojito",
      name:'Mojito',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'12',
      img: "/Images/glass198.jpg",
      alt: "Lemonade",
      name:'Lemon Soda',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'13',
      img: "/Images/mojito4.avif",
      alt: "Salt Soda",
      name:'Salt Soda',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'14',
      img: "/Images/ice2.avif",
      alt: "Ice Cream",
      name:'Ice Cream',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
   
    {
      id:'15',
      img: "/Images/cup.avif",
      alt: "Cup Ice Cream",
      name:'Cup Ice Cream',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'16',
      img: "/Images/rose.jpg",
      alt: "Rosemilk Shake",
      name:'Rosemilk Shake',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id:'17',
      img: "/Images/chocolateshake.jpg",
      alt: "Chocolate Shake",
      name:'Chocolate Shake',
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
      <div className="flex flex-wrap justify-center gap-10 mt-10 mx-10">
        {juice.map((product) => (
          <div key={product.id} className="border shadow-2xl rounded-2xl w-96">
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
      </div>
    </>
  );
}

export default Juice;
