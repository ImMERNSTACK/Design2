import React from "react";
import serviceBanner from "../assets/images/serviceBanner.png";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import googleRating from "../assets/images/googleRating.png";

const Services2 = () => {
  const buttonNames = ["Diagnostic", "Pathological", "Research"];
  const features = [
    "Basic Pathology Testing",
    "Medical & Molecular Research",
    "Pharmaceutical Research",
    "Chemical Research",
  ];

  return (
    <div className="xl:container mx-auto">
      {/* main container */}
      <div className="sm:flex flex-col lg:flex-row justify-between items-center my-12 mx-4 lg:mx-16 mt-16">
        {/* Left side image */}
        <div className="w-full sm:w-[80%] lg:w-[50%]">
          <img
            className="animate-upDown sm:h-[550px] object-cover w-full"
            src={serviceBanner}
            alt="Service Banner"
          />
        </div>

        {/* Right side div */}
        <div className="flex flex-col gap-3 mt-6 lg:mt-0 w-full sm:w-[80%] lg:w-[50%]">
          <p className="text-[#2AD2C1] text-lg font-semibold mb-2">
            Versatile Laboratory Service Provider
          </p>
          <h1 className="text-2xl sm:text-4xl font-semibold mb-4">
            Patholab Provides the best <br /> laboratory experience
          </h1>
          <p className="border-l-4 border-[#2AD2C1] pl-4 text-[#686868] text-sm sm:text-base leading-7">
            At Patholab Laboratory, we provide a wide range of diagnostic
            services ranging from complete health check-up packages for
            citizens & corporates to super-specialty tests like Oncology,
            Neurology, Gynecology, Nephrology, and many more.
          </p>

          {/* Button Section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start mt-5 sm:mt-8">
            {buttonNames.map((name, index) => (
              <button
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] text-white font-semibold rounded-full hover:from-[#24B9D1] hover:to-[#2FEDAE] transition-all duration-300 text-sm sm:text-base"
              >
                {name}
              </button>
            ))}
          </div>

          {/* Features Section */}
          <div className="flex flex-wrap gap-7 sm:gap-4 mt-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span>
                    <FaCheckCircle className="text-[#4286F5] mr-3 h-5 w-5" />
                  </span>
                  <h1 className="font-semibold text-gray-400 text-sm sm:text-base">
                    {feature}
                  </h1>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span>
                    <FaCheckCircle className="text-[#4286F5] mr-3 h-5 w-5" />
                  </span>
                  <h1 className="font-semibold text-gray-400 text-sm sm:text-base">
                    {feature}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col sm:flex-row gap-4 mt-5 items-center sm:items-start">
            {/* Phone Call Section */}
            <div className="relative group lg:w-80 sm:w-auto  ">
              <div className="flex border items-center justify-center gap-3 shadow-lg p-4    rounded-xl relative z-50 bg-white mt-7 lg:mt-6">
                <div className="bg-[#2BD2C1] h-14 w-14 flex items-center justify-center rounded-full text-white text-2xl border-[6px] border-[#92e0e0] hover:scale-[1.25] duration-500 hover:border-[10px] cursor-pointer">
                  <BiSolidPhoneCall className="animate-rotateIcon" />
                </div>

                <div className="   ">
                  <h1 className="text-[#2BD2C1] font-bold text-xs sm:text-sm  text-center sm:text-left">
                    Need Help? Book Lab Visit
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold group-hover:underline transition-all duration-1000 text-center sm:text-left">
                    +234 567 899
                  </p>
                </div>
              </div>

              <div className="bg-blue-700 h-[89px] w-[230px] lg:w-[270px]  rounded-xl absolute top-4 mt-2 right-0 sm:right-[-8px] group-hover:mt-4 transition-all duration-700"></div>
            </div>

            {/* Google Rating Section */}
            <div className="flex justify-center sm:justify-start w-full sm:w-auto mt-5 sm:mt-0">
              <img
                className="h-[120px] sm:h-[160px]"
                src={googleRating}
                alt="Google Rating"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
