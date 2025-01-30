import React from "react";
import Nav from "../Components/Nav";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import Foot from "../Components/Foot";
import Title from "../Components/Tittle";
import Swp from "../Components/Swp";

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
      img: "/Images/hamburger.jpg",
      com: "SM Cafe",
      star: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/hamburger.jpg",
      com: "SM Cafe",
      star: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/hamburger.jpg",
      com: "SM Cafe",
      star: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/hamburger.jpg",
      com: "SM Cafe",
      star: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/hamburger.jpg",
      com: "SM Cafe",
      star: "4.0/5.0",
      pri: "$99.00",
    },
    {
      img: "/Images/hamburger.jpg",
      com: "SM Cafe",
      star: "4.0/5.0",
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
  return (
    <>
      <div>
        <Nav />
        <div className="flex flex-wrap lg:flex-nowrap gap-10 ">
          <div className="p-5 lg:p-10 lg:mt-[5rem] space-y-3">
            <h1 className="text-3xl font-bold">
              Discover Delight at Fastfood SM
            </h1>
            <h1 className="text-5xl font-bold">
              Your Go-To Spot for Quick and Tasty Eats!
            </h1>
            <h2 className="text-xl font-semibold">
              Where quick eats and quality collide,crafting a taste sensation.
              Speed meets flavor in every bite, promising a culinary journey
              that's as swift as it is delicious.
            </h2>
            <div className="flex items-center gap-2 px-3 py-2 bg-red-500 rounded-2xl w-36">
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

        <Title
          title="Best Selling Items"
          subtitle="Inspect background group content align export move. Background prototype arrange team inspect clip. Vector comment link frame link group."
        />

        <div></div>

        <div className="lg:px-10 ">
          <div className="flex flex-wrap justify-center gap-6">
            {best.map((item) => (
              <div className="border rounded-2xl shadow-2xl shadow-purple-500 lg:w-96 w-80 ">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="rounded-t-2xl "
                ></img>
                <div className="space-y-1 p-2">
                  <div className="flex items-center gap-1 text-lg font-semibold">
                    <MdVerified />
                    <h3>{item.com}</h3>
                  </div>
                  <h2 className="text-lg font-semibold">{item.star}</h2>
                  <div className="flex items-center text-xl font-semibold">
                    <h2>{item.pri}</h2>
                    <RiPriceTag3Line />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:px-10 ">
          <Title title="Why Choose SM CAFE?" />

          <div className="flex flex-wrap gap-5 justify-center">
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
        <div className="py-10">
          <Swp />
        </div>

        <Foot />
      </div>
    </>
  );
}

export default Home;
