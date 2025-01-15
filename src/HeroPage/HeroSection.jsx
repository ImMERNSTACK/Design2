import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from '../HeroPage/Header';
import Header2 from "./Header2";

const HeroSection = () => {
  const slides = [
    {
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/banner-2-800x800.jpg",
      title: "Dedicated Experts",
      subtitle: "Committed to Provide Accurate Results",
      description:
        "Patholab Laboratory is a Full-Service Clinical Lab. We have world-class pathologists & Lab assistants. We ensure the best quality findings.",
    },
    {
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/banner-3-600x600.jpg",
      title: "State-of-the-Art Equipment",
      subtitle: "Delivering Precise & Reliable Results",
      description:
        "Equipped with modern laboratory machinery and reagents, we ensure best quality findings for all medical tests.",
    },
  ];

  const [currentStage, setCurrentStage] = useState(0); // Track animation stage

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setCurrentStage(1); 

      await new Promise((resolve) => setTimeout(resolve, 3000)); 
      setCurrentStage(2); 
    };

    sequence();
  }, []);

  return (
    <>
      <div className="relative">
        {/* Header component */}
        <div className="absolute top-0 left-0  lg:mx-auto z-50 w-full  lg:px-4">
          <Header show="" />
        </div>
        
        {/* HeroSection content */}
        <div className="container mx-auto px-4 lg:px-8">
          <Header2 />
        </div>

        <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
          <AnimatePresence>
            {/* First Image + Content */}
            {currentStage === 0 && (
              <>
                <motion.div
                  key="first-image"
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover"
                  style={{ backgroundImage: `url(${slides[0].image})` }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.div
                  key="first-content"
                  className="relative z-30 flex items-center justify-center w-full h-full px-6 bg-opacity-50"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 10, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="text-center text-white space-y-6">
                    <h1 className="text-4xl md:text-6xl transition-transform duration-700 font-bold">{slides[0].title}</h1>
                    <h2 className="text-2xl md:text-4xl transition-transform duration-500 font-semibold">{slides[0].subtitle}</h2>
                    <p className="text-lg transition-transform duration-300 md:text-xl">{slides[0].description}</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </>
            )}

            {/* Second Stage */}
            {currentStage === 1 && (
              <motion.div
                key="curtain"
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover"
                style={{ backgroundImage: `url(${slides[1].image})` }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                exit={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 backdrop-blur-md"></div>
              </motion.div>
            )}

            {/* Third Stage */}
            {currentStage === 2 && (
              <>
                <motion.div
                  key="third-image"
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover"
                  style={{ backgroundImage: `url(${slides[1].image})` }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "-0%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.div
                  key="third-content"
                  className="relative z-30 flex items-center justify-center w-full h-full px-6 bg-opacity-50"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="text-left text-white space-y-6">
                    <h1 className="text-4xl text-blue-950 md:text-6xl font-bold">{slides[1].title}</h1>
                    <h2 className="text-2xl md:text-4xl text-blue-950 font-semibold">{slides[1].subtitle}</h2>
                    <p className="text-lg text-gray-400 md:text-xl">{slides[1].description}</p>
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-6">
                      <button className="bg-color-sky text-white px-6 py-3 rounded-full hover:bg-blue-900 transition-all duration-300">
                        Get Patholab Services
                      </button>
                      <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-color-sky transition-all duration-300">
                        Book A Home Collection
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
