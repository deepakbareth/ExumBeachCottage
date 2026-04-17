import React, { useState, useEffect } from 'react';
import heroBg1 from '../../assets/images/h1.jpg';
import heroBg2 from '../../assets/images/h2.jpg';
import heroBg3 from '../../assets/images/h3.jpg';

const Banner = () => {
    const images = [heroBg1, heroBg2, heroBg3];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        /* MOBILE FIX: Changed h-[80vh] to h-[60vh]. 
           This makes the banner shorter on phones so the "About Us" 
           section starts showing up at the bottom.
        */
        <div className="relative h-[60vh] md:h-screen w-full pt-20 md:pt-32 overflow-hidden bg-gray-950">

            {/* 1. SEAMLESS BACKGROUND SLIDER */}
            {images.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Exum Paradise ${i}`}
                        className="absolute inset-0 h-full w-full object-cover object-center brightness-75 md:brightness-90"
                    />
                </div>
            ))}

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />

            {/* 2. CENTERED CONTENT CONTAINER */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 md:px-12 text-center text-white">

                <div className="max-w-6xl space-y-4 md:space-y-12">

                    {/* Pre-Header */}
                    <div className="flex justify-center animate-fade-in-down mb-4">
                        <p className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white shadow-lg">
                            Exum Beach Cottage Resort
                        </p>
                    </div>

                    {/* Headline Section */}
                    <h1 className="flex flex-col items-center animate-fade-in-down delay-200">

                        {/* Part 1: Main Name */}
                        <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif italic font-medium leading-none tracking-tight">
                            The Exum Cottage
                        </span>

                        {/* Part 2: Highlighted Location */}
                        <div className="relative inline-block my-3 md:my-8 group">
                            <span className="font-sans font-black text-white md:text-blue-100 uppercase tracking-tight text-xl sm:text-2xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                Beachfront in Atlantic Beach
                            </span>
                            <span className="absolute -bottom-1 md:-bottom-4 left-0 w-full h-0.5 md:h-1 bg-[#8b5a2b] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
                        </div>

                        {/* Part 3: State/Region */}
                        <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-sans font-light tracking-[0.2em] md:tracking-[0.4em] opacity-90 mt-1">
                            North Carolina
                        </span>
                    </h1>

                    {/* Description: Slightly smaller for compact mobile height */}
                    <p className="text-[10px] md:text-lg font-light text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-400 leading-relaxed px-8">
                        Experience the ultimate beachfront escape with unparalleled comfort.
                    </p>

                    {/* Mobile Button: Minimalist for small height */}
                    <div className="md:hidden pt-2 animate-fade-in-up delay-500">
                        <button className="bg-blue-600 text-white text-[9px] font-bold px-6 py-2.5 rounded-full uppercase tracking-widest">
                            Explore Rooms
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. SLIDE INDICATORS */}
            <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1 transition-all duration-700 rounded-full ${i === index ? 'w-8 md:w-12 bg-white' : 'w-2 bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;