import React from 'react';
import { DoorClosed, Bath, Users, Maximize } from 'lucide-react';

const AmenitiesIcons = () => {
  const specs = [
    { label: '5 bedrooms', icon: <DoorClosed className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
    { label: '3 bathrooms', icon: <Bath className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
    { label: 'Sleeps 18', icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
    { label: '2950 sq ft', icon: <Maximize className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
  ];

  return (
    <section className="bg-[#faf4e1] py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* CHANGED: Uses a 2-column grid on mobile, switches back to flex row on medium screens and up */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4  md:flex md:flex-row md:items-center md:justify-between md:gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              
              {/* Icon Container */}
              <div className="flex items-center justify-center shrink-0">
                {spec.icon}
              </div>
              
              {/* Text Label */}
              <span className="text-sm sm:text-base md:text-xl font-medium text-gray-800 tracking-wide">
                {spec.label}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesIcons;