import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="shadow top-0 w-full">
        <nav className='bg-gray-300 flex justify-center p-3 text-xl font-semibold gap-28'>
            <NavLink to='/expense'
            className={({isActive}) => `${isActive ? "text-red-700" : "text-black"}`}>
                Expense Tracker
            </NavLink>
            <NavLink to='/todo'
            className={({isActive}) => `${isActive ? "text-red-700" : "text-black"}`}>
                Todo List
            </NavLink>
        </nav>
    </header>
  )
}

export default Header