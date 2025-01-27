// import React from "react";
// import premiumImg1 from "../Assests/premiumImg1.jpg";
// import premiumImg2 from "../Assests/premiumImg2.jpg";
// import premiumImg3 from "../Assests/premiumImg3.jpg";
// import serviceIcon1 from "../Assests/serviceIcon1.png";
// import serviceIcon2 from "../Assests/serviceIcon2.png";
// import serviceIcon3 from "../Assests/serviceIcon3.png";
// import { MdOutlineArrowOutward } from "react-icons/md";

// const PremiumServices = () => {
//   return (
//     <div className="bg-gradient-to-t to-[#2AD2C1] from-[white] my-10 pt-[80px]">
//       {/* heading div-------------- */}
//       <div className="flex flex-col gap-3 justify-center items-center text-white p-8 ">
//         <p className="text-lg font-semibold ">
//           High Performance Laboratory Services
//         </p>

//         <h1 className="text-5xl font-[600]">Our Premium Services</h1>
//         <p className="text-center font-medium mt-1">
//           Our mission is to provide the highest standard of clinical laboratory
//           service to <br />
//           physicians, clinics, hospitals, and health care providers.
//         </p>
//       </div>

//       {/* bottom div----------------- */}
//       <div className="flex justify-center items-center gap-10 mx-[100px] my-20">
//         {/* cards div------------------- */}
//         <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
//           <div>
//             <img className="" src={premiumImg1} alt="" />
//             <hr className="h-[5px] bg-[#2AD2C1] w-full" />
//           </div>

//           <div className="flex items-center ml-8 gap-4 mt-6">
//             <img
//               className="h-[62px] bg-[#9ae5dd9b] p-3 rounded-full cursor-pointer hover:bg-[#90e7de] transition-all duration-500 "
//               src={serviceIcon1}
//               alt=""
//             />
//             <h2 className="text-lg font-[600]">Clinical Biochemistry Tests</h2>
//           </div>

//           <p className="px-8 py-6 text-sm ">
//             Patholab is the best diagnostic lab in the city. I have great
//             experience with them. The provide authentic results & have the best
//             environment inside here....
//           </p>

//           <div className="flex gap-1 group cursor-pointer items-center pl-10 pb-8 text-sm text-neutral-500 hover:text-blue-500 font-medium">
//             <h2>READ MORE</h2>
//             <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
//           </div>
//         </div>

//         <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
//           <div className="flex items-center ml-8 gap-4 mt-6">
//             <img
//               className="h-[62px] bg-[#9ae5dd9b] p-3 rounded-full cursor-pointer hover:bg-[#90e7de] transition-all duration-500 "
//               src={serviceIcon2}
//               alt=""
//             />
//             <h2 className="text-lg font-[600]">Clinical Biochemistry Tests</h2>
//           </div>

//           <p className="px-8 py-6   text-sm ">
//             Patholab is the best diagnostic lab in the city. I have great
//             experience with them. The provide authentic results & have the best
//             environment inside here....
//           </p>

//           <div className="flex gap-1 group cursor-pointer items-center pl-10 pb-8 text-sm text-neutral-500 hover:text-blue-500 font-medium">
//             <h2>READ MORE</h2>
//             <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
//           </div>

//           <div>
//             <hr className="h-[5px] bg-[#2AD2C1] w-full" />

//             <img className="" src={premiumImg2} alt="" />
//           </div>
//         </div>

//         <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
//           <div>
//             <img className="" src={premiumImg3} alt="" />
//             <hr className="h-[5px] bg-[#2AD2C1] w-full" />
//           </div>

//           <div className="flex items-center ml-8 gap-4 mt-6">
//             <img
//               className="h-[62px] bg-[#9ae5dd9b] p-3 rounded-full cursor-pointer hover:bg-[#90e7de] transition-all duration-500 "
//               src={serviceIcon3}
//               alt=""
//             />
//             <h2 className="text-lg font-[600]">Clinical Biochemistry Tests</h2>
//           </div>

//           <p className="px-8 py-6 text-sm ">
//             Patholab is the best diagnostic lab in the city. I have great
//             experience with them. The provide authentic results & have the best
//             environment inside here....
//           </p>

//           <div className="flex gap-1 group cursor-pointer items-center pl-10 pb-8 text-sm text-neutral-500 hover:text-blue-500 font-medium">
//             <h2>READ MORE</h2>
//             <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center text-lg font-medium ">
//         <h1 className="border-2 p-3 px-5 rounded-full ">Want to Explore All Our Healthcare & Checkup packages? <span className="hover:text-[#2bb8a1] cursor-pointer duration-300 text-blue-600">Click here</span> </h1>
//       </div>
//     </div>
//   );
// };

// export default PremiumServices;

import React from "react";
import premiumImg1 from "../assets/images/premiumImg1.jpg";
import premiumImg2 from "../assets/images/premiumImg2.jpg";
import premiumImg3 from "../assets/images/premiumImg3.jpg";
import serviceIcon1 from "../assets/images/serviceIcon1.png";
import serviceIcon2 from "../assets/images/serviceIcon2.png";
import serviceIcon3 from "../assets/images/serviceIcon3.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { div } from "framer-motion/client";

const PremiumServices = () => {
  
  return (
    
    <div className="bg-gradient-to-t to-[#2AD2C1] from-[white] mb-10 pt-[80px]">
      {/* Heading Section */}
      <div className="container mx-auto">
      <div className="flex flex-col gap-3 justify-center items-center text-white p-4 sm:p-8">
        <p className="text-sm sm:text-lg font-semibold">
          High Performance Laboratory Services
        </p>

        <h1 className="text-3xl sm:text-5xl font-[600] text-center">
          Our Premium Services
        </h1>
        <p className="text-center font-medium mt-1 text-sm sm:text-base">
          Our mission is to provide the highest standard of clinical laboratory
          service to <br /> physicians, clinics, hospitals, and health care providers.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 sm:mx-10 lg:mx-[100px] my-10 sm:my-10">
        {/* Card 1 */}
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <img src={premiumImg1} alt="" />
          <hr className="h-[7px] bg-[#2AD2C1] w-full" />
          <div className="flex items-center ml-6 sm:ml-8 gap-4 mt-6">
            <img
              className="h-[50px] sm:h-[62px] bg-[#9ae5dd9b] p-3 rounded-full cursor-pointer hover:bg-[#90e7de] transition-all duration-500"
              src={serviceIcon1}
              alt=""
            />
            <h2 className="text-base sm:text-lg font-[600]">
              Clinical Biochemistry Tests
            </h2>
          </div>
          <p className="px-6 sm:px-8 py-4 sm:py-6 text-sm">
            Patholab is the best diagnostic lab in the city. I have great
            experience with them. They provide authentic results & have the best
            environment inside here....
          </p>
          <div className="flex gap-1 group cursor-pointer items-center pl-6 sm:pl-10 pb-6 sm:pb-8 text-sm text-neutral-500 hover:text-blue-500 font-medium">
            <h2>READ MORE</h2>
            <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <div className="flex items-center ml-6 sm:ml-8 gap-4 mt-6">
            <img
              className="h-[50px] sm:h-[62px] bg-[#9ae5dd9b] p-3 rounded-full cursor-pointer hover:bg-[#90e7de] transition-all duration-500"
              src={serviceIcon2}
              alt=""
            />
            <h2 className="text-base sm:text-lg font-[600]">
              Clinical Biochemistry Tests
            </h2>
          </div>
          <p className="px-6 sm:px-8 py-4 sm:py-6 text-sm">
            Patholab is the best diagnostic lab in the city. I have great
            experience with them. They provide authentic results & have the best
            environment inside here....
          </p>
          <div className="flex gap-1 group cursor-pointer items-center pl-6 sm:pl-10 pb-6 sm:pb-8 text-sm text-neutral-500 hover:text-blue-500 font-medium">
            <h2>READ MORE</h2>
            <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
          </div>
          <hr className="h-[7px] bg-[#2AD2C1] w-full" />

          <img src={premiumImg2} alt="" />
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <img src={premiumImg3} alt="" />
          <hr className="h-[7px] bg-[#2AD2C1] w-full" />
          <div className="flex items-center ml-6 sm:ml-8 gap-4 mt-6">
            <img
              className="h-[50px] sm:h-[62px] bg-[#9ae5dd9b] p-3 rounded-full cursor-pointer hover:bg-[#90e7de] transition-all duration-500"
              src={serviceIcon3}
              alt=""
            />
            <h2 className="text-base sm:text-lg font-[600]">
              Clinical Biochemistry Tests
            </h2>
          </div>
          <p className="px-6 sm:px-8 py-4 sm:py-6 text-sm">
            Patholab is the best diagnostic lab in the city. I have great
            experience with them. They provide authentic results & have the best
            environment inside here....
          </p>
          <div className="flex gap-1 group cursor-pointer items-center pl-6 sm:pl-10 pb-6 sm:pb-8 text-sm text-neutral-500 hover:text-blue-500 font-medium">
            <h2>READ MORE</h2>
            <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-center px-4 sm:px-0 text-sm sm:text-lg font-medium text-center lg:my-[70px]">
        <h1 className="border-2 p-2 sm:p-3 px-4 sm:px-5 rounded-full">
          Want to Explore All Our Healthcare & Checkup Packages?{" "}
          <span className="hover:text-[#2bb8a1] cursor-pointer duration-300 text-blue-600">
            Click here
          </span>
        </h1>
      </div>
    </div>
    </div>
  );
};

export default PremiumServices;
