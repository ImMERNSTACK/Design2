import React, { useState } from "react";
import { FAQData } from "../Home/FAQData";
import { FAQData1 } from "../Home/FAQData";
import ScrollHeader from "../Common/ScrollHeader";

function FAQ() {
  const [openIndex1, setOpenIndex1] = useState(null); // For FAQData
  const [openIndex2, setOpenIndex2] = useState(null); // For FAQData1

  const toggleAccordion1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  const toggleAccordion2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  return (
    <>
      <ScrollHeader />
      <div className="xl:container mx-auto">  
      <div className="w-full flex flex-col lg:flex-row  px-4 lg:px-16">
        {/* Left Section - Title */}
        <div className="flex flex-col w-full lg:w-1/3 text-center mt-6 p-6">
          <h1 className="text-sm text-[#2AD2C1] font-medium text-left">Frequently Asked Questions</h1>
          <h1 className="text-4xl font-bold my-4 text-[#1D2864] text-left chakra-petch-bold">Frequently Asked Questions</h1>
          <h2 className="text-gray-400 text-sm text-left">
            We believe in a future where renewable energy sources play a vital role in reducing carbon emissions and creating a sustainable planet.
          </h2>
        </div>

        {/* FAQ Section 1 */}
        <div className="flex flex-col w-full lg:w-1/3 mb-8 lg:mb-0">
          {FAQData.map((item, index) => (
            <div key={index} className="m-4">
              <button
                className="flex border justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={() => toggleAccordion1(index)}
              >
                <span className="text-sm font-semibold text-[#1D2864] chakra-petch-bold">{item.title}</span>
                <span className="box w-8 h-8 bg-color-sky grid place-content-center rounded-lg text-2xl font-bold text-white">
                  {openIndex1 === index ? "−" : "+"}
                </span>
              </button>
              {openIndex1 === index && (
                <div className="text-left text-sm text-gray-500">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section 2 */}
        <div className="flex flex-col w-full lg:w-1/3">
          {FAQData1.map((item, index) => (
            <div key={index} className="m-4">
              <button
                className="flex border justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={() => toggleAccordion2(index)}
              >
                <span className="text-sm font-semibold text-[#1D2864] chakra-petch-bold">{item.title1}</span>
                <span className="box w-8 h-8 bg-color-sky grid place-content-center rounded-lg text-2xl font-bold text-white">
                  {openIndex2 === index ? "−" : "+"}
                </span>
              </button>
              {openIndex2 === index && (
                <div className="text-left text-sm text-gray-500">
                  {item.content1}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default FAQ;
