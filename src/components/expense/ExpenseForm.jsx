import React, { useState } from 'react'
import { useExpense } from '../../contexts'

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const {addExpense} = useExpense()

    const addExpenseHandler = (e) => {
        e.preventDefault();

        if(!title || !amount || !date) {
            alert('Please fill in all fields');
        } else {
            addExpense(title, amount, date);
            setTitle('');
            setAmount('');
            setDate('');
        }
    }

  return (
    <form onSubmit={addExpenseHandler} className='flex flex-wrap gap-y-4 mt-12'>
        <div className='w-1/2 flex justify-start items-center'>
            <label className='w-20 text-xl text-left font-semibold'>Title :</label>
            <input 
                className='w-3/4 rounded p-2'
                type="text" 
                value={title}
                placeholder='Enter title'
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className='w-1/2 flex justify-start items-center'>
            <label className='w-1/4 pr-3 text-xl font-semibold'>Amount :</label>
            <input
                className='w-3/4 rounded p-2'
                type='number'
                value={amount}
                placeholder='Enter amount'
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <div className='w-1/2 flex justify-start items-center'>
            <label className='w-20 text-xl text-left font-semibold'>Date :</label>
            <input 
                className='w-3/4 rounded p-2'
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
        </div>
        <div className='w-1/2 flex justify-center'>
        <button type="submit" className='w-44 bg-blue-600 rounded-md hover:bg-blue-500 duration-200 font-bold'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm