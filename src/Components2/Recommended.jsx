// import React from "react";
// import imageTeam from "../Assests/imageTeam.png";

// const Recommended = () => {
//   return (
//     <div className="flex justify-center items-center mx-[90px] bg-gradient-to-t to-[white] from-[#b8e5f7] rounded-2xl my-[100px] shadow-sm">
//       {/* left side div--------------- */}
//       <div className="flex flex-col gap-8 px-10">
//         <h1 className="text-2xl font-semibold">
//           Dedicated Professionals & <br />
//           Doctors Recommend Us
//         </h1>

//         <p className="text-base text-neutral-500">
//           Dedicated professionals committed to providing you with accurate and
//           reliable diagnostic services. Get patholab services today from the
//           best lab experts & make a visit to our laboratory.
//         </p>

//         <div className="flex gap-3">
//           <button className="flex gap-2 items-center bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] text-white font-semibold px-6 py-3 sm:py-4 rounded-3xl cursor-pointer hover:from-[#24B9D1] hover:to-[#2FEDAE]">
//             Get Patholab Services
//           </button>

//           <button className="flex gap-2 items-center bg-[white] border-2 text-black font-semibold px-6 py-3 sm:py-4 rounded-3xl cursor-pointer">
//             Book A Home Visit
//           </button>
//         </div>
//       </div>

//       {/* right side div------------------------- */}
//       <div>
//         <img className="h-[450px] w-[1950px]" src={imageTeam} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Recommended;

import React from "react";
import imageTeam from "../assets/images/imageTeam.png";

const Recommended = () => {
  return (
    <div className="xl:container mx-auto">
    <div className="flex flex-col lg:flex-row justify-center items-center  bg-gradient-to-t to-[white] from-[#b8e5f7] rounded-2xl my-[50px] sm:my-[80px] lg:my-[100px] shadow-sm">
      {/* left side div--------------- */}
      
      <div className="flex flex-col gap-6 sm:gap-8 px-5 sm:px-10 py-5 lg:py-0 text-center lg:text-left">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Dedicated Professionals & <br />
          Doctors Recommend Us
        </h1>

        <p className="text-sm sm:text-base text-neutral-500">
          Dedicated professionals committed to providing you with accurate and
          reliable diagnostic services. Get patholab services today from the
          best lab experts & make a visit to our laboratory.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
          <button className="flex gap-2 items-center bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] text-white font-semibold px-4 sm:px-6 py-3 rounded-3xl cursor-pointer hover:from-[#24B9D1] hover:to-[#2FEDAE]">
            Get Patholab Services
          </button>

          <button className="flex gap-2 items-center bg-[white] border-2 text-black font-semibold px-4 sm:px-6 py-3 rounded-3xl cursor-pointer">
            Book A Home Visit
          </button>
        </div>
      </div>

      {/* right side div------------------------- */}
      <div className="flex justify-center items-center mt-5 lg:mt-0">
        <img
          className="h-[250px] sm:h-[350px] lg:h-[450px] lg:w-[1780px]"
          src={imageTeam}
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default Recommended;
