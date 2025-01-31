import React from "react";
import { IoIosRestaurant } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <>
      <div className="bg-black text-white p-10 mt-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 lg:mx-10 ">
          <div className="">
            <h2 className="text-lg font-semibold ">
              Elevate bites, build community, deliver culinary excellence with
              FastFood SM
            </h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 ">
                <IoIosRestaurant className="text-2xl" />
                <h2 className="text-lg font-bold">SRC roda,Kumbakonam.</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaMailBulk className="text-2xl" />
                <h2 className="text-lg font-bold">smcafe@gmail.com</h2>
              </div>
              <div className="flex items-center gap-2">
                <BiSolidPhoneCall className="text-2xl" />
                <h2 className="text-lg font-bold">+91 9344245993</h2>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold">Pages</h1>
            <Link to="/"><h2 className="font-semibold">Home</h2></Link>
            <Link to="/product"><h2 className="font-semibold">Product</h2></Link>
            <Link to="/about"><h2 className="font-semibold">About</h2></Link>
            <Link to="/contact"><h2 className="font-semibold">Contact</h2></Link>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Opening Hours</h1>
            <h2 className="font-semibold">Monday - Friday</h2>
            <h3 className="font-semibold">10:00 AM to 10:00 </h3>
            <h2 className="font-semibold">Saturday - Sunday</h2>
            <h3 className="font-semibold">9:00 AM to 11:00 PM</h3>
          </div>

          <div className="">
            <h1 className="text-lg font-semibold">Newsletter Subscribe</h1>
            <h3 className="font-semibold">
              Stay in the Loop: Unlock Exclusive Offers, Culinary Insights, and
              More.
            </h3>
            <div className="flex items-center gap-3 mt-5">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-black placeholder:p-3 h-[2rem] text-sm font-semibold"
                ></input>
              </div>
              <div>
                <button className="px-3 py-2 bg-rose-500 rounded-lg  ">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;
