import React from 'react'
import { useContext, createContext } from 'react'

export const ExpenseContext = createContext({
    expenses: [
        {
            id: 1,
            title: 'Rent',
            amount: 1000,
            date: '2022-01-01'
        }
    ],
    addExpense: (title, amount, date) => {},
    deleteExpense: (id) => {},
    updateExpense: (title, amount, date) => {}
})

export const useExpense = () => {
    return useContext(ExpenseContext)
}

export const ExpenseProvider = ExpenseContext.Provider