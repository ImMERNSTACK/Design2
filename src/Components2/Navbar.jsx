import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegClock, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";  // Hamburger Icon
import {Navigate, useNavigate} from "react-router-dom"
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import HeaderTop from "./HeaderTop";

const Navbar = () => {
  const navigate =useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State to toggle the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
     <HeaderTop/>

      {/* Navbar */}
      <nav className="flex flex-wrap justify-around items-center p-4 sm:p-5 z-50 bg-white border-b-2 sticky xl:container xl:mx-auto">
        {/* Logo */}
        <div className="w-full lg:w-auto flex justify-start ">
          <img className="h-10 sm:h-12" src={logo} alt="Logo" />
          <div className="lg:hidden block ml-44 mt-2  ">
          <HiOutlineMenu
            onClick={toggleSidebar}
            className="text-[#1D2864] text-2xl cursor-pointer"
          />
        </div>
        </div>

        {/* Hamburger Menu (for small screens) */}
        

        {/* Nav Links (Desktop View) */}
        <nav className="hidden lg:flex space-x-4 text-md ">
  {["Home", "Research", "Services", "About"].map((item, index) => (
    <div className="relative group" key={index}>
      {/* Menu Item */}
      <span
        onClick={() => {
          item === "Services" && navigate("/amazing");
          item === "Home" && navigate("/")
          item === "Research" && navigate("/research")
          item === "About" && navigate("/about")
          item === "Blog" && navigate("/blog")
        }}
        className="text-[#1D2864] chakra-petch-semibold text-xl cursor-pointer transition duration-300 hover:text-teal-500"
      >
        {item}{" "}
      </span>
      {/* Icon */}
      <span className="transform rotate-180 group-hover:rotate-0 text-xl inline-block text-[#1D2864] transition-transform duration-300">
        <FontAwesomeIcon icon={faAngleUp} />
      </span>

      {/* Dropdown Menu */}
      <div
  className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-48 py-2 z-50 
    opacity-0 transform -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
    transition-opacity duration-1000 ease-in-out"
>
  <a
    href="#"
    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 transition duration-300"
  >
    Submenu 1
  </a>
  <div className="mx-auto w-40 border-b border-[#EDEDED]"></div>
  <a
    href="#"
    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 transition duration-300"
  >
    Submenu 2
  </a>
</div>

    </div>
  ))}
</nav>


        {/* Social Icons */}
        <div className=" hidden lg:flex justify-center  w-full sm:w-[200px]  lg:justify-start border-3 items-center gap-4 mt-4 lg:mt-0">
          <div className="bg-[#f4f4f4] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2FEDAE] transition-all duration-300">
            <TiSocialFacebook />
          </div>
          <div className="bg-[#f4f4f4] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2FEDAE] transition-all duration-300">
            <FaTwitter />
          </div>
          <div className="bg-[#f4f4f4] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2FEDAE] transition-all duration-300">
            <FaInstagram />
          </div>
          <div className="bg-[#f4f4f4] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2FEDAE] transition-all duration-300">
            <FaPinterestP />
          </div>
        </div>

        {/* Button */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0">
          <button className="hidden lg:flex gap-2 items-center bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] text-white font-semibold px-4 py-2 sm:py-3 sm:px-6 rounded-3xl hover:from-[#24B9D1] hover:to-[#2FEDAE] transition-all duration-300">
            <MdOutlineCalendarMonth className="text-[18px] sm:text-[20px]" />
            Make Appointment
          </button>
        </div>
      </nav>

      {/* Sidebar Menu (for mobile view) */}
      <div
        className={` lg:hidden fixed top-0 left-0 w-64 bg-[#1D2864] h-full text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 `}
        style={{zIndex:200}}
      >
        <div className="flex justify-between items-center p-4">
          <img className="h-12" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo-light.png" alt="Logo" />
          <HiOutlineMenu
            onClick={toggleSidebar}
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
    </>
  );
};

export default Navbar;
