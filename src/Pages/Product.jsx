import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import Nav from "../Components/Nav";
import Footnav from "../Components/Footnav";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

function Product() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
    console.log(product);
  };

  const pizza = [
    {
      id: "1",
      img: "/Images/pizza-with-cheese-tomatoes.avif",
      alt: "beefmushroom",
      name: "Cheese Tomato Pizza",
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      id: "2",
      img: "/Images/pizza-with-cheese-tomatoes.avif",
      alt: "cheesepizza",
      name: "Cheese Tomato Pizza",
      com: "SM Cafe",
      rate: "4.2/5.0",
      pri: "$199.00",
    },
    {
      id: "3",
      img: "/Images/pizza-filled-with-tomatoes.avif",
      alt: "tomatopizza",
      name: "Cheese Tomato Pizza",
      com: "SM Cafe",
      rate: "3.5/5.0",
      pri: "$149.00",
    },
    {
      id: "4",
      img: "/Images/pizza-filled-with-tomatoes.avif",
      alt: "meatpizza",
      name: "Cheese Tomato Pizza",
      com: "SM Cafe",
      rate: "4.5/5.0",
      pri: "$199.00",
    },
    {
      id: "5",
      img: "/Images/pizza-filled-with-tomatoes.avif",
      alt: "deliciouspizza",
      name: "Cheese Tomato Pizza",
      com: "SM Cafe",
      rate: "4.3/5.0",
      pri: "$99.00",
    },
    {
      id: "6",
      img: "/Images/burger.jpg",
      alt: "",
      name: "Burger",
      com: "SM Cafe",
      rate: "3.8/5.0",
      pri: "$99.00",
    },
    {
      id: "7",
      img: "/Images/burger.jpg",
      alt: "",
      name: "Burger",
      com: "SM Cafe",
      rate: "3.8/5.0",
      pri: "$99.00",
    },
    {
      id: "8",
      img: "/Images/burger.jpg",
      alt: "",
      name: "Burger",
      com: "SM Cafe",
      rate: "3.8/5.0",
      pri: "$99.00",
    },
    {
      id: "9",
      img: "/Images/burger.jpg",
      alt: "",
      name: "Burger",
      com: "SM Cafe",
      rate: "3.8/5.0",
      pri: "$99.00",
    },
    {
      id: "10",
      img: "/Images/burger.jpg",
      alt: "",
      name: "Burger",
      com: "SM Cafe",
      rate: "3.8/5.0",
      pri: "$99.00",
    },
    {
      id: "11",
      img: "/Images/mojito1.avif",
      alt: "mojito",
      name: "Mojito",
      com: "SM Cafe",
      rate: "3.9/5.0",
      pri: "$59.00",
    },
    {
      id: "12",
      img: "/Images/mojito1.avif",
      alt: "mojito",
      name: "Mojito",
      com: "SM Cafe",
      rate: "3.9/5.0",
      pri: "$59.00",
    },
    {
      id: "13",
      img: "/Images/mojito1.avif",
      alt: "mojito",
      name: "Mojito",
      com: "SM Cafe",
      rate: "3.9/5.0",
      pri: "$59.00",
    },
    {
      id: "14",
      img: "/Images/mojito1.avif",
      alt: "mojito",
      name: "Mojito",
      com: "SM Cafe",
      rate: "3.9/5.0",
      pri: "$59.00",
    },
    {
      id: "15",
      img: "/Images/mojito1.avif",
      alt: "mojito",
      name: "Mojito",
      com: "SM Cafe",
      rate: "3.9/5.0",
      pri: "$59.00",
    },
    {
      id: "16",
      img: "/Images/nood.avif",
      alt: "noodles",
      name: "Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
    {
      id: "17",
      img: "/Images/nood.avif",
      alt: "noodles",
      name: "Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
    {
      id: "18",
      img: "/Images/nood.avif",
      alt: "noodles",
      name: "Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
    {
      id: "19",
      img: "/Images/nood.avif",
      alt: "noodles",
      name: "Noodles",
      com: "SM Cafe",
      rate: "4.7/5.0",
      pri: "$89.00",
    },
  ];

  return (
    <>
      <Nav />
      <Footnav />
      <div className="flex flex-wrap justify-center gap-6 mt-20 ">
        {pizza.map((product) => (
          <div className="border rounded-2xl w-80">
            <img
              src={product.img}
              alt={product.alt}
              className="rounded-t-2xl"
            ></img>
            <h1 className="text-xl font-bold px-3 mt-2">{product.name}</h1>
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

export default Product;
