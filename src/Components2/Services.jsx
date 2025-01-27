// import React from "react";
// import serviceIcon1 from "../Assests/serviceIcon1.png";
// import serviceIcon2 from "../Assests/serviceIcon2.png";
// import serviceIcon3 from "../Assests/serviceIcon3.png";
// import serviceIcon4 from "../Assests/serviceIcon4.png";
// import serviceIcon5 from "../Assests/serviceIcon5.png";
// import serviceIcon6 from "../Assests/serviceIcon6.png";

// const Services = () => {
//   return (
//     <>
//       {/* heading div------------------------- */}
//       <div className="text-center mt-[140px] mb-10 text-lg">
//         <h1 className="font-semibold text-[#2AD2C1]">
//           Promising Best Quality Services
//         </h1>
//         <h2 className="text-5xl font-semibold my-4">Our amazing Services</h2>
//         <p className="text-gray-500">
//           We have world class pathologists & Lab assistants. We are equipped
//           with best <br /> laboratory machinery & reagents. We ensure best
//           quality findings.
//         </p>
//       </div>

//       {/* services div------------------------- */}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center px-[100px] z-50">
//         <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-7 rounded-xl relative z-30">
//           <div className="flex justify-center items-center gap-6">
//             <div>
//               <img src={serviceIcon1} alt="" className="h-[60px]" />
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">
//                 General Diagnostic Testing
//               </h2>
//             </div>
//           </div>

//           <div className="absolute h-[45px] w-[45px] bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE]  top-[0px] right-[0px] rounded-s-lg flex items-center justify-center">
//             <h1 className="text-white font-semibold text-lg">01</h1>
//           </div>

//           <div>
//             <p className="text-center">
//               We are a leading diagnostic service provider. We are team of
//               dedicated professionals...
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-7 rounded-xl relative">
//           <div className="flex justify-center items-center gap-6">
//             <div>
//               <img src={serviceIcon2} alt="" className="h-[60px]" />
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">
//                 Allergy & Sensitivity Testing
//               </h2>
//             </div>
//           </div>

//           <div className="absolute h-[45px] w-[45px] bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE]  top-[0px] right-[0px] rounded-s-lg flex items-center justify-center">
//             <h1 className="text-white font-semibold text-lg">02</h1>
//           </div>

//           <div>
//             <p className="text-center">
//               We are a leading diagnostic service provider. We are team of
//               dedicated professionals...
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-7 rounded-xl relative">
//           <div className="flex justify-center items-center gap-6">
//             <div>
//               <img src={serviceIcon3} alt="" className="h-[60px]" />
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">
//                 Clinical Histopatology Tests
//               </h2>
//             </div>
//           </div>

//           <div className="absolute h-[45px] w-[45px] bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE]  top-[0px] right-[0px] rounded-s-lg flex items-center justify-center">
//             <h1 className="text-white font-semibold text-lg">03</h1>
//           </div>

//           <div>
//             <p className="text-center">
//               We are a leading diagnostic service provider. We are team of
//               dedicated professionals...
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-7 rounded-xl relative">
//           <div className="flex justify-center items-center gap-6">
//             <div>
//               <img src={serviceIcon4} alt="" className="h-[60px]" />
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">
//                 Hormone Insights Testing
//               </h2>
//             </div>
//           </div>

//           <div className="absolute h-[45px] w-[45px] bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE]  top-[0px] right-[0px] rounded-s-lg flex items-center justify-center">
//             <h1 className="text-white font-semibold text-lg">04</h1>
//           </div>

//           <div>
//             <p className="text-center">
//               We are a leading diagnostic service provider. We are team of
//               dedicated professionals...
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-7 rounded-xl relative">
//           <div className="flex justify-center items-center gap-6">
//             <div>
//               <img src={serviceIcon5} alt="" className="h-[60px]" />
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">
//                 Clinical Microbiology Tests
//               </h2>
//             </div>
//           </div>

//           <div className="absolute h-[45px] w-[45px] bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE]  top-[0px] right-[0px] rounded-s-lg flex items-center justify-center">
//             <h1 className="text-white font-semibold text-lg">05</h1>
//           </div>

//           <div>
//             <p className="text-center">
//               We are a leading diagnostic service provider. We are team of
//               dedicated professionals...
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-7 rounded-xl relative">
//           <div className="flex justify-center items-center gap-6">
//             <div>
//               <img src={serviceIcon6} alt="" className="h-[60px]" />
//             </div>
//             <div>
//               <h2 className="font-semibold text-lg">
//                 Specialized Genetic Testing
//               </h2>
//             </div>
//           </div>
//           <div className="absolute h-[45px] w-[45px] bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE]  top-[0px] right-[0px] rounded-s-lg flex items-center justify-center">
//             <h1 className="text-white font-semibold text-lg">06</h1>
//           </div>
//           <div>
//             <p>
//               We are a leading diagnostic service provider. We are team of
//               dedicated professionals...
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React from "react";
import serviceIcon1 from "../assets/images/serviceIcon1.png";
import serviceIcon2 from "../assets/images/serviceIcon2.png";
import serviceIcon3 from "../assets/images/serviceIcon3.png";
import serviceIcon4 from "../assets/images/serviceIcon4.png";
import serviceIcon5 from "../assets/images/serviceIcon5.png";
import serviceIcon6 from "../assets/images/serviceIcon6.png";

