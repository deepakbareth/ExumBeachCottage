import React, { useState } from 'react';
// Import an image for the right side. Replace with an actual property image.
import propertyImg from '../../assets/images/h4.jpg'; 
import { Waves, Coffee, Utensils, Sprout, Car } from 'lucide-react';

const AboutProperty = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Amenities data from your second screenshot
  const amenities = [
{ name: 'Deck or patio', icon: <Waves className="w-6 h-6" strokeWidth={1.5} /> },
    { name: 'Porch or lanai', icon: <Coffee className="w-6 h-6" strokeWidth={1.5} /> },
    { name: 'Kitchen', icon: <Utensils className="w-6 h-6" strokeWidth={1.5} /> },
    { name: 'Garden', icon: <Sprout className="w-6 h-6" strokeWidth={1.5} /> }, 
    { name: 'Parking & EV', icon: <Car className="w-6 h-6" strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          {/* Modern Heading Area */}
          <div className="space-y-3">
            <h4 className="text-[#8a4e15] font-bold uppercase tracking-[0.2em] text-xl">About this property</h4>
            <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight">
              The Exum Cottage
            </h2>
            <p className="text-lg md:text-xl font-medium text-gray-600">
              Beachfront in Atlantic Beach, North Carolina
            </p>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg text-gray-600 text-[18px] leading-relaxed max-w-none font-light">
            <p>
              The Exum beach cottage on Atlantic Beach, NC, is a family home with a three-generation history. Each generation has added photographs, books and original works of art, all of which give the cottage its unique character. Constructed in 1948, when there was only one other cottage on Club Colony Drive, the house was restored after Hurricane Hazel in 1954 and extensively renovated in 2022.
            </p>
            <p className="mt-4">
              Located on the beach front and surrounded by a garden of native plants, dune grasses and herbs, the house features a hammock for lounging over the sand, a front porch with rocking chairs on the second level and a spectacular panoramic ocean view from the third-floor master suite.
            </p>

            {/* EXPANDABLE CONTENT (Screenshot 3) */}
            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <p className="mt-4">
                With five bedrooms and three baths, the house comfortably sleeps twelve. The warmth and charm of a traditional NC beach cottage are complemented by upscale modern amenities, including WiFi, four flat-screen televisions, Bluetooth wireless technology, an EV charger with/Tesla adapter and solar array that supplies electricity for the entire house with battery back up.
              </p>
              <p className="mt-4">
                The entrance to the first level is a chart room with maps of the local terrain and waterways, guide books for planning excursions and a sitting area. The ground-level bunk room has its own bath, as well as access to an outdoor shower. On the second floor are three thematically decorated bedrooms with a shared bath, an updated, well-equipped kitchen and an open living-dining room. The third floor is furnished with an eclectic mix of mid-century modern and vintage campaign furniture, family memorabilia, richly colored textiles and art objects from around the world.
              </p>
              <p className="mt-4">
                Visitors have use of a laundry room, indoor and outdoor games, bicycles, a charcoal grill, beach chairs and floats, making the Exum beach cottage ideal for a family vacation. Or the recently remodeled master suite, with a coffee and wine bar, a surround-sound stereo system and spacious bath, is the perfect setting for a romantic get-away.
              </p>
              <p className="mt-4">
                During the summer months, the cottage is available for week-long bookings only that start and end on a Sunday. The cost for linens and bath towels is $25/per bed. The cottage has 9 beds: 1 king, 4 queens, 1 double, 1 top bunk, 1 trundle twin and one rolling twin cot. The property is equipped with exterior Ring cameras for security.
              </p>
              <p className="mt-4 font-medium text-gray-800">
                Our prices include all fees. No hidden fees.
              </p>
            </div>
          </div>

          {/* See More / See Less Button */}
          <div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 text-[#8a4e15] font-bold uppercase tracking-wider text-sm hover:text-slate-600 cursor-pointer transition-colors"
            >
              {isExpanded ? 'See Less' : 'See More'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGE & AMENITIES OVERLAY === */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] lg:min-h-full group">
          
          {/* Background Image */}
          <img 
            src={propertyImg} 
            alt="Property Highlight" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Blur & Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2.5px] transition-all duration-500 group-hover:backdrop-blur-[2.5px]" />

          {/* Amenities Content inside the image */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white z-10">
          
            
            <ul className="space-y-2">
              {amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-5 group/item">
                  {/* Glassmorphism Icon Box */}
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white transition-all group-hover/item:bg-white group-hover/item:text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-lg font-light tracking-wide">{item.name}</span>
                </li>
              ))}
            </ul>
            
         
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProperty;