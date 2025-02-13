import React from 'react';

function ExpenseFilter({ selectedYear, onYearChange, expenses }) {
  const handleYearChange = (event) => {
    onYearChange(event.target.value);
  };

  // Get unique years from expenses
  const getUniqueYears = () => {
    const years = expenses.map(expense => new Date(expense.date).getFullYear());
    const uniqueYears = [...new Set(years)];
    // Add current year if not present
    const currentYear = new Date().getFullYear();
    if (!uniqueYears.includes(currentYear)) {
      uniqueYears.push(currentYear);
    }
    return uniqueYears.sort((a, b) => b - a); // Sort in descending order
  };

  return (
    <div className="flex justify-center gap-10">
      <label htmlFor="year-filter" className="mr-2 text-lg font-medium flex justify-center items-center text-white">
        Filter by Year :
      </label>
      <select
        id="year-filter"
        value={selectedYear}
        onChange={handleYearChange}
        className="p-2 px-6 rounded bg-gray-300 text-black"
      >
        {getUniqueYears().map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;