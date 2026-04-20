import React, { useState } from "react";
import aboutImg from '../../assets/galleryImages/g3.png';


export default function PropertySection() {
  const [showMore, setShowMore] = useState(false);

  const text = `Beachfront in Atlantic Beach, North Carolina

The Exum beach cottage on Atlantic Beach, NC, is a family home with a three-generation history. Each generation has added photographs, books and original works of art, all of which give the cottage its unique character. Constructed in 1948, when there was only one other cottage on Club Colony Drive, the house was restored after Hurricane Hazel in 1954 and extensively renovated in 2022.

Located on the beach front and surrounded by a garden of native plants, dune grasses and herbs, the house features a hammock for lounging over the sand, a front porch with rocking chairs on the second level and a spectacular panoramic ocean view from the third-floor master suite.

With five bedrooms and three baths, the house comfortably sleeps twelve. The warmth and charm of a traditional NC beach cottage are complemented by upscale modern amenities, including WiFi, four flat-screen televisions, Bluetooth wireless technology, an EV charger with/Tesla adapter and solar array that supplies electricity for the entire house with battery back up.

The entrance to the first level is a chart room with maps of the local terrain and waterways, guide books for planning excursions and a sitting area. The ground-level bunk room has its own bath, as well as access to an outdoor shower. On the second floor are three thematically decorated bedrooms with a shared bath, an updated, well-equipped kitchen and an open living-dining room. The third floor is furnished with an eclectic mix of mid-century modern and vintage campaign furniture, family memorabilia, richly colored textiles and art objects from around the world.

Visitors have use of a laundry room, indoor and outdoor games, bicycles, a charcoal grill, beach chairs and floats, making the Exum beach cottage ideal for a family vacation. Or the recently remodeled master suite, with a coffee and wine bar, a surround-sound stereo system and spacious bath, is the perfect setting for a romantic get-away.

During the summer months, the cottage is available for week-long bookings only that start and end on a Sunday. The cost for linens and bath towels is $25/per bed. The cottage has 9 beds: 1 king, 4 queens, 1 double, 1 top bunk, 1 trundle twin and one rolling twin cot. The property is equipped with exterior Ring cameras for security.

Our prices include all fees. No hidden fees.`;

  const shortText = text.slice(0, 400); // control length here

  return (
    <section className="max-w-7xl  mx-auto px-4 py-10">
      
      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={aboutImg}
          alt="Pool Area"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Beautiful Marco Island Home with Completely Separate Guest Suite
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
          {showMore ? text : `${shortText}...`}
        </p>

        {/* Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}