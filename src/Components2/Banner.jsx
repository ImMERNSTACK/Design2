import React from "react";
import client1 from "../assets/images/client-1-light.png";
import client2 from "../assets/images/client-2-lieght2.png";
import client3 from "../assets/images/client-2-light.png";
import client4 from "../assets/images/client-3-light.png";
import client5 from "../assets/images/client-4-light.png";

const images = [client1, client2, client3, client4, client5];

const Banner = () => {
  return (
    <div className="xl:container mx-auto">
    <div className="bg-[#00277C] items-center justify-center py-[80px]">
      <div className="flex flex-wrap gap-4 sm:gap-[45px] justify-center items-center">
        {images.map((image, index) => (
          <img
            className="h-[50px] sm:h-[67px]"
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Banner;
