import React from 'react';

export default function AdditionalPricing() {
  return (
    <section className="max-w-7xl  mx-auto px-6 py-8">
      {/* Main Card Container */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
        
        {/* Header */}
        <h3 className="text-3xl font-serif text-gray-800 text-center mb-4 pb-6 border-b border-gray-100">
          Additional Pricing Information
        </h3>

        {/* List Container */}
        <div className="flex flex-col">
          
          {/* Row 1 */}
          <div className="flex justify-between items-center py-4 border-b border-gray-50">
            <span className="text-gray-700 text-base md:text-lg">1 Night Booking Charge</span>
            <span className="font-semibold text-gray-900 text-base md:text-lg">$75</span>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center py-4 border-b border-gray-50">
            <span className="text-gray-700 text-base md:text-lg">Pet Fee</span>
            <span className="font-semibold text-gray-900 text-base md:text-lg">$50</span>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-center py-4 border-b border-gray-50">
            <span className="text-gray-700 text-base md:text-lg">Cleaning Fee</span>
            <span className="font-semibold text-gray-900 text-base md:text-lg">$100</span>
          </div>

          {/* Row 4 - Percentage Pill */}
          <div className="flex justify-between items-center py-4 border-b border-gray-50">
            <span className="text-gray-700 text-base md:text-lg">Tax Rate</span>
            <span className="bg-[#f0f5ff] text-[#8b5a2b] font-medium px-4 py-1 rounded-full text-sm">
              11.3%
            </span>
          </div>

          {/* Row 5 - Percentage Pill */}
          <div className="flex justify-between items-center py-4 border-b border-gray-50">
            <span className="text-gray-700 text-base md:text-lg">Processing Fee</span>
            <span className="bg-[#f0f5ff] text-[#8b5a2b]  font-medium px-4 py-1 rounded-full text-sm">
              8%
            </span>
          </div>

          {/* Row 6 - Long Text */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-2 md:gap-6">
            <span className="text-gray-700 text-base md:text-lg whitespace-nowrap">
              Other Services
            </span>
            <span className="text-[#8c98a4] font-medium text-sm md:text-right leading-relaxed md:max-w-sm">
              Day Use Rate available.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}