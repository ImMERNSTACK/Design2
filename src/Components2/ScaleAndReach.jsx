import React from "react";
import serviceIcon1 from "../assets/images/serviceIcon1.png";
import serviceIcon3 from "../assets/images/serviceIcon3.png";
import serviceIcon5 from "../assets/images/serviceIcon5.png";
import serviceIcon6 from "../assets/images/serviceIcon6.png";

const ScaleAndReach = () => {
  return (
    <div className=" mt-[-50px] py-20 w-full bg-[url('https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/bg-top-counter2.png')] object-cover bg-[#001C70] bg-cover bg-center flex flex-col items-center justify-center">
      {/* heading div------------------------------- */}
      <div className="mt-[340px] p-4 lg:p-0 lg:ml-[-120px]">
        <h1 className="text-white text-[45px] font-[500] md:text-[45px] sm:text-[32px] text-md ">
          Our <span className="text-green-500">scale and reach </span>to client
          Satisfaction
        </h1>
      </div>

      {/* bottom Div------------------------------- */}
      <div className="mt-[80px] flex flex-col md:flex-row gap-20 md:gap-10 sm:gap-5 xs:gap-2">
        <div className="border-l-2 border-[#2CDEB8] pl-14 relative">
          <div className="mb-4">
            <img className="h-16" src={serviceIcon1} alt="" />
          </div>
          <h1 className="text-[56px] text-[#2CDEB8] md:text-[48px] sm:text-[40px] xs:text-[32px]">
            780K
          </h1>{" "}
          <span className="text-[#2CDEB8] text-[22px] absolute top-[80px] right-[-40px] rotate-[-90deg]">
            Number
          </span>
          <h2 className="text-white text-lg font-semibold md:text-base sm:text-sm xs:text-xs">
            Of Patients Served
          </h2>
        </div>

        <div className="border-l-2 border-[#2CDEB8] pl-14 relative">
          <div className="mb-4">
            <img className="h-16 text-white" src={serviceIcon3} alt="" />
          </div>
          <h1 className="text-[56px] text-[#2CDEB8] md:text-[48px] sm:text-[40px] xs:text-[32px]">
            250+
          </h1>{" "}
          <span className="text-[#2CDEB8] text-[22px] absolute top-[80px] right-[-40px] rotate-[-90deg]">
            Number
          </span>
          <h2 className="text-white text-lg font-semibold md:text-base sm:text-sm xs:text-xs">
            Of Expert Pathologists
          </h2>
        </div>

        <div className="border-l-2 border-[#2CDEB8] pl-14 relative">
          <div className="mb-4">
            <img className="h-16" src={serviceIcon5} alt="" />
          </div>
          <h1 className="text-[56px] text-[#2CDEB8] md:text-[48px] sm:text-[40px] xs:text-[32px]">
            90+
          </h1>{" "}
          <span className="text-[#2CDEB8] text-[22px] absolute top-[80px] right-[-40px] rotate-[-90deg]">
            Number
          </span>
          <h2 className="text-white text-lg font-semibold md:text-base sm:text-sm xs:text-xs">
            Of Premium Branch
          </h2>
        </div>

        <div className="border-l-2 border-[#2CDEB8] pl-14 relative">
          <div className="mb-4">
            <img className="h-16" src={serviceIcon6} alt="" />
          </div>
          <h1 className="text-[56px] text-[#2CDEB8] md:text-[48px] sm:text-[40px] xs:text-[32px]">
            100%
          </h1>{" "}
          <span className="text-[#2CDEB8] text-[22px] absolute top-[80px] right-[-40px] rotate-[-90deg]">
            Number
          </span>
          <h2 className="text-white text-lg font-semibold md:text-base sm:text-sm xs:text-xs">
            Of Client Satisfaction
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ScaleAndReach;
