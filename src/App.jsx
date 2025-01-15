import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      {location.pathname === '/' ? 
      <div className='mt-10'>
        <h1 className='font-bold text-3xl'>Welcome to the Expense Tracker & Todo List</h1>
        <p className='font-semibold text-2xl'>Please select an option from the menu to get started.</p>
      </div> : <Outlet />}
    </>
  )
}

export default App
