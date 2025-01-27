import React, { useState } from 'react';
import Header from '../HeroPage/Header';
import { caseStudy } from './CaseStudyData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollHeader from '../Common/ScrollHeader';

const CaseStudy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <ScrollHeader />
      <div className="xl:container mx-auto">
      <div className="mx-auto flex flex-col mb-5 p-8">
        <div className="flex flex-col items-center m-6 justify-center">
          <h3 className="text-color-sky text-pretty font-semibold">
            Promising Best Quality Services
          </h3>
          <h1 className="text-blue-900 text-3xl p-4 text-pretty chakra-petch-bold">
            Case Studies By Patholab
          </h1>
          <p>
            As an investment firm, our main goal is to provide the best services
            to our customers & create the best ideas to help grow our clients.
          </p>
        </div>

        <div className="flex flex-row h-[450px] border-black rounded-xl space-x-3">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1, // 1 slide for mobile
                spaceBetween: 20, // space between slides for mobile
              },
              640: {
                slidesPerView: 2, // 2 slides for small tablets
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // 3 slides for larger screens
                spaceBetween: 30,
              },
              
              
            }}
            className="mySwiper"
          >
            {caseStudy.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full bg-gray-300 mb-10 rounded-3xl group transform transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={item.image}
                    alt="image"
                    className="h-[500px] w-full rounded-3xl object-cover"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 top-20 bg-gradient-to-t from-blue-700 to-transparent rounded-b-3xl transform transition-all duration-700 ${
                      hoveredIndex === index ? 'opacity-200' : 'opacity-0'
                    }`}
                  >
                    <span className="text-blue-900 text-lg font-semibold  top-64 left-24 bg-white p-4 absolute  rounded-2xl border-l-8 border-r-8 border-teal-400">
                      {item.message || 'Custom Message'}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </div>
    </>
  );
};

export default CaseStudy;
