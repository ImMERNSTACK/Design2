// import React from "react";
// import research1 from "../Assests/research1.jpg";
// import research2 from "../Assests/research2.jpg";
// import research3 from "../Assests/research3.jpg";
// import { IoPersonOutline } from "react-icons/io5";
// import { MdOutlineArrowOutward } from "react-icons/md";

// const Research = () => {
//   const data = [
//     {
//       image: research1,
//       heading: "A Lab's Guide to remote Patient Monitoring",
//     },
//     {
//       image: research2,
//       heading: "The Value of Osmolality Testing in Nephrology",
//     },
//     {
//       image: research3,
//       heading: "A Lab's Guide to Modern Speicemen Collection",
//     },
//   ];

//   return (
//     <div className="my-[150px]">
//       <div className="text-center">
//         <h1 className="text-[#39D5C5] text-xl font-semibold mb-4">
//           What good works we are doing
//         </h1>

//         <h2 className="text-5xl font-semibold mb-4">Our Latest Research</h2>

//         <p className="text-neutral-500">
//           We have world class pathologists & Lab assistants. We are equipped
//           with best <br /> laboratory machinery & reagents. We ensure best
//           quality findings.
//         </p>
//       </div>

//       {/* bottom div--------------- */}
//       <div className="flex gap-8 px-[110px] py-10 ">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="shadow-md p-8 rounded-xl flex flex-col gap-4  items-center"
//           >
//             <div className="rounded-xl overflow-hidden relative">
//               <div className="bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] absolute px-3 right-0 p-2 z-50   text-white font-medium rounded-bl-3xl">
//                 AUGUST 31, 2023
//               </div>
//               <img
//                 className="w-[400px] hover:scale-[1.20] transition-all duration-500"
//                 src={item.image}
//                 alt=""
//               />
//             </div>

//             <div className="flex items-center gap-2 w-full text-[gray] font-medium text-sm">
//               <IoPersonOutline /> <span>Ryan Keller</span>
//               <p>0 Comments</p>
//             </div>
//             <hr className=" w-full text-[gray] mb-3" />

//             <div className="flex gap-3 w-full">
//               <button className="bg-[#add8e67b] px-3 py-[5px] rounded-full font-semibold text-blue-500">
//                 AI Science
//               </button>
//               <button className="bg-[#add8e67b] px-3 py-[5px] rounded-full font-semibold text-blue-500">
//                 Scientific
//               </button>
//             </div>
//             <h1 className="text-[18px] font-semibold my-3">{item.heading}</h1>

//             <div className="flex w-full items-center gap-2 text-sm font-[600] text-[#2AD1C2] cursor-pointer group">
//               {" "}
//               <h2>READ MORE</h2>
//               <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Research;

import React from "react";
import research1 from "../assets/images/research1.jpg";
import research2 from "../assets/images/research2.jpg";
import research3 from "../assets/images/research3.jpg";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const Research = () => {
  const data = [
    {
      image: research1,
      heading: "A Lab's Guide to Remote Patient Monitoring",
    },
    {
      image: research2,
      heading: "The Value of Osmolality Testing in Nephrology",
    },
    {
      image: research3,
      heading: "A Lab's Guide to Modern Specimen Collection",
    },
  ];

  return (
    <div className="my-16 md:my-[150px] px-4 md:px-[110px]">
      <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-[#39D5C5] text-lg md:text-xl font-semibold mb-4">
          What good works we are doing
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Our Latest Research
        </h2>
        <p className="text-neutral-500 text-sm md:text-base">
          We have world-class pathologists & Lab assistants. We are equipped
          with the best <br /> laboratory machinery & reagents. We ensure the best
          quality findings.
        </p>
      </div>

      {/* bottom div--------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="shadow-md p-4 md:p-8 rounded-xl flex flex-col gap-4 items-center"
          >
            <div className="rounded-xl overflow-hidden relative">
              <div className="bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] absolute px-3 right-0 p-2 z-50 text-white font-medium rounded-bl-3xl">
                AUGUST 31, 2023
              </div>
              <img
                className="w-full md:w-[400px] hover:scale-[1.20] transition-all duration-500"
                src={item.image}
                alt=""
              />
            </div>

            <div className="flex items-center gap-2 w-full text-[gray] font-medium text-sm">
              <IoPersonOutline /> <span>Ryan Keller</span>
              <p>0 Comments</p>
            </div>
            <hr className="w-full text-[gray] mb-3" />

            <div className="flex gap-3 w-full">
              <button className="bg-[#add8e67b] px-3 py-[5px] rounded-full font-semibold text-blue-500">
                AI Science
              </button>
              <button className="bg-[#add8e67b] px-3 py-[5px] rounded-full font-semibold text-blue-500">
                Scientific
              </button>
            </div>
            <h1 className="text-base md:text-[18px] font-semibold my-3">
              {item.heading}
            </h1>

            <div className="flex w-full items-center gap-2 text-sm font-[600] text-[#2AD1C2] cursor-pointer group">
              <h2>READ MORE</h2>
              <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Research;
