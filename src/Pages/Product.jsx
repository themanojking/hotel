import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import Nav from "../Components/Nav";
import Footnav from "../Components/Footnav";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Foot from "../Components/Foot";

function Product() {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
    console.log(product);
  };

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

  return (
    <>
      <Nav />
      <Footnav />
      <div className="flex flex-wrap justify-center gap-20 mt-20 ">
        {pizza.map((product) => (
          <div className="border rounded-2xl w-80 hover:scale-110">
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

         <Foot />
      </div>
    </>
  );
}

export default Product;
