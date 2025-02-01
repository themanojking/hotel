import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import { ImSpoonKnife } from "react-icons/im";


function Nav() {
  const cartproducts = useSelector(state => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex justify-between items-center p-5 bg-white shadow-md'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <div className='text-3xl font-bold'>
           <ImSpoonKnife />
        </div>
         <div>
          <h1 className='text-2xl font-bold text-red-600  '>SM CAFE</h1>
         </div>
      </div>

      {/* Desktop Nav */}
      <nav className='hidden lg:flex gap-10 items-center text-xl font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>
          <div className='flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-2xl'>
            <FaCartShopping className='text-2xl' />
            <span>Cart ({cartproducts.length})</span>
          </div>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className='lg:hidden text-3xl' 
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md lg:hidden flex flex-col items-center gap-5 py-5 text-xl font-bold'>
          <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/product' onClick={() => setIsOpen(false)}>Product</Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
          <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to='/cart' onClick={() => setIsOpen(false)}>
            <div className='flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-2xl'>
              <FaCartShopping className='text-2xl' />
              <span>Cart ({cartproducts.length})</span>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Nav;
