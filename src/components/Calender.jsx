import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addMonths, startOfMonth, endOfMonth, format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the theme

const DateRangeSelector = () => {
  // Get the current date
  const today = new Date();
  // Define the current month and the next month
  const currentMonth = startOfMonth(today);
  const nextMonth = addMonths(currentMonth, 1);

  // Initial date range state
  const [selectionRange, setSelectionRange] = useState({
    startDate: currentMonth,
    endDate: endOfMonth(currentMonth),
    key: 'selection',
  });

  // Update the date range
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  console.log(selectionRange.startDate)
  console.log(selectionRange.endDate)


  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-semibold mb-4">
        Select Date Range for mess cut 
      </h2>
      <DateRange
      className='rounded-3xl'
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={[selectionRange]}
        months={2}
        direction="horizontal"
        rangeColors={['#3b82f6']} // Tailwind blue-500
        showDateDisplay={false}
        minDate={currentMonth}
        maxDate={endOfMonth(nextMonth)}
      />
      <div><h1> start date   ->>> {selectionRange.startDate.toString()}</h1>
      <h1>end date ->>> {selectionRange.endDate.toString()}</h1></div>
    </div>
  );
};

export default DateRangeSelector;

