import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicks outside of dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-transparent shadow-md sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-green-500">
              The Alchemy of Giving
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 font-medium text-gray-700">
              <Link to="/home" className="hover:text-green-700 transition duration-200">
                Home
              </Link>
              
              {/* About Us with Dropdown */}
              <div 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button 
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="hover:text-green-700 transition duration-200 flex items-center font-medium text-gray-700 focus:outline-none"
                >
                  About Us
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    <Link 
                      to="/aboutus" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700 w-full text-left"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      About Us
                    </Link>

                    <Link 
                      to="/acceptableitems" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700 w-full text-left"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      Acceptable Items
                    </Link>

                    <Link 
                      to="/success" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700 w-full text-left"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      Success Stories
                    </Link>
                    <Link 
                      to="/faq" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-700 w-full text-left"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="hover:text-green-700 transition duration-200">
                Contact Us
              </Link>
            </div>
            <Link 
              to="/donate" 
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2">
            <Link 
              to="/home" 
              className="block py-2 px-4 text-green-700 hover:bg-gray-100 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/aboutus" 
              className="block py-2 px-4 text-green-700 hover:bg-gray-100 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            {/* <Link 
              to="/success" 
              className="block py-2 px-4 text-green-700 hover:bg-gray-100 hover:text-green-700 pl-8"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="w-1 h-1 bg-green-700 rounded-full mr-2"></span>
                Success Stories
              </span>
            </Link> */}
            {/* <Link 
              to="/faq" 
              className="block py-2 px-4 text-green-700 hover:bg-gray-100 hover:text-green-700 pl-8"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="w-1 h-1 bg-green-700 rounded-full mr-2"></span>
                FAQ
              </span>
            </Link> */}
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-green-700 hover:bg-gray-100 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/donate" 
              className="block py-2 px-4 mt-2 bg-green-700 text-white rounded-md text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;