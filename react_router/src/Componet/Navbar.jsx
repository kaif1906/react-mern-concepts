import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black text-white'>
        <ul className='flex justify-end items-center gap-10 p-4'>
            <li>
                <NavLink className={(e)=>{return e.isActive?"bg-blue-600":""}} to="/home">Home</NavLink>
            </li>

            <li>
                <NavLink className={(e)=>{return e.isActive?"bg-blue-600":""}} to="/Contact">Contact</NavLink>
            </li>

            <li>
                <NavLink className={(e)=>{return e.isActive?"bg-blue-600":""}} to="/About">About</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar