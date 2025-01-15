import React, { useEffect, useMemo, useState } from "react";
import { ExpenseProvider } from "./contexts";
import ExpenseForm from "./components/expense/ExpenseForm";
import ExpenseList from "./components/expense/ExpenseList";
import { v4 as uuidv4 } from "uuid";
import ExpenseFilter from "./components/expense/ExpenseFilter";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2025");

  const addExpense = (title, amount, date) => {
    setExpenses((prev) => [{ id: uuidv4(), title, amount, date }, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const updateExpense = (id, updatedExpense) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  const filterExpenses = useMemo(() => {
    return expenses.filter((expenses) => {
      const expenseYear = new Date(expenses.date).getFullYear().toString();
      return expenseYear === selectedYear;
    });
  }, [selectedYear, expenses]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");

    if (storedExpenses && storedExpenses.length > 0) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseProvider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      <ExpenseForm />
      <div className="w-full bg-slate-900 mt-6 rounded-md p-4">
        <ExpenseFilter
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
      </div>
      <div className="flex flex-wrap gap-y-1">
        {filterExpenses.length === 0 ? (
          <p className="w-full p-4 text-2xl font-bold">No Expense Found</p>
        ) : (
          filterExpenses.map((expense) => (
            <div key={expense.id} className="w-full">
              <ExpenseList expense={expense} />
            </div>
          ))
        )}
      </div>
    </ExpenseProvider>
  );
}

export default Expense;
