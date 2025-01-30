import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import { Provider } from 'react-redux';
import store from './store/Store';
import Cart from './store/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Pizza from './Pages/Pizza';
import Burger from './Pages/Burger';
import Juice from './Pages/Juice';
import Noodules from './Pages/Noodules';



function App() {
  return (
    <>
      <div className=''>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/pizza' element={<Pizza />}></Route>
            <Route path='/burger' element={<Burger />}></Route>
            <Route path='/juice' element={<Juice />}></Route>
            <Route path='/noodules' element={<Noodules/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default App


