import React from 'react';
import { sectionData } from '../Home/S1';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollHeader from '../Common/ScrollHeader';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <>
            <ScrollHeader />
            <div className="items-center w-full bg-[#F6FAFF] flex flex-col">
                <div className="mt-10 flex flex-col gap-2 w-full items-center justify-center text-center">
                    <h4 className="text-teal-500 font-bold text-md">
                        Versatile Laboratory Service Provider
                    </h4>
                    <h1 className="font-serif text-3xl font-bold">
                        Our amazing Services
                    </h1>
                    <p className="text-md text-gray-500">
                        We have world-class pathologists & lab assistants. We are equipped with the best laboratory machinery & reagents. We ensure the best quality findings.
                    </p>
                </div>

                {/* Swiper Component with Breakpoints */}
                <div className="flex flex-row w-full">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        scrollbar={{ draggable: true, hide: true }}
                        loop={true}
                        className="myswiper flex h-96"
                        breakpoints={{
                            320: {
                                slidesPerView: 1, // 1 slide for mobile
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2, // 2 slides for small tablets
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3, // 3 slides for medium tablets
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4, // 4 slides for large screens (desktop)
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {sectionData.map((item, index) => (
                            <SwiperSlide key={index} className="px-1">
                                <div className="group border flex justify-center mt-7">
                                    <div className="absolute bg-white text-teal-500 rounded-lg p-8 text-center max-w-xs transition-all duration-1000">
                                        <div className="mb-4">
                                            <FontAwesomeIcon icon={item.icon} size="3x" />
                                        </div>
                                        <h2 className="text-xl font-bold mb-4 h-12 text-[#1D2864]">{item.h}</h2>
                                        <p className="mb-4 h-16 text-[#6F7F90] text-md">{item.p}</p>
                                        <a href="#" className="font-bold text-sm">
                                            READ MORE <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                    <div className="absolute bg-white text-teal-500 rounded-lg p-8 text-center max-w-xs transition-all duration-200 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-teal-500 group-hover:text-white group-hover:shadow-lg">
                                        <div className="mb-4">
                                            <FontAwesomeIcon icon={item.icon} size="3x" />
                                        </div>
                                        <h2 className="text-xl font-bold mb-4 transform-none h-12">{item.h}</h2>
                                        <p className="mb-4 h-16 text-sm">{item.p}</p>
                                        <a href="#" className="font-bold text-sm">
                                            READ MORE <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Services;
