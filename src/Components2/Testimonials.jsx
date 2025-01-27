// import React from "react";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import team1 from "../Assests/team1.jpg";
// import team2 from "../Assests/team2.jpg";
// import team3 from "../Assests/team3.jpg";
// import { FaStar } from "react-icons/fa";

// const Testimonials = () => {
//   const data = [
//     {
//       image: team1,
//       name: "Brandon Maxwell",
//       city: "New York",
//       desc: "Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.",
//     },
//     {
//       image: team2,
//       name: "Raymond Castillo",
//       city: "New York",
//       desc: "Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.",
//     },
//     {
//       image: team3,
//       name: "Emily Robinson",
//       city: "First time patient",
//       desc: "Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.",
//     },
//   ];

//   const style = {
//     clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//     // Define the clip-path here
//   };

//   return (
//     <div className="my-[100px]">
//       {/* upper div----------- */}
//       <div className="bg-white flex flex-col gap-3 items-center text-center text-sm h-[400px] ">
//         <p className="text-[#29CEC3] font-semibold text-lg">
//           What Our Clients Say about Us
//         </p>
//         <h1 className="text-5xl font-semibold">Clients Testimonial</h1>

//         <p>
//           We have world class pathologists & Lab assistants. We are equipped
//           with best <br /> laboratory machinery & reagents. We ensure best
//           quality findings.
//         </p>
//       </div>

//       {/* cards div-------------------------------- */}
//       <div className="flex justify-center gap-10 mx-[120px] absolute z-50 mt-[-160px]">
//         {data.map((item, index) => (
//           <div key={index} className="shadow-xl bg-white  rounded-2xl p-10">
//             <div className="flex gap-3">
//               <div className="rounded-full overflow-hidden border-2 border-[cyan]">
//                 <img className="h-[60px]" src={item.image} alt="" />
//               </div>
//               <div>
//                 <h1 className="font-semibold text-lg">{item.name}</h1>
//                 <h3 className="font-semibold text-[#25BBD0]">{item.city}</h3>
//               </div>
//             </div>

//             <div className="mt-7">
//               <p className="text-sm text-gray-500">{item.desc}</p>
//             </div>

//             <div className="flex items-center mt-5">
//               <h1 className="mr-3 font-bold text-sm">Rating : </h1>{" "}
//               <span className="flex text-[orange]">
//                 <FaStar /> <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* bottom div------------------------- */}

//       <div className="bg-[#002A80] flex flex-col items-center gap-10 pt-[250px] pb-[100px] ">
//         <div
//           style={style}
//           className="h-[120px] w-[120px] bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] flex justify-center items-center
//              hover:from-[#24B9D1] hover:to-[#2FEDAE] transition-all duration-700 cursor-pointer"
//         >
//           <BiSolidPhoneCall className="text-[50px]  animate-shakeScale " />
//         </div>

//         <p className="text-white text-3xl font-medium">
//           A great place of medical hospital center & health care. Book your
//           laboratory service
//         </p>

//         <h1 className="text-white text-[60px] font-semibold">+234 567 899</h1>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const data = [
    {
      image: team1,
      name: "Brandon Maxwell",
      city: "New York",
      desc: "Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.",
    },
    {
      image: team2,
      name: "Raymond Castillo",
      city: "New York",
      desc: "Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.",
    },
    {
      image: team3,
      name: "Emily Robinson",
      city: "First time patient",
      desc: "Dedicated professionals committed to providing you with accurate and reliable diagnostic services. Get patholab services today from the best lab experts & make a visit to our laboratory.",
    },
  ];

  const style = {
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  };

  return (
    <div className="my-[150px]">
      {/* Upper Section */}
      <div className="bg-white flex flex-col gap-3 items-center text-center text-sm px-4 sm:px-6 h-[250px]">
        <p className="text-[#29CEC3] font-semibold text-lg">
          What Our Clients Say about Us
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Clients Testimonial
        </h1>
        <p className="text-sm sm:text-base">
          We have world-class pathologists & Lab assistants. We are equipped
          with the best <br className="hidden sm:block" /> laboratory machinery
          & reagents. We ensure the best quality findings.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 px-4 sm:mx-[120px] relative z-50 sm:mb-[-130px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="shadow-xl bg-white rounded-2xl p-5 sm:p-10 w-full sm:w-[300px] md:w-[350px]"
          >
            <div className="flex gap-3 items-center">
              <div className="rounded-full overflow-hidden border-2 border-[cyan] w-16 h-16">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{item.name}</h1>
                <h3 className="font-semibold text-[#25BBD0]">{item.city}</h3>
              </div>
            </div>
            <p className="mt-5 text-sm text-gray-500">{item.desc}</p>
            <div className="flex items-center mt-5">
              <h1 className="mr-3 font-bold text-sm">Rating:</h1>
              <span className="flex text-[orange]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-[#002A80] flex flex-col items-center sm:gap-12 gap-6 px-4 pt-[250px] pb-[100px]">
        <div
          style={style}
          className=" h-[80px] sm:h-[120px] w-[80px] sm:w-[120px] bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] flex justify-center items-center hover:from-[#24B9D1] hover:to-[#2FEDAE] transition-all duration-700 cursor-pointer"
        >
          <BiSolidPhoneCall className="text-[30px] sm:text-[50px] animate-shakeScale text-white" />
        </div>
        <p className="text-white text-xl sm:text-3xl font-medium">
          A great place of medical hospital center & health care. Book your
          laboratory service
        </p>
        <h1 className="text-white text-3xl sm:text-[60px] font-semibold">
          +234 567 899
        </h1>
      </div>
    </div>
  );
};

export default Testimonials;
