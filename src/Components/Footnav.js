import React from 'react'
import { Link } from 'react-router-dom'

function Footnav() {
  return (
     <>
        <div className='mt-10'>
             <div className='flex justify-center text-2xl font-bold'>
                  <ul className='flex gap-10'>
                    <li><Link to='/pizza'>Pizza</Link></li>
                    <li><Link to='/burger'>Burger</Link></li>
                    <li><Link to='/juice'>Juice</Link></li>
                    <li><Link to='/noodules'>Noodules</Link></li>
                  </ul>
             </div>
        </div>
     
     
     
     
     </>
  )
}

export default Footnav