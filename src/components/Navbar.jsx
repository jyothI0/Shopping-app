import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div className='bg-slate-900'>
      <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto bg-slate-900'>
        <NavLink to = "/">
          <img src='https://codehelp-shopping-cart.netlify.app/logo.png' className='h-14'/>
        </NavLink>
        <div className='flex items-center mr-5 space-x-6 font-medium list-none text-slate-100 -tracking-tighterr'>
          <NavLink to="/" className="transition duration-300 ease-in cursor-pointer hover:text-green-400">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart" className="text-2xl transition duration-200 transform cursor-pointer hover:text-green-400">
            <FaShoppingCart />
            {
              cart.length > 0 &&
              <span className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-green-600 rounded-full animate-bounce -top-1 -right-2 top-'>{cart.length}</span>
            }
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;