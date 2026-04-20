import React, { useState } from 'react';

const AvailabilityCalendar = () => {
  // State for the calendar display (which month we are looking at)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // April 2026 (0-indexed month)
  
  // State for user selections
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // Arrays for formatting
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // EXACT days from screenshot
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  // --- CALENDAR LOGIC HELPERS ---
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleRefresh = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
    setCurrentDate(new Date(2026, 3, 1)); // Reset to base date
  };

  const handleDateClick = (dateObj) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(dateObj);
      setCheckOutDate(null);
    } else if (dateObj < checkInDate) {
      setCheckInDate(dateObj);
    } else {
      setCheckOutDate(dateObj);
    }
  };

  // --- RENDER A SINGLE MONTH BOX ---
  const renderMonth = (yearOffset, monthOffset) => {
    const displayDate = new Date(currentDate.getFullYear() + yearOffset, currentDate.getMonth() + monthOffset, 1);
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Fill blank days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 border border-transparent"></div>);
    }

    // Fill actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      
      const isCheckIn = checkInDate?.getTime() === dateObj.getTime();
      const isCheckOut = checkOutDate?.getTime() === dateObj.getTime();
      const isInRange = checkInDate && checkOutDate && dateObj > checkInDate && dateObj < checkOutDate;
      const isToday = new Date().getTime() === dateObj.getTime(); 

      // Modern styling logic
      let bgClass = "bg-white hover:bg-[#8a4e15]/10 text-gray-700";
      if (isCheckIn || isCheckOut) {
        bgClass = "bg-[#001f3f] text-white font-bold shadow-md transform scale-[1.02] z-10 rounded";
      } else if (isInRange) {
        bgClass = "bg-[#001f3f]/10 text-[#001f3f] font-medium";
      }

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(dateObj)}
          className={`w-full aspect-square flex  items-center justify-center text-sm md:text-base transition-all duration-200 border border-gray-100 ${bgClass} ${isToday && !isCheckIn && !isCheckOut ? 'bg-gray-100 font-bold' : ''}`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white shadow-sm border border-gray-200 overflow-hidden">
        {/* Month Header - Exactly like the image but with modern colors */}
        <div className=" bg-[#8b5a2b] py-4 text-center">
          <h3 className="text-white font-serif uppercase tracking-[0.1em] text-xl">
            {monthNames[month]}, {year}
          </h3>
        </div>
        
        <div className="p-0">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7  bg-[#8b5a2b] border-t border-white/20">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-white py-3 font-bold text-sm tracking-wider">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 bg-gray-50 border-l border-b border-gray-200">
            {days}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf4e1]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Header & EXACT Instructions */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-[#001f3f] mb-6">Availability</h2>
          <p className="text-gray-900 text-lg md:text-xl">
            <span className="font-bold">Note*</span> Please click first on Checkin Date then Checkout Date for booking.
          </p>
        </div>

        {/* EXACT Legend from Screenshot */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8">
          <div className="px-4 py-2 bg-[#e2e2e2] text-gray-800 text-xs md:text-sm uppercase tracking-wider rounded">
            CURRENT DATE
          </div>
          <div className="px-4 py-2 bg-[#e2e2e2] text-gray-800 text-xs md:text-sm uppercase tracking-wider rounded flex items-center gap-2">
            START DATE <span className="text-[#8a4e15] text-[10px]">▲</span>
          </div>
          <div className="px-4 py-2 bg-[#e2e2e2] text-gray-800 text-xs md:text-sm uppercase tracking-wider rounded flex items-center gap-2">
            END DATE <span className="text-[#8a4e15] text-[10px]">▲</span>
          </div>
          <div className="px-4 py-2 bg-[#ff0000] text-white font-bold text-xs md:text-sm uppercase tracking-wider rounded">
            BOOKED
          </div>
        </div>

        {/* EXACT Controls from Screenshot */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={handlePrevMonth} className="px-6 py-2.5  bg-[#8b5a2b] hover:bg-[#8a4e15] text-white transition-colors rounded text-sm md:text-base font-medium">
            ← Prev Months
          </button>
          
          <button onClick={handleRefresh} className="px-6 py-2.5 bg-[#001f3f] hover:bg-[#8a4e15] text-white transition-colors rounded text-sm md:text-base font-medium">
            Refresh Calendar
          </button>
          
          <button onClick={handleNextMonth} className="px-6 py-2.5 bg-[#8b5a2b] hover:bg-[#8a4e15] text-white transition-colors rounded text-sm md:text-base font-medium">
            Next Months →
          </button>
        </div>

        {/* Calendar Grid (Shows Two Months Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Render Current Month */}
          {renderMonth(0, 0)}
          
          {/* Render Next Month */}
          {renderMonth(0, 1)}
        </div>

      </div>
    </section>
  );
};

export default AvailabilityCalendar;