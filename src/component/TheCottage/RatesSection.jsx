import React from 'react';

export default function RatesSection() {
  return (
    <section className="max-w-7xl bg-[#faf4e1] mx-auto px-6 py-6 md:py-14">
      
      {/* Main Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-[#333333] mb-6">
          Rates 
        </h2>
        {/* Decorative Divider Line */}
        <div className="w-full h-[1px]  bg-[#8b5a2b] max-w-full mx-auto"></div>
      </div>

      {/* Pricing Card */}
      <div className="bg-[#fcfbf9] rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
        
        <h3 className="text-gray-700 uppercase tracking-[0.15em] font-serif mb-8 text-lg">
          STANDARD RENTAL RATES
        </h3>

        {/* Table Container (Allows scrolling on tiny mobile screens) */}
        <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white">
          <table className="w-full text-left border-collapse min-w-[600px]">
            
            {/* Table Header */}
            <thead>
              <tr className=" bg-[#8b5a2b] text-white">
                <th className="py-5 px-6 font-semibold tracking-wide text-sm md:text-base">Accommodation</th>
                <th className="py-5 px-6 font-semibold tracking-wide text-sm md:text-base">Weekdays</th>
                <th className="py-5 px-6 font-semibold tracking-wide text-sm md:text-base">Weekends (Fri-Sat)</th>
                <th className="py-5 px-6 font-semibold tracking-wide text-sm md:text-base">Min Stay</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              {/* Row 1 */}
              <tr className="border-b border-gray-100 hover:bg-green-50/50 transition-colors duration-200">
                <td className="py-5 px-6 font-serif font-medium text-gray-900">Main House</td>
                <td className="py-5 px-6">$225.00</td>
                <td className="py-5 px-6">$250.00</td>
                <td className="py-5 px-6">2 Nights</td>
              </tr>
              
              {/* Row 2 */}
              <tr className="border-b border-gray-100 hover:bg-green-50/50 transition-colors duration-200">
                <td className="py-5 px-6 font-serif font-medium text-gray-900">Guest Suite</td>
                <td className="py-5 px-6">$100.00</td>
                <td className="py-5 px-6">$150.00</td>
                <td className="py-5 px-6">2 Nights</td>
              </tr>
              
              {/* Row 3 */}
              <tr className="hover:bg-green-50/50 transition-colors duration-200">
                <td className="py-5 px-6 font-serif font-medium text-gray-900">Entire Property</td>
                <td className="py-5 px-6">$415.00</td>
                <td className="py-5 px-6">$450.00</td>
                <td className="py-5 px-6">2 Nights</td>
              </tr>
            </tbody>
            
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-gray-800 text-sm md:text-base">
          * Please Request Quote for Special Events
        </div>

      </div>
    </section>
  );
}