import React from "react";
import image1 from "../assets/images/image1.jpg";
import icon from "../assets/images/icon-vd.png";

const Hero = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="flex flex-col md:flex-col lg:flex-row justify-between h-auto lg:h-[600px] relative ">
        {/* Left side div */}
        <div className="flex justify-center items-center p-6 lg:p-10 lg:ml-10">
          <div className="flex flex-col gap-6 mt-[-20px] lg:mt-[-50px] text-left lg:text-left">
            <p className="text-[#3FD5C6] font-[600] text-base sm:text-lg">
              Patholab Laboratory is a Full-Service Clinical Lab
            </p>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-bold">
              <span className="drop-shadow-3xl"> Laboratory Service </span> <br />
              Trusted by Leading <br />
              Doctors & Patients
            </h2>

            <p className="text-gray-500 font-[500] text-sm sm:text-base">
              We have world class pathologists & Lab assistants. We are equipped
              with best <br className="hidden lg:block" /> laboratory machinery & reagents. We ensure best quality findings.
            </p>

            <div className="flex flex-row sm:flex-row gap-4 justify-start lg:justify-start">
              <button className="flex gap-2 items-center bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] text-white font-semibold px-6 py-3 sm:py-4 rounded-3xl cursor-pointer">
                Get patholab Services
              </button>
              <button className="flex gap-2 items-center bg-[blue] text-white font-semibold px-6 py-3 sm:py-4 rounded-3xl cursor-pointer">
                Book A Home Collection
              </button>
            </div>
          </div>
        </div>

        {/* Right side div - Image */}
        <div className="flex justify-center items-center relative mt-6 lg:mt-0 lg:absolute lg:right-[0px] lg:top-[-50px] -z-10">
          <img
            src={image1}
            alt="Hero Image"
            className="rounded-s-full object-cover h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[700px]"
          />
        </div>

        {/* Video Icon Button */}
        <div className="absolute right-[88%]  sm:right-[40%] lg:right-[41%] top-[73%] sm:top-[50%] lg:top-[35%] bg-white p-1 rounded-full transform translate-x-1/2 lg:translate-x-0">
          <div className="flex items-center justify-center bg-[#ebe1e1] rounded-full h-[75px] w-[75px] sm:h-[95px] sm:w-[95px] lg:h-[115px] lg:w-[115px] cursor-pointer border-[10px] sm:border-[12px] lg:border-[15px] border-[#2FEDAE] hover:border-[#24B9D1] transition-all duration-500">
            <img src={icon} alt="Video Icon" className="h-[30px] sm:h-[40px] lg:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
