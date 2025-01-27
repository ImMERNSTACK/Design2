import React from 'react';


function Carouselpages({heading}) {
  return (
    <div className="relative">
    <div className="w-full">
      <img
        src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/bg-page-title.png"
        alt="slide"
        className="w-full h-96 object-cover"
      />
      <div className="flex flex-col md:flex-row gap-2 justify-between md:justify-center p-4 absolute bottom-10 w-full">
        <div className="text-center md:text-left lg:-mt-60 text-3xl md:text-4xl lg:text-5xl chakra-petch-bold text-white font-semibold lg:p-5">
          {heading}
        </div>
        <div className="text-center md:text-right lg:-mt-60 text-sm md:text-base lg:text-lg text-white lg:p-5">
          <span className="hover:text-blue-600 cursor-pointer">HOME</span>
          <span className="transform rotate-90 inline-block mx-1">^</span>
          <span className="hover:text-blue-600 cursor-pointer">BLOG</span>
          <span className="transform rotate-90 inline-block mx-1">^</span>
          <span className="hover:text-blue-600 cursor-pointer">{heading}</span>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Carouselpages;
