import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/banner-1-1-1200x700.jpg",
    "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/banner-2-1200x700.jpg",
    "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-13-1200x700.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full lg:px-12 xl:container mx-auto mt-5 lg:mt-20">
      {/* Slider Container */}
      <div className="relative overflow-hidden ">
        {/* Slider */}
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#60;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Slider;
