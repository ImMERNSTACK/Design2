import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router";


const Research = () => {
  const data = [
    {
      id: 1,
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-13-740x600.jpg",
      date: "AUGUST 31, 2023",
      heading: "Blood Protein Signatures Change Across Lifespan",
    },
    {
      id: 2,
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-about-740x600.jpg",
      date: "AUGUST 29, 2023",
      heading: "Microbiologics Introduces SARS-CoV-2 Synthetic",
    },
    {
      id: 3,
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-10-740x600.jpg",
      date: "AUGUST 31, 2023",
      heading: "A Lab's Guide to Modern Specimen Collection",
    },
    {
      id: 4,
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-7-740x600.jpg",
      date: "AUGUST 29, 2023",
      heading: "The Value Of Osmolality Testing in Nephrology",
    },
    {
      id: 5,
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-12-740x600.jpg",
      date: "AUGUST 29, 2023",
      heading: "Pateint-Centered Hospital Labs Start Here",
    },
    {
      id: 6,
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-11-740x600.jpg",
      date: "AUGUST 31, 2023",
      heading: "A Lab's Guide to Modern Specimen Collection",
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = (item) => {
    // Format heading for URL (replace spaces with hyphens and make it lowercase)
    navigate("/blog",{
      state:item
    })
    // const formattedHeading = heading.toLowerCase().replace(/ /g, "-");
    //navigate(`/blog/${formattedHeading}`); 
  };

  return (
   <>
    
    <div className="my-[100px] p-2 xl:container xl:mx-auto">
      {/* Swiper Component */}
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true} // Enables looping
        scrollbar={{ draggable: true, hide: true }}
        className="px-[110px] py-10"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="shadow-md m-4 mt-8 border-2 bg-white p-4 rounded-xl flex flex-col gap-2 items-center"
              onClick={() => handleCardClick(item)} // Pass heading to the function
            >
              <div className="rounded-xl overflow-hidden relative">
                <div className="bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] absolute px-3 right-0 p-2 z-50 text-white font-medium rounded-bl-3xl">
                  {item.date}
                </div>
                <img
                  className="w-[400px] hover:scale-[1.20] transition-all duration-500"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="flex items-center gap-2 w-full text-gray-500 font-semibold text-sm">
                <IoPersonOutline />
                <span className="hover:text-color-sky">Ryan Keller</span>
                <div className="text-3xl hover:text-color-sky text-green-400 text-center mb-5">
                  .
                </div>
                <p className="hover:text-color-sky">0 Comments</p>
              </div>
              <hr className="w-full text-[gray] mb-3" />

              <div className="flex ml-4 uppercase gap-3 w-full">
                <button className="bg-[#add8e67b] px-3 text-sm uppercase hover:text-color-sky text-blue-400 py-[4px] rounded-full font-semibold">
                  AI Science
                </button>
                <button className="bg-[#add8e67b] uppercase text-sm hover:text-color-sky text-blue-400 px-3 py-[4px] rounded-full font-semibold">
                  Scientific
                </button>
              </div>
              <h1 className="text-[18px] hover:text-color-sky font-semibold my-3">
                {item.heading}
              </h1>

              <div className="flex w-full items-center gap-2 text-sm font-[600] text-[#2AD1C2] cursor-pointer group">
                <h2>READ MORE</h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Research;
