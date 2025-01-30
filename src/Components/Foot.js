import React from 'react'
import { IoIosRestaurant } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

function Foot() {
  return (
    <>
      <div className='bg-black text-white p-10'>
         <div className='flex flex-wrap lg:flex-nowrap justify-between gap-10 lg:mx-10 '>
             <div>
                <h2 className='text-lg font-semibold '>Elevate bites, build community, deliver culinary excellence with FastFood SM</h2>
                     <div className='flex items-center gap-2 '>
                         <IoIosRestaurant className='text-2xl'  />
                         <h2 className='text-lg font-bold'>SRC roda,Kumbakonam.</h2>
                     </div>
                     <div className='flex items-center gap-2'>
                         <FaMailBulk className='text-2xl'  />
                         <h2 className='text-lg font-bold'>smcafe@gmail.com</h2>
                     </div>
                     <div className='flex items-center gap-2'>
                         <BiSolidPhoneCall className='text-2xl'  />
                         <h2 className='text-lg font-bold'>+91 9344245993</h2>
                     </div>
             </div>
             <div>
                 <h1>Quick Links</h1>
                 <h2>Home</h2>
                 <h2>Product</h2>
                 <h2>About</h2>
                 <h2>Contact</h2>
             </div>

             <div>
                <h1>Opening Hours</h1>
                <h2>Monday - Friday</h2>
                <h3>10:00 AM to 10:00 PM</h3>
                <h2>Saturday - Sunday</h2>
                <h3>9:00 AM to 11:00 PM</h3>
             </div>

             <div>
                <h1>Newsletter Subscribe</h1>
                <h3>Stay in the Loop: Unlock Exclusive Offers, Culinary Insights, and More.</h3>
                 <div className='flex gap-3'>
                     <div>
                    <input type='email' placeholder='Your Email' className='border border-black placeholder:p-2 text-sm font-semibold'></input>
                    </div>
                    <div>
                      <button className='px-3 py-2 bg-rose-300 rounded-lg  '><FaArrowRight /></button>
                    </div>
                 </div>
             </div>
         </div>
      </div>
    
    
    
    
    </>
  )
}

export default Foot