import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function HeaderMain({ show }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header
        className={`${
          show ? "bg-[#046270] lg:w-full" : " bg-[#2AD2C1] lg:w-full"
        } shadow-md ${show ? "py-2" : ""}`}
      >
        <div className={`mx-auto flex items-center justify-between ${show?'px-4':""} `}>
          <div className="flex items-center">
            {show && (
              <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/logo-home3.png"
                alt="Patholab Laboratory Logo"
                className="h-10"
              />
            )}
          </div>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 lg:mr-12">
            {["Home", "Pages", "Services", "Cases", "Packages", "Blog"].map(
              (item, index) => (
                <div className="relative group" key={index}>
                  <a href="#" className="text-white font-medium">
                    {item}{" "}
                    <span className="transform rotate-180 group-hover:rotate-0 inline-block">
                      <FontAwesomeIcon icon={faAngleUp} />
                    </span>
                  </a>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-48 py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      Submenu 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      Submenu 2
                    </a>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="lg:hidden mt-0 md:mt-40 sm:mt-40 absolute top-16 left-0 w-full bg-white shadow-md py-4 z-50">
              {["Home", "Pages", "Services", "Cases", "Packages", "Blog"].map(
                (item, index) => (
                  <div className="relative group px-4 py-2" key={index}>
                    <a
                      href="#"
                      className="text-blue-900 font-medium hover:text-teal-500 block"
                    >
                      {item}
                    </a>
                  </div>
                )
              )}
            </nav>
          )}

          {/* Social Icons and Call-to-Action */}
          <div className="hidden lg:flex items-center space-x-4 py-3 ">
            {[faFacebook, faTwitter, faInstagram, faPinterest].map(
              (icon, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 flex justify-center ${
                    show ? "" : "justify-start"
                  }`}
                >
                  <span className="text-white self-center">
                    <FontAwesomeIcon icon={icon} className={`size-5`} />
                  </span>
                </div>
              )
            )}

           
            
          </div>
           {/* Call & Book Lab Visit */}
          <div
              className={`space-x-2 flex ${
                !show && "border bg-[#E1F6F9] flex justify-center items-center w-[200px] h-[64px] relative"
              }`}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className={`p-2 mt-1 rounded-full size-5 bg-gradient-to-r text-[#046270] from-gray-100 to-gray-200 ${
                  !show && "absolute right-[180px] animate-ping"
                }`}
              />
              {!show && (
                <FontAwesomeIcon
                  icon={faPhone}
                  className={`p-2 mt-1 rounded-full size-5 bg-gradient-to-r text-[#046270] from-gray-100 to-gray-200 ${
                    !show && "absolute right-[180px]"
                  }`}
                />
              )}

              <div
                className={`font-bold text-sm ${
                  show ? "text-teal-500" : "text-teal-700"
                }`}
              >
                Call & Book Lab Visit <br />
                <span
                  className={`text-xl ${show ? `text-white` : `text-blue-900`}`}
                >
                  +234 567 899
                </span>
              </div>
            </div>
            {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-900 mr-5 text-2xl"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderMain;
