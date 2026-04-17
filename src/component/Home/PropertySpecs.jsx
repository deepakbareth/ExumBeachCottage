import React from 'react';
import { DoorClosed, Bath, Users, Maximize } from 'lucide-react';

const PropertySpecs = () => {
const specs = [
    { label: '5 bedrooms', icon: <DoorClosed className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
    { label: '3 bathrooms', icon: <Bath className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
    { label: 'Sleeps 18', icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
    { label: '2950 sq ft', icon: <Maximize className="w-8 h-8 md:w-10 md:h-10 text-[#8a4e15]" strokeWidth={2.5} /> },
  ];

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
    
        <div className="flex flex-row items-center justify-between gap-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4 shrink-0">
              
              {/* Icon Container */}
              <div className="flex items-center justify-center ">
                {spec.icon}
              </div>
              
              {/* Text Label */}
              <span className="text-base md:text-xl font-medium text-gray-800 whitespace-nowrap tracking-wide">
                {spec.label}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertySpecs;