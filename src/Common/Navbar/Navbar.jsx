import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { obj } from './Nav2';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center px-4">
      <nav className="flex items-center justify-between w-96 lg:w-full">
        {/* Logo */}
        <div className="flex items-center m-6">
          <img
            src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo.png"
            alt="Patholab Laboratory Logo"
            className="w-48"
          />
        </div>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex flex-row space-x-6 items-center">
          {obj.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="p-2 bg-white mr-2 rounded-full text-black">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="w-full p-4 border-r-2">
                <h3 className="font-bold text-sm text-blue-900">{item.contact}</h3>
                <p className="text-gray-400 text-xs mt-2">{item.info}</p>
              </div>
            </div>
          ))}
          <div className="m-6">
            <button className="py-2 px-4 flex items-center text-white font-semibold rounded-full bg-teal-500 transition-colors duration-300">
              Request Home Collection
            </button>
          </div>
        </div>


      </nav>

      {/* Mobile Menu (when open) */}
      {menuOpen && (
        <div className="lg:hidden bg-white w-full p-4 mt-4">
          <div className="flex flex-col space-y-4">
            {obj.map((item, index) => (
              <div key={index} className="flex flex-row items-center">
                <div className="p-2 bg-white mr-2 rounded-full text-black">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-sm text-blue-900">{item.contact}|</h3>
                  <p className="text-gray-400 text-xs mt-2">{item.info}|</p>
                </div>
              </div>
            ))}
            <div>
              <button className="py-2 px-4 w-full flex items-center justify-center text-white font-semibold rounded-full bg-teal-500 transition-colors duration-300">
                Request Home Collection
              </button>
            </div>
          </div>
        </div>
      )}
              {/* Mobile Menu Button (Hamburger Icon) */}
              <div className="block lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
    </div>
  );
};

export default Navbar;
