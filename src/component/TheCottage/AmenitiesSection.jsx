import React, { useState } from 'react';

const Amenities = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // 100% EXACT text mapping from your provided list
  const amenitiesData = [
    {
      title: 'Top family-friendly amenities',
      items: [
        { name: 'Kitchen' },
        { name: 'Toys/Games' },
        { name: 'Microwave' },
        { name: 'Living/Dining area' },
        { name: 'Extra beds/cribs' }
      ]
    },
    {
      title: 'Popular amenities',
      items: [
        { name: 'Washer' },
        { name: 'Dryer' },
        { name: 'Pet friendly' },
        { name: 'Air conditioning' },
        { name: 'Outdoor Space' },
        { name: 'Parking available' },
        { name: 'Barbecue grill' }
      ]
    },
    {
      title: 'Essentials',
      items: [
        { name: 'Wireless internet' },
        { name: 'WiFi' },
        { name: 'Internet' },
        { name: 'High Speed Internet WiFi' },
        { name: 'Towels provided', desc: 'Bath Towels provided with linen fee, Beach towels not provided' },
        { name: 'Linens provided', desc: 'Bed Linens, Bath Towels, $25/per bed or $300 for all 12 beds.' },
        { name: 'Air conditioning', desc: 'Central A/C downstairs and upstairs, New 2017' },
        { name: 'Hair dryer' },
        { name: 'Toilet paper' },
        { name: 'Iron & board' },
        { name: 'Telephone', desc: 'Land Line' },
        { name: 'Heating', desc: 'Central A/C downstairs and upstairs, New 2017' }
      ]
    },
    {
      title: 'Kitchen',
      items: [
        { name: 'Kitchen', desc: 'Kitchen is stocked with all the amenities of home because our family uses this cottage, too.' },
        { name: 'Refrigerator' },
        { name: 'Dishwasher' },
        { name: 'Microwave' },
        { name: 'Stove' },
        { name: 'Oven' },
        { name: 'Grill' },
        { name: 'Dishes & utensils' },
        { name: 'Dining table' },
        { name: 'Coffee maker' },
        { name: 'Coffee grinder' },
        { name: 'Blender' },
        { name: 'Ice maker' },
        { name: 'Toaster' }
      ]
    },
    {
      title: 'Outside',
      items: [
        { name: 'Bicycles' },
        { name: 'Water sports gear', desc: '3 small wave boards, 4 Tommy Bahama back pack style beach chairs with drink holders and 2 smaller beach chairs' }
      ]
    },
    {
      title: 'Pets',
      items: [
        { name: 'Pet friendly' }
      ]
    },
    {
      title: 'Entertainment',
      items: [
        { name: 'Games', desc: 'Corn Hole Game, Spike Ball game and 2 boogie boards stored in the garage.' },
        { name: 'Books', desc: 'A small collection of books and NC coastal magazines scattered about.' },
        { name: 'Television', desc: 'Smart TV' },
        { name: 'Satellite / cable' },
        { name: 'DVD player', desc: 'Main living room TV and in downstairs Bedroom and 3rd floor Bedroom.' },
        { name: 'Stereo', desc: 'Living Room has stereo with blue-tooth receiver' }
      ]
    },
    {
      title: 'Baby & toddler',
      items: [
        { name: 'Toys', desc: 'A very large assortment of board games and beach toys including boogie boards and beach chairs.' },
        { name: 'Bunk bed' }
      ]
    },
    {
      title: 'Laundry',
      items: [
        { name: 'Washing machine' },
        { name: 'Dryer' }
      ]
    },
    {
      title: 'Parking',
      items: [
        { name: 'Parking', desc: "Lot's of ample parking. Can accommodate 8 cars. Room for boat trailer but limits # of cars" },
        { name: 'EV car charger', desc: 'Level II charger 220 volt 50 amp charging cord or bring your own' }
      ]
    },
    {
      title: 'Safety',
      items: [
        { name: 'Carbon monoxide detector', desc: '(host has indicated there is a carbon monoxide detector on the property)' },
        { name: 'Smoke detector', desc: '(host has indicated there is a smoke detector on the property)' },
        { name: 'All floors' },
        { name: 'Deadbolt lock' },
        { name: 'Fire extinguisher', desc: 'Kitchen and ground floor' },
        { name: 'Exterior lighting' }
      ]
    },
    {
      title: 'Location type',
      items: [
        { name: 'Beachfront', desc: "Our Cottage is only a few steps from the surf with an amazing few and a short walk to Atlantic Beach's only fishing pier." },
        { name: 'Oceanfront', desc: "The view from our enormous deck is nothing short of spectacular. The deck and main floor are the home's 2nd floor so you are raised over the small beach dunes in front for a perfect view of the ocean." }
      ]
    },
    {
      title: 'Nearby activities',
      items: [
        { name: 'Swimming' },
        { name: 'Sailing' },
        { name: 'Snorkeling' },
        { name: 'Scuba diving' },
        { name: 'Boating' },
        { name: 'Paddle boating' },
        { name: 'Kayaking' },
        { name: 'Surfing' },
        { name: 'Windsurfing' },
        { name: 'Antiquing' },
        { name: 'Ecotourism' },
        { name: 'Wildlife viewing' },
        { name: 'Birdwatching' },
        { name: 'Fishing' },
        { name: 'Marina' }
      ]
    },
    {
      title: 'Suitability',
      items: [
        { name: 'Minimum age limit for renters' }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-12 bg-[#faf4e1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Luxury Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-3xl md:text-5xl font-serif text-[#001f3f] leading-tight mb-6">
            Amenities 
          </h4>
          <div className="w-24 h-[1px] bg-[#8a4e15]/30 mx-auto"></div>
        </div>

        {/* Modern Accordion List */}
        <div className="space-y-4">
          {amenitiesData.map((category, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen ? 'border-[#8a4e15]/30 shadow-lg' : 'border-gray-100 shadow-sm hover:border-[#8a4e15]/20 hover:shadow-md'
                }`}
              >
                {/* Accordion Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:px-8 bg-white focus:outline-none group"
                >
                  <h3 className={`text-xl font-serif transition-colors duration-300 ${
                    isOpen ? 'text-[#8a4e15]' : 'text-[#001f3f] group-hover:text-[#8a4e15]'
                  }`}>
                    {category.title}
                  </h3>
                  
                  {/* Elegant Animated Arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-[#8a4e15]/10' : 'bg-gray-50 group-hover:bg-[#8a4e15]/10'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#8a4e15]' : 'text-gray-400 group-hover:text-[#8a4e15]'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Smooth Animated Content Area */}
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:px-8 pt-0 pb-8">
                      
                      {/* Grid Layout */}
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 pt-4 border-t border-gray-100">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8a4e15] shrink-0 mt-2.5"></div>
                            <div className="flex flex-col">
                              {/* Main Amenity Title */}
                              <span className="text-gray-800 font-medium text-base">
                                {item.name}
                              </span>
                              {/* Amenity Description */}
                              {item.desc && (
                                <span className="text-gray-500 font-light text-sm mt-1 leading-relaxed">
                                  {item.desc}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;