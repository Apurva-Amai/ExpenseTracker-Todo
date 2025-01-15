import React, { useState } from "react";
import { useExpense } from "../../contexts";

function ExpenseList({ expense }) {
  const { deleteExpense, updateExpense } = useExpense();
  const [expenseTitle, setExpenseTitle] = useState(expense.title);
  const [expenseAmount, setExpenseAmount] = useState(expense.amount);
  const [expenseDate, setExpenseDate] = useState(expense.date);
  const [isExpenseEditable, setIsExpenseEditable] = useState(false);

  const editExpense = () => {
    updateExpense(expense.id, {title: expenseTitle, amount: expenseAmount, date: expenseDate});
    setIsExpenseEditable(false);
  }

  return (
    <div className="flex items-center space-x-3 bg-stone-400 px-3 py-1.5 rounded-sm border border-black w-full mt-3">
      <div className="">
        <input 
        className="outline-none bg-cyan-900 text-white p-2 rounded"
        type="date" 
        value={expenseDate}
        onChange={(e) => setExpenseDate(e.target.value)}
        readOnly={!isExpenseEditable}
        />
      </div>
      <div className="w-3/4">
        <input 
        className={`w-full border outline-none p-2 bg-transparent rounded text-lg font-bold font-sans 
          ${ isExpenseEditable ? "border-black/10" : "border-transparent"}`}
        type="text"
        value={expenseTitle}
        onChange={(e) => setExpenseTitle(e.target.value)}
        readOnly={!isExpenseEditable}
        />
      </div>
      <div className="p-2 flex gap-1 bg-cyan-900 text-white rounded">
        <span className="font-semibold pl-1 text-xl bg-transparent">₹</span>
        <input className="w-24  bg-transparent text-left outline-none"
        type="number"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        readOnly={!isExpenseEditable}
        />
      </div>
      <div className="">
        <button
        className="bg-blue-500 px-4 py-1 hover:bg-blue-400 rounded"
        onClick={() => {
            if(isExpenseEditable) {
                editExpense();
            } else {
                setIsExpenseEditable((prev) => !prev);
            }
        }}
        >
            {isExpenseEditable ? "📁" : "✏️"}
        </button>
      </div>
      <div className=" flex">
      <button
      onClick={() => deleteExpense(expense.id)}
      className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      </div>
    </div>
  );
}

export default ExpenseList;
