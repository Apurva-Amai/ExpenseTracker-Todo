import React from 'react';

function ExpenseFilter({ selectedYear, onYearChange }) {
  const handleYearChange = (event) => {
    onYearChange(event.target.value); // Pass the selected year to the parent component
  };

  return (
    <div className=" flex justify-center gap-10">
      <label htmlFor="year-filter" className="mr-2 text-lg font-medium flex justify-center items-center text-white">
        Filter by Year :
      </label>
      <select
        id="year-filter"
        value={selectedYear}
        onChange={handleYearChange}
        className="p-2 px-6 rounded bg-gray-300 text-black"
      >
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;