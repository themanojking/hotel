import React from "react";
import Nav from "../Components/Nav";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Foot from "../Components/Foot";
import Title from "../Components/Tittle";
import Swp from "../Components/Swp";
import { useDispatch } from "react-redux";
import { add } from "../store/Cartslice";
import { FaCartShopping } from "react-icons/fa6";

function Home() {
  const home = [
    {
      img: "/Images/combo icon.png",
      tittle: "Combo Meals",
      alt: "combomeals",
    },
    {
      img: "/Images/burger icon.png",
      tittle: "Burger",
      alt: "burger",
    },
    {
      img: "/Images/chicken-icon.png",
      tittle: "Chicken",
      alt: "chicken",
    },
    {
      img: "/Images/pasta icon.png",
      tittle: "Pasta",
      alt: "pasta",
    },
    {
      img: "/Images/pizza icon.png",
      tittle: "Pizza",
      alt: "pizza",
    },
    {
      img: "/Images/sandwich icon.png",
      tittle: "Sandwich",
      alt: "sandwich",
    },
    {
      img: "/Images/meal icon.png",
      tittle: "Meal",
      alt: "meal",
    },
    {
      img: "/Images/drinks icon.png",
      tittle: "Drinks",
      alt: "drinks",
    },
  ];

  const best = [
    {
      img: "/Images/pizza-with-cheese-tomatoes.avif",
      name:'Pizza',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/chickenpic.avif",
      name:'Chicken Pizza',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/burgerpic.avif",
      name:'Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/chickenbur.jpg",
      name:'Chicken Burger',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/maggi.avif",
      name:'Maggi',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/cheesemag.jpg",
      name:'Cheese Maggi',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/momo.avif",
      name:'Momo',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/mojitopic.avif",
      name:'Mojito',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/icecream.avif",
      name:'Icecream',
      com: "SM Cafe",
      rate: "4.0/5.0",
      pri: "$99.00",
    },
  ];

  const choose = [
    {
      img: "/Images/Flavor icon.png",
      alt: "flavoricon",
      head: "Unmatched Flavor Fusion",
      desc: "Masterpieces of taste, from burgers to wraps, expertly crafted.",
    },
    {
      img: "/Images/food-safety icon.png",
      alt: "foodsafety",
      head: "Quality Ingredients, Every Time",
      desc: "Committed to the finest ingredients quality at the heart of every bite.",
    },
    {
      img: "/Images/fresh food icon.png",
      alt: "foodicon",
      head: "Fast, Fresh, and Friendly",
      desc: "More than a name, we commit to quick, fresh service.",
    },
    {
      img: "/Images/food icon.png",
      alt: "foodicon",
      head: "Signature Specials",
      desc: "Explore unique signature specials artisanal delighting taste buds.",
    },
    {
      img: "/Images/happy-client 1.png",
      alt: "Clienticon",
      head: "Customer-Centric Experience",
      desc: "Satisfaction priority. Welcoming space to enjoy, excel guided by feedback.",
    },
    {
      img: "/Images/table 1.png",
      alt: "tableicon",
      head: "Innovative Dining Solutions",
      desc: "For enthusiasts or quick bites, diverse menu embraces trends, classics.",
    },
    {
      img: "/Images/online-shopping 1.png",
      alt: "Onlineicon",
      head: "Online Convenience",
      desc: "Easy online orders: reserve tables, enjoy favorites at home effortlessly.",
    },
    {
      img: "/Images/network 1.png",
      alt: "networkicon",
      head: "Community Connection",
      desc: "Beyond a restaurant, we support locals, source locally, and contribute.",
    },
  ];

  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(add(product));
    console.log(product);
  };

  return (
    <>
      <div>
        <Nav />
        <div className="flex flex-wrap lg:flex-nowrap gap-10 ">
          <div className="p-5 lg:p-10 lg:mt-[5rem] space-y-3">
            <h1 className="text-3xl font-bold">
              Discover Delight at Fastfood SM
            </h1>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Your Go-To Spot for Quick and Tasty Eats!
            </h1>
            <h2 className="text-xl font-semibold">
              Where quick eats and quality collide,crafting a taste sensation.
              Speed meets flavor in every bite, promising a culinary journey
              that's as swift as it is delicious.
            </h2>
            <div className="flex items-center gap-2 px-3 py-2 font-semibold bg-rose-500 rounded-2xl w-36 hover:bg-white text-black border border-pink-500 hover:text-pink-500 hover:-translate-y-1">
              <button className="">Order Now</button>
              <FaArrowRight className="" />
            </div>
          </div>
          <div className="p-5">
            <img src="/Images/img2.png" alt="burger"></img>
          </div>
        </div>
        <div className="flex justify-center text-6xl">
          <MdKeyboardDoubleArrowDown />
        </div>

        <div className="flex flex-wrap justify-between gap-8 md:gap-16 px-14 lg:px-20  ">
          {home.map((product) => (
            <div className="w-[6rem]">
              <img src={product.img} alt=""></img>
              <h2 className="text-center">{product.tittle}</h2>
            </div>
          ))}
        </div>

        <div className="py-10">
           <Title title="Best Selling Items"
           subtitle="Inspect background group content align export move. Background prototype arrange team inspect clip.Vector comment link frame link group."/>
          <Swp />
        </div>

        <div className="mt-10">
          <Title
            title="Best Selling Items"
            subtitle="Inspect background group content align export move. Background prototype arrange team inspect clip. Vector comment link frame link group."
          />

          <div className="lg:px-10 mt-10 ">
            <div className="flex flex-wrap justify-center gap-10 ">
              {best.map((product) => (
                <div className="border rounded-2xl shadow-2xl shadow-purple-500 lg:w-96 w-80 ">
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="rounded-t-2xl "
                  ></img>
                  <h1 className="text-xl font-bold px-3 mt-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-1 text-lg font-semibold px-3">
                    <MdVerified />
                    <h3 className="text-lg font-semibold">{product.com}</h3>
                  </div>
                  <div className="flex justify-center items-center gap-10  ">
                    <div className="px-3 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">
                          {product.rate}
                        </h3>
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
                      <button className="text-lg font-semibold">
                        Add Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:px-10 mt-20 ">
          <Title title="Why Choose SM CAFE?"
          subtitle="Unmatched Flavors, Quality, and Community Connection." />

          <div className="flex flex-wrap gap-5 justify-center mt-10">
            {choose.map((sm) => (
              <div className="border p-5 rounded-2xl space-y-3 shadow-2xl w-80 lg:w-96 ">
                <div className="flex justify-center">
                  <img src={sm.img} alt={sm.alt} className="w-[5rem]"></img>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{sm.head}</h2>
                  <h3 className="text-lg font-semibold">{sm.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        

        <Foot />
      </div>
    </>
  );
}

export default Home;