const Services = () => {
  return (
    <>
     <div className="xl:container mx-auto">
      {/* heading div------------------------- */}
      <div className="text-center mt-[140px] mb-10 text-base sm:text-lg px-4 sm:px-6 lg:px-10">
        <h1 className="font-semibold text-[#2AD2C1]">
          Promising Best Quality Services
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4">
          Our amazing Services
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          We have world class pathologists & Lab assistants. We are equipped
          with best <br className="hidden sm:block" /> laboratory machinery &
          reagents. We ensure best quality findings.
        </p>
      </div>

      {/* services div------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center items-center px-4 sm:px-6 lg:px-20 z-50">
        <div className="flex flex-col justify-center items-center gap-6 shadow-xl p-5 sm:p-6 lg:p-7 rounded-xl relative z-30">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div>
              <img src={serviceIcon1} alt="" className="h-12 sm:h-14" />
            </div>
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                General Diagnostic Testing
              </h2>
            </div>
          </div>

          <div className="absolute h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE] top-0 right-0 rounded-s-lg flex items-center justify-center">
            <h1 className="text-white font-semibold text-sm sm:text-base">
              01
            </h1>
          </div>

          <div>
            <p className="text-center text-sm leading-7">
              We are a leading diagnostic service provider. We are team of
              dedicated professionals...
            </p>
          </div>
        </div>

        {/* Repeat for other services */}
        <div className="flex flex-col justify-center items-center gap-6 shadow-xl p-5 sm:p-6 lg:p-7 rounded-xl relative">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div>
              <img src={serviceIcon2} alt="" className="h-12 sm:h-14" />
            </div>
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Allergy & Sensitivity Testing
              </h2>
            </div>
          </div>

          <div className="absolute h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE] top-0 right-0 rounded-s-lg flex items-center justify-center">
            <h1 className="text-white font-semibold text-sm sm:text-base">
              02
            </h1>
          </div>

          <div>
            <p className="text-center text-sm leading-7 ">
              At Patholab Laboratory, we are committed to providing you with a
              hassle-free and seamless...
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 shadow-xl p-5 sm:p-6 lg:p-7 rounded-xl relative">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div>
              <img src={serviceIcon3} alt="" className="h-12 sm:h-14" />
            </div>
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Clinical Histopatology Tests
              </h2>
            </div>
          </div>

          <div className="absolute h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE] top-0 right-0 rounded-s-lg flex items-center justify-center">
            <h1 className="text-white font-semibold text-sm sm:text-base">
              03
            </h1>
          </div>

          <div>
            <p className="text-center text-sm leading-7 ">
              Patholab Laboratory is equipped with best world class machinery &
              reagents for molecular...
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 shadow-xl p-5 sm:p-6 lg:p-7 rounded-xl relative">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div>
              <img src={serviceIcon4} alt="" className="h-12 sm:h-14" />
            </div>
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Hormone Insights Testing
              </h2>
            </div>
          </div>

          <div className="absolute h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE] top-0 right-0 rounded-s-lg flex items-center justify-center">
            <h1 className="text-white font-semibold text-sm sm:text-base">
              04
            </h1>
          </div>

          <div>
            <p className="text-center text-sm leading-7">
              We are a leading diagnostic service provider. We are team of
              dedicated professionals...
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 shadow-xl p-5 sm:p-6 lg:p-7 rounded-xl relative">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div>
              <img src={serviceIcon5} alt="" className="h-12 sm:h-14" />
            </div>
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Clinical Microbiology Tests
              </h2>
            </div>
          </div>

          <div className="absolute h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE] top-0 right-0 rounded-s-lg flex items-center justify-center">
            <h1 className="text-white font-semibold text-sm sm:text-base">
              05
            </h1>
          </div>

          <div>
            <p className="text-center text-sm leading-7">
              Patholab Laboratory is a Full-Service Clinical Lab with
              instrumentation and clinical laboratory...
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 shadow-xl p-5 sm:p-6 lg:p-7 rounded-xl relative">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div>
              <img src={serviceIcon6} alt="" className="h-12 sm:h-14" />
            </div>
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Specialized Genetic Testing
              </h2>
            </div>
          </div>

          <div className="absolute h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-[#2AD2C1] to-[#25BDCE] top-0 right-0 rounded-s-lg flex items-center justify-center">
            <h1 className="text-white font-semibold text-sm sm:text-base">
              06
            </h1>
          </div>

          <div>
            <p className="text-center text-sm leading-7">
              Our staff of trained Phlebotomists are experienced in performing
              blood draws...
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
