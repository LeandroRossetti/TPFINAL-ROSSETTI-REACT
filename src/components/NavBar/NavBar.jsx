import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header  className='flex flex-row bg-sky-700  items-center justify-around mb-px border-solid border-2 border-black'>

      <Link to="/">
      <img src='../img/logo.jpg' alt="" className='w-20' />
      </Link>
      <nav >
        <ul>
          <NavLink to="/categoria/2">
            <li className='inline-block m-4 cursor-pointer hover:text-black text-white font-bold '>Latex exterior</li>
            </NavLink>
            <NavLink to="/categoria/3">
            <li className='inline-block m-4 cursor-pointer hover:text-black text-white font-bold '>Latex interior</li>
            </NavLink>
            <NavLink to="/categoria/4">
            <li className='inline-block m-4 cursor-pointer hover:text-black text-white font-bold '>Brochas</li>
            </NavLink>
            <NavLink to="/categoria/5">
            <li className='inline-block m-4 cursor-pointer hover:text-black text-white font-bold '>Bandejas</li>
            </NavLink>
            <NavLink to="/categoria/6">
            <li className='inline-block m-4 cursor-pointer hover:text-black text-white font-bold '>Escaleras</li>
            </NavLink>
        </ul>


      </nav>
      <CartWidget />
      
    </header>
  )
}

export default NavBar