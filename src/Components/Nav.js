import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";

function Nav() {
  const cartproducts = useSelector(state =>state.cart)
  return (
    <>
      <header className='flex justify-between p-5 '>
        <div className=''>
            <h1 className='text-2xl font-bold'>SM CAFE</h1>
        </div>

        <nav>
            <ul className='lg:flex hidden gap-10 items-center text-xl font-bold'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/product'><li>Product</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/cart'><div className='flex items-center gap-2 px-3 py-2 bg-blue-500 rounded-2xl '>
              
                   <FaCartShopping className='text-2xl' />
                   <button className=''>Go to Cart {cartproducts.length}</button>
                </div></Link>
                
            </ul>
        </nav>
      </header>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Nav