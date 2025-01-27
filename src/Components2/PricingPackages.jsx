import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const PricingPackages = () => {
  return (
    <div>
      <div className="xl:container mx-auto ">
        {/* heading div------------------------ */}
        <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[41%] mx-auto flex flex-col gap-5 items-center justify-center mb-[80px] sm:mb-[120px] md:mb-[160px]">
          <p className="text-base sm:text-lg font-semibold text-[#2AD2C1] text-center">
            We have designed Best healthcare Package
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-[600] text-center">
            Our Pricing Packages
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center text-neutral-500">
            We have world-class pathologists & Lab assistants. We are equipped
            with the best laboratory machinery & reagents. We ensure the best
            quality findings.
          </p>
        </div>
      </div>

      {/* main container div------------------------- */}
      <div className="xl:container mx-auto">
        <div className="lg:flex gap-6 mx-auto my-10 flex-wrap justify-center px-4 lg:p-0">
          {/* cards Div----------------------------- */}
          <div className="shadow-2xl px-10 py-10 rounded-3xl hover:border-b-[14px] border-[#28CBC5] transition-all duration-700 group bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[28%] mb-6">
            {/* heading div-------------- */}
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-semibold">Medicare Package 1</h1>
              <p className="text-sm text-neutral-500 text-center">
                Patholab’s Complete Care Geno identify DNA variant specific to an
                individual
              </p>
            </div>

            {/* pricing--------- */}
            <div className="flex gap-2 items-center justify-center my-8">
              <span className="text-2xl font-bold">$</span>
              <h1 className="text-5xl font-[600]"> 199</h1>
              <span className="text-blue-500 mt-3 text-sm font-medium">
                / PER PERSON
              </span>
            </div>

            {/* services------------------- */}

            <div className="flex flex-col justify-center items-center gap-[14px]">
              <h2>Series Blood Tests</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />
              <h2>Abdomen Ultrasound</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />

              <h2>Lipid Profile</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />

              <h2>Bone Health Check</h2>
            </div>

            {/* button-------------------- */}
            <div className="flex flex-col items-center justify-center gap-5 mt-8">
              <button className="flex items-center gap-2 bg-[#141466] text-white px-5 py-4 rounded-full font-semibold cursor-pointer transition-transform transform duration-1000 ease-in-out group-hover:bg-gradient-to-r from-[#24B9D1] to-[#2FEDAE]">
                <FaCalendarAlt />
                Make Appointment
              </button>

              <p className="text-center text-blue-500 font-medium mt-3">
                *The charges are subject to change according to special situation
              </p>
            </div>
          </div>

          {/* Popular Package */}
          <div className="shadow-2xl px-10 py-10 rounded-3xl border-b-[14px] border-[#28CBC5] bg-white lg:scale-[1.15] relative w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[28%] mb-6">
            <div className="bg-[#1D2864] text-[#10EE8A] w-[45%] mx-auto text-base font-medium flex items-center justify-center p-1 rounded-b-xl absolute top-0 left-[120px]">
              <h1>MOST POPULAR</h1>
            </div>
            {/* heading div-------------- */}
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
              <h1 className="text-xl font-semibold text-[#2DE4B4] border-2 border-dotted border-[#2DE4B4] px-4 py-2 ">
                Health Checkup Package 2
              </h1>
              <p className="text-sm text-neutral-500 text-center">
                Patholab’s Complete Care Geno identify DNA variant specific to an
                individual
              </p>
            </div>

            {/* pricing--------- */}
            <div className="flex gap-2 items-center justify-center my-8">
              <span className="text-2xl font-bold">$</span>
              <h1 className="text-5xl font-[600]"> 299</h1>{" "}
              <span className="text-blue-500 mt-3 text-sm font-medium">
                / PER PERSON
              </span>
            </div>

            {/* services------------------- */}

            <div className="flex flex-col justify-center items-center gap-[14px]">
              <h2>Series Blood Tests</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />
              <h2>Abdomen Ultrasound</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />

              <h2>Lipid Profile</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />

              <h2>Bone Health Check</h2>
            </div>

            {/* button-------------------- */}
            <div className="flex flex-col items-center justify-center gap-5 mt-8 ">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] text-white px-5 py-4 rounded-full font-semibold cursor-pointer group-hover:bg-[red]">
                <FaCalendarAlt />
                Make Appointment
              </button>

              <p className="text-center text-blue-500 font-medium mt-3">
                *The charges are subject to change according to special situation
              </p>
            </div>
          </div>

          {/* Third Package */}
          <div className="shadow-2xl px-10 py-10 rounded-3xl hover:border-b-[14px] border-[#28CBC5] transition-all duration-700 group bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[28%] mb-6">
            {/* heading div-------------- */}
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl font-semibold">Medicare Package 1</h1>
              <p className="text-sm text-neutral-500 text-center">
                Patholab’s Complete Care Geno identify DNA variant specific to an
                individual
              </p>
            </div>

            {/* pricing--------- */}
            <div className="flex gap-2 items-center justify-center my-8">
              <span className="text-2xl font-bold">$</span>
              <h1 className="text-5xl font-[600]"> 300</h1>{" "}
              <span className="text-blue-500 mt-3 text-sm font-medium">
                / PER PERSON
              </span>
            </div>

            {/* services------------------- */}

            <div className="flex flex-col justify-center items-center gap-[14px]">
              <h2>Series Blood Tests</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />
              <h2>Abdomen Ultrasound</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />

              <h2>Lipid Profile</h2>
              <hr className="h-[1px] bg-[#80808030] w-full" />

              <h2>Bone Health Check</h2>
            </div>

            {/* button-------------------- */}
            <div className="flex flex-col items-center justify-center gap-5 mt-8">
              <button className="flex items-center gap-2 bg-[#141466] text-white px-5 py-4 rounded-full font-semibold cursor-pointer transition-transform transform duration-1000 ease-in-out group-hover:bg-gradient-to-r from-[#24B9D1] to-[#2FEDAE]">
                <FaCalendarAlt />
                Make Appointment
              </button>

              <p className="text-center text-blue-500 font-medium mt-3">
                *The charges are subject to change according to special situation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;
