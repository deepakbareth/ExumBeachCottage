import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/exumbeachcottage/' },
    { name: 'About Us', href: '/exumbeachcottage/about' },
    { name: 'The Cottage', href: '/exumbeachcottage/property' },
    { name: 'Gallery', href: '/exumbeachcottage/gallery' },
    { name: 'Reviews', href: '/exumbeachcottage/reviews' },
  ];

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-0 px-0 py-0' : 'top-2 px-4 md:px-10 py-4'
        }`}>
        <div className={`mx-auto transition-all duration-500 ${isScrolled
            ? 'max-w-full rounded-none bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 py-3'
            : 'max-w-7xl rounded-2xl border bg-[#b5a08b] shadow-md border-gray-100 py-4'
          }`}>
          <div className={`flex items-center ${isScrolled ? 'px-6 md:px-12' : 'px-8 md:px-12'}`}>

            {/* 1. Logo */}
            <NavLink to="/exumbeachcottage/" className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-[#8b5a2b] rounded-lg flex items-center justify-center text-white font-serif italic text-xl shadow-sm transition-transform hover:rotate-6">
                E
              </div>
              <span className="text-xl font-bold tracking-tighter text-gray-900 hidden sm:block uppercase">
                Exum<span className="font-light text-blue-600">Beach</span>
              </span>
            </NavLink>

            {/* 2. Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    end
                    className={({ isActive }) => `text-[17px] uppercase tracking-[0.18em] font-bold transition-all duration-300 relative group whitespace-nowrap ${isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                      }`}
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}

              {/* Desktop Contact Us Link */}
              <li>
                <NavLink
                  to="/exumbeachcottage/contact"
                  className={({ isActive }) => `flex items-center gap-2 text-[15px] uppercase tracking-[0.18em] font-bold transition-all duration-300 group whitespace-nowrap border-l border-gray-200 pl-6 ml-2 ${isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* 3. Mobile Toggle Button */}
            <div className="lg:hidden flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- ULTRA-MODERN MOBILE DRAWER --- */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div
          className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden`}>

          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl" />

          <div className="relative h-full flex flex-col p-8">

            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-serif italic text-xl shadow-lg">E</div>
                <div>
                  <h2 className="text-sm font-black tracking-widest text-gray-900 uppercase leading-none">Exum Beach</h2>
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter">Luxury Resort</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li
                    key={item.name}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className={`transform transition-all duration-700 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                  >
                    <NavLink
                      to={item.href}
                      end
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${isActive ? 'bg-blue-600' : 'bg-gray-50/50 hover:bg-blue-600'
                        }`}
                    >
                      {({ isActive }) => (
                        <>
                          <span className={`text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>
                            {item.name}
                          </span>
                          <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}>
                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}

                {/* UPDATED: Mobile Contact Us Link formatted exactly like the other mobile links */}
                <li
                  style={{ transitionDelay: `${menuItems.length * 80}ms` }}
                  className={`transform transition-all duration-700 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                >
                  <NavLink
                    to="/exumbeachcottage/contact"
                    end
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${isActive ? 'bg-blue-600' : 'bg-gray-50/50 hover:bg-blue-600'
                      }`}
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>
                          Contact Us
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}>
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}
                  </NavLink>
                </li>

              </ul>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;