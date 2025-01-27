import React from "react";
import logo from "../assets/images/logo-light.png";
import { FaFacebookF, FaGooglePlusG, FaPinterest } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiPhone, BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";
import card4 from "../assets/images/card-4.png";
import card5 from "../assets/images/card-5.png";

const icons = [
  { component: FaFacebookF },
  { component: FaGooglePlusG },
  { component: BsTwitter },
  { component: BsInstagram },
  { component: FaPinterest },
];

const services = [
  "Clinical Histopatology Tests",
  "Clinical Biochemistry Tests",
  "Vaccine Research Center",
  "Clinical Microbiology Tests",
  "Complete Health Checkup",
];

const customers = [
  "Upload Prescription",
  "Request a call Back",
  "Healthcare Packages",
  "Download Reports",
  "Track Progress",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const time = [
  "9am – 7am",
  "9am – 7am",
  "9am – 7am",
  "9am – 7am",
  "9am – 7am",
  "9am – 7am",
  "Closed",
];

const Footer = () => {
  return (
    <div className="bg-[#032E7E] relative pt-[50px] mt-32">


      <div className="bg-gradient-to-r from-[#24B9D1] to-[#2FEDAE] w-[90%] lg:w-[85%] rounded-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 px-6 py-6 lg:py-10 sm:my-[100px] absolute top-[-120px] sm:top-[-200px] left-0 right-0 xl:container xl:mx-auto">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] text-white font-semibold">
            For Latest Updates Subscribe To Our Newsletter
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-3 bg-[#ffffff89] px-4 py-2 rounded-full w-full lg:w-auto items-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-transparent border-none outline-none placeholder:text-white placeholder:font-medium w-full sm:w-[300px] text-center sm:text-left px-2"
          />
          <button className="bg-white px-5 py-3 rounded-full text-[#2EE9B1] font-semibold w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* middle div------------------- */}

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[90px] py-10 lg:py-[100px]">
        {/* 1st div------------------ */}
        <div className="mt-[-30px] text-center lg:text-left">
          <img src={logo} alt="Logo" className="h-[54px] my-16 lg:my-0 mx-auto lg:mx-0" />
          <p className="text-white my-10">
            Patholab laboratory is a very well equipped <br /> laboratory of
            this country & they promised <br /> to provide best services
          </p>

          {/* Icons------------------ */}
          <div className="text-white flex justify-center lg:justify-start gap-3 text-lg">
            {icons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <div
                  key={index}
                  className="bg-[#2A4A8A] p-4 rounded-lg hover:bg-[#3fde1b] duration-500 cursor-pointer"
                >
                  <IconComponent />
                </div>
              );
            })}
          </div>
        </div>

        {/* 2nd div----------------- */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-[26px] font-semibold mb-7">Our Services</h1>
          <div>
            {services.map((item, index) => (
              <div key={index} className="mb-5">
                <h2 className="font-semibold cursor-pointer hover:text-[#00FB8A] duration-300 text-[17px]">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* 3rd div---------------- */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-[26px] font-semibold mb-7">For Customers</h1>
          <div>
            {customers.map((item, index) => (
              <div key={index} className="mb-5">
                <h2 className="font-semibold cursor-pointer hover:text-[#00FB8A] duration-300 text-[17px]">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* 4th div---------------------- */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-[26px] font-semibold mb-7">Opening Hours</h1>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            {/* days-------- */}
            <div>
              {days.map((item, index) => (
                <div key={index} className="mb-2">
                  <h2 className="font-semibold cursor-pointer hover:text-[#00FB8A] duration-300 text-[17px]">
                    {item}
                  </h2>
                </div>
              ))}
            </div>
            {/* time----------- */}
            <div>
              {time.map((item, index) => (
                <div key={index} className="mb-2">
                  <h2 className="font-semibold cursor-pointer text-[#00FB8A] duration-300 text-[17px]">
                    {item}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* contact div-------------- */}
      <div className="flex flex-col lg:flex-row justify-center items-center  mt-[-40px] py-10">
        {/* left------------ */}
        <div className="flex items-center gap-3 lg:border border-green-700 p-6 px-8 lg:px-16">
          <div className="bg-[#2CDCBA] p-[14px] rounded-full">
            <BiSolidPhoneCall className="text-3xl animate-shakeScale" />
          </div>
          <div className="text-white">
            <h2 className="font-bold">Need Help? Book Lab Visit</h2>
            <h1 className="text-3xl font-semibold text-[#00FB8A]">
              +234 567 899
            </h1>
          </div>
        </div>

        {/* middle------------------------ */}
        <div className="flex items-center lg:border border-green-700 py-10 px-8 lg:px-16">
          <div className="flex items-center gap-3 text-white">
            <MdOutlineEmail className="text-[28px] text-[#01EF89]" />
            <h1 className="text-lg font-bold">Info@Patholab.com</h1>
          </div>
        </div>

        {/* right div--------------------------- */}
        <div className="lg:border border-green-700 py-10 px-8 lg:px-16 ">
          <div className="flex items-center gap-3 text-white">
            <FaRegAddressCard className="text-[28px] text-[#01EF89]" />
            <h1 className="text-lg font-bold">
              183 Marina Avenue, Miami Ci Mall, USA
            </h1>
          </div>
        </div>
      </div>

      {/* bottom div------------------ */}

      <div className="text-white text-sm flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 py-[50px] font-semibold text-center lg:text-left">
        {/* left------------ */}
        <div>
          <h1>
            © 2023,{" "}
            <span className="text-green-500 hover:text-green-300 duration-300 cursor-pointer">
              BRAVISTHEME
            </span>
            , All rights reserved
          </h1>
        </div>

        {/* center------------ */}
        <div>
          <h1>Privacy Policy Terms & Condition *Promo T&Cs Apply</h1>
        </div>

        {/* right------------ */}
        <div>
          <div className="flex gap-3">
            <h1>Payment Gateways:</h1>
            <div className="flex gap-2">
              <img src={card1} alt="" className="w-[30px] md:w-[40px]" />
              <img src={card2} alt="" className="w-[30px] md:w-[40px]" />
              <img src={card3} alt="" className="w-[30px] md:w-[40px]" />
              <img src={card4} alt="" className="w-[30px] md:w-[40px]" />
              <img src={card5} alt="" className="w-[30px] md:w-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
