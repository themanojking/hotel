import React from 'react'
import { IoIosRestaurant } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import Nav from '../Components/Nav';

function Contact() {
  return (
   <> 
     <Nav />
      <div>
          <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold'>Let's Connect and Create Memorable Experiences Together</h1>
            <h3 className='text-lg font-semibold'>Reach Out for Reservations,Inquiries,or just to say hello - We're here to Serve you</h3>
          </div>

          <div className='flex flex-wrap justify-center gap-10 mt-10'>
            <div className='bg-pink-400 rounded-lg p-10 w-80'>
                <div className='flex justify-center'>
              <IoIosRestaurant className='text-5xl'  />
               </div>
                <div className='text-center'>
              <h1 className='text-2xl font-bold'>Visit Our Restaurant</h1>
              <h3 className='text-sm font-semibold'>SRC road,kumbakonam</h3>
              </div>
            </div>
            <div className='bg-pink-400 rounded-lg p-10  w-80 '>
                <div className='flex justify-center'>
              <FaMailBulk className='text-5xl'  />
               </div>
                <div className='text-center'>
              <h1 className='text-2xl font-bold'>Mail</h1>
              <h3 className='text-sm font-semibold'>smcafe@gmail.com</h3>
              </div>
            </div>
            <div className='bg-pink-400 rounded-lg p-10  w-80'>
                <div className='flex justify-center'>
              <BiSolidPhoneCall className='text-5xl'  />
               </div>
                <div className='text-center'>
              <h1 className='text-2xl font-bold'>Call</h1>
              <h3 className='text-sm font-semibold'>+91 9344245993</h3>
              </div>
            </div>
          </div>

          <div className='text-center mt-10'>
             <h1 className='text-4xl font-bold'>Get in Touch with FastFood TNC</h1>
          </div>
      </div>
   
   
   
   
   
   
   
   </>
  )
}

export default Contact