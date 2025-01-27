import React from "react";
import ScrollHeader from "../Common/ScrollHeader";

const AchievementsSection = () => {
  return (<>
  
   <div className="xl:container xl:mx-auto bg-blue-50">
    <div className="bg-blue-50 py-16 px-6" 
    style={{
      backgroundImage: "url('https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/Bg-counter.png')", // Add your image URL here
    }} >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 chakra-petch-bold">
          All our achievement is the by product of client satisfaction
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
       
        <div>
          <h3 className="text-4xl font-bold text-teal-500 chakra-petch-bold">10M+</h3>
          <p className="text-lg font-semibold text-gray-800 chakra-petch-bold">Tests Conducted</p>
          <p className="text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

       
        <div>
          <h3 className="text-4xl font-bold text-teal-500 chakra-petch-bold">300M+</h3>
          <p className="text-lg font-semibold text-gray-800 chakra-petch-bold">
            Expert Pathologists
          </p>
          <p className="text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-teal-500 chakra-petch-bold">20+</h3>
          <p className="text-lg font-semibold text-gray-800 chakra-petch-bold">Premium Branch</p>
          <p className="text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-teal-500 chakra-petch-bold">100%</h3>
          <p className="text-lg font-semibold text-gray-800 chakra-petch-bold">Premium Branch</p>
          <p className="text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-lg font-bold text-gray-800">
          Want to Book a Lab Visit, Call —{" "}
          <span className="font-bold text-teal-600">+333 123 456 11</span>
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default AchievementsSection;
