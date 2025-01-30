import React from 'react'
import Nav from '../Components/Nav'
import CountUp from 'react-countup'
import { FaArrowRight } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { FaGifts } from "react-icons/fa";
// import ScrollTrigger from 'react-scroll-trigger';



function About() {
    // const [counterOn,setCounterOn] = useState();

  return (
    <>
        <Nav />
         <div className='lg:flex  justify-center gap-10 px-10 items-center'>
            <div className='lg:w-[50%]'>
                <img src='/Images/hotel.jpg' alt='hotel' className='rounded-tl-[35%]'></img>
            </div>
            <div className='space-y-2 lg:w-[30%] mt-10 lg:mt-0'>
                <h2 className='text-2xl font-bold'>Hey, We Aren't That Far!</h2>
                <h4 className='text-lg font-semibold'>Explore our premium selection of dry fruits, nuts, chocolates, and more. Whether you're looking for a healthy snack or a delicious treat, we offer the finest quality products to satisfy your cravings. Freshness and flavor are just a click away !</h4>
                <h3 className='text-xl font-semibold'>Click To Shop</h3>
                <div className='flex items-center gap-2 px-3 py-2 bg-rose-500 rounded-2xl text-lg font-semibold w-36'>
                  <button>Order Now </button>
                  <FaArrowRight />
                </div>
            </div>
         </div>

         <div className='flex flex-wrap justify-center gap-10 px-20 py-10'>
             {/* <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>  */}
             
            <div className='border shadow-2xl p-4 bg-rose-500 rounded-xl'>
                <h3 className='text-xl font-bold'>
                    <CountUp start={0} end={350} duration={10} />+
                </h3>
                <h2 className='text-lg font-semibold'>Stores</h2>
            </div>
            <div className='border shadow-2xl p-4 bg-rose-500 rounded-xl'>
                <h3 className='text-xl font-bold'>
                    <CountUp start={0} end={100000} duration={10} />+
                </h3>
                <h2 className='text-lg font-semibold'>Happy Customers</h2>
            </div>
            <div className='border shadow-2xl p-4 bg-rose-500 rounded-xl'>
                <h3 className='text-xl font-bold'>
                    <CountUp start={0} end={1000} duration={10} />+
                </h3>
                <h2 className='text-lg font-semibold'>Orders Delivered</h2>
            </div>
            
            {/* </ScrollTrigger>  */}
         </div>

        <div className='px-8 '>
         <div className='lg:flex justify-center md:grid grid-cols-2  p-2 border shadow-xl rounded-xl items-center'>
            <div className='text-center lg:border-r-2 md:border-r-2   py-10 lg:px-[6%] space-y-2 '>
               <div className='flex justify-center'>
                 <FaTruckArrowRight className='text-5xl'/>
               </div>
              <h2 className='text-lg font-bold'>Free Shipping Purchase Upto $200</h2>
            </div>
            <div className='text-center lg:border-r-2 md:border-b-2 lg:border-b-0  py-10  lg:px-[6%] space-y-2 '>
               <div className='flex justify-center'>
                <BsCashCoin  className='text-5xl'/>
               </div>
              <h2 className='text-lg font-bold'>Pay on Delivery</h2>
            </div>
            <div className='text-center lg:border-r-2 md:border-t-2 lg:border-t-0 py-10  lg:px-[6%] space-y-2 '>
               <div className='flex justify-center'>
               <FaMedal className='text-5xl'/>
               </div>
              <h2 className='text-lg font-bold'>100% Quality</h2>
            </div>
            <div className='text-center md:border-l-2 lg:border-l-0 py-10 lg:px-[6%] space-y-2 '>
               <div className='flex justify-center'>
               <FaGifts className='text-5xl'/>
               </div>
              <h2 className='text-lg font-bold'>Wining Rewards</h2>
            </div>
         </div>
         </div>

    
    
    
    
    
    
    
    </>
  )
}

export default About