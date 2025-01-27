// import React from "react";

// const Search = () => {
//   return (
//     <div className=" bg-gradient-to-r from-[#24B9D1] to-[#2FEDAE] w-[85%] rounded-2xl mx-auto flex justify-between gap-[80px] items-center px-[80px] py-10  ">
//       <div className="flex-1">
//         <h1 className="text-[32px] text-white font-[600]">
//           For Latest Updates Subscribe To Our Newsletter
//         </h1>
//       </div>

//       <div className="flex gap-3 bg-[#ffffff89] px-2 pl-8 py-2 rounded-full">
//         <input
//           type="text"
//           placeholder="Enter Your Email"
//           className="bg-transparent border-none outline-none placeholder:text-white placeholder:font-medium w-[300px]"
//         />
//         <button className="bg-white px-5 py-4 rounded-full text-[#2EE9B1] font-semibold">
//           Subscribe
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Search;

import React from "react";

const Search = () => {
  return (
    <div className="bg-gradient-to-r from-[#24B9D1] to-[#2FEDAE] w-[90%] md:w-[85%] rounded-2xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-[80px] items-center px-6 md:px-[80px] py-6 md:py-10 sm:my-[100px] ">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-[20px] md:text-[32px] text-white font-[600]">
          For Latest Updates Subscribe To Our Newsletter
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-3 bg-[#ffffff89] px-4 py-2 rounded-full w-full md:w-auto">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-transparent border-none outline-none placeholder:text-white placeholder:font-medium w-full md:w-[300px] text-center md:text-left"
        />
        <button className="bg-white px-5 py-3  rounded-full text-[#2EE9B1] font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Search;
