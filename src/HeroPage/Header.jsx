import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faAngleUp,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";

function HeaderMain({ show }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header
        className={` ${
          show ? "bg-[#046270] lg:w-full" : " bg-white lg:bg-[#2AD2C1] lg:w-full"
        } shadow-md ${show ? "py-2" : "py-2 lg:p-0"}`}
      >
        <div className={`mx-auto flex items-center justify-between ${show?'px-4':""} xl:container xl:mx-auto `}>
          <div className="flex items-center">
             {show && <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/logo-home3.png"
                alt="Patholab Laboratory Logo"
                className="h-10"
              />}
          </div>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-3 lg:mr-72 text-md chakra-petch-bold">
            {["Home", "Research", "Services", "About"].map(
              (item, index) => (
                <div className="relative group" key={index}>
                  <span onClick={()=>{
                    item === "Home" && navigate("/")
                    item === "Research" && navigate("/research")
                    item === "About" && navigate("/about")
                  }} className="text-white font-medium">
                    {item}{" "}
                    </span>
                    <span className="transform rotate-180 group-hover:rotate-0 inline-block text-white">
                      <FontAwesomeIcon icon={faAngleUp} />
                    </span>
                  
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-48 py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      Submenu 1
                    </a>
                    <div class=" mx-auto w-40 border-b border-[#EDEDED] "></div>
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

                

          {/* Social Icons and Call-to-Action */}
          <div className="hidden lg:flex items-center space-x-4 py-3 ">
            {[faFacebook, faTwitter, faInstagram, faPinterest].map(
              (icon, index) => (
                <div
                  key={index}
                  className={`w-5 h-10 flex justify-center ${
                    show ? "" : "justify-start"
                  }`}
                >
                  <span className="text-white self-center">
                    <FontAwesomeIcon icon={icon} className={`size-4`} />
                  </span>
                </div>
              )
            )}

           
            
          </div>
           {/* Call & Book Lab Visit */}
          <div
              className={`space-x-2 hidden lg:flex ${
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
                  className={`p-2 mt-1 rounded-full size-5 bg-gradient-to-r text-[#046270] from-gray-100 to-gray-200 animate-shakeScale ${
                    !show && "absolute right-[180px]"
                  }`}
                />
              )}

              <div
                className={`font-bold text-sm ${
                  show ? "text-teal-500" : "text-[#31D3C3]"
                }`}
              >
                Call & Book Lab Visit <br />
                <span
                  className={`text-xl chakra-petch-bold ${show ? `text-white` : `text-blue-900`}`}
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
      {/* Sidebar Menu (for mobile view) */}
      <div
                  className={`lg:hidden fixed top-0 left-0 w-64 bg-[#1D2864]  ${show? `h-[1000px]`:`h-full`}  text-white transform ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-300 `}
                  style={{zIndex:200}}
                >
                  <div className="flex justify-between items-center p-4">
                    <img className="h-12" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/logo-home3.png" alt="Logo" />
                    <HiOutlineMenu
                      onClick={toggleMenu}
                      className="text-2xl cursor-pointer"
                    />
                  </div>
                  <ul className="flex flex-col p-4">
                  {['Home', 'Research', 'Services', 'About'].map((item, index) => (
        <li key={index} 
        className="py-2 font-semibold text-lg"
        
         >
          <span
        onClick={() => {
          item === "Services" && navigate("/amazing");
          item === "Home" && navigate("/")
          item === "Research" && navigate("/research")
          item === "About" && navigate("/about")
          
        }}
        className="text-white chakra-petch-bold cursor-pointer transition duration-300 hover:text-teal-500"
      >{item}</span>
        </li>
      ))}
                  </ul>
                </div>
    </div>
  );
}

export default HeaderMain;
