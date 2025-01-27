import { faCheckCircle, faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';

function Cards3() {
  
  const cards = [
    {
      imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/laboratory-3-822x600.jpg",
      title: "Glycosylated Hemoglobin",
      description: "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      includedTests: 40,
      bgColor: "bg-teal-500",
      icon: faUser
    },
    {
      imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/laboratory-4-822x600.jpg",
      title: "Specialized Genetic Testing",
      description: "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      includedTests: 90,
      bgColor: "bg-teal-500",
      icon: faUser
    },
    {
      imageUrl: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/laboratory-1-822x600.jpg",
      title: "Glycosylated Hemoglobin",
      description: "Allergy testing can be useful at different stages of life, like discovering that a family member has a condition.",
      includedTests: 40,
      bgColor: "bg-teal-500",
      icon: faUser
    },
  ];

  return (
    <div className="xl:container mx-auto">
    <div className="my-10">
      {/* Map over the cards array to render each card */}
      <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        scrollbar={{ draggable: true, hide: true }}
                        loop={true}
                        className="myswiper h-[500px] "
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
      {cards.map((card, index) => (
        <SwiperSlide key={index} className="sm:ml-10 md:ml-20 lg:ml-20">
        <div key={index} className="relative group">
          <div className={`bg-white scale-100 group-hover:scale-x-0 transition-all duration-500 origin-right inset-0 absolute rounded-lg shadow-lg max-w-sm h-[420px]`}>
            <img
              src={card.imageUrl}
              alt="Laboratory"
              className="rounded-t-lg w-full h-52"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
              <p className="text-gray-600 mt-2 ">{card.description}</p>
              <p className="text-green-500 font-medium mt-4">Includes <span className="font-bold">{card.includedTests} tests</span></p>
            </div>
            <div className={`absolute top-4 right-4 ${card.bgColor} text-white p-2 rounded-full`}>
              <FontAwesomeIcon icon={card.icon} />
            </div>
          </div>
          <div
            className="text-white p-6 rounded-lg shadow-lg h-[420px]"
            style={{
              backgroundImage: `url(${card.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute hidden group-hover:block inset-0 z-10 bg-[#7EDAD5] opacity-80 rounded-lg"></div>
            <div className="relative z-30 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faHandshake} className="text-teal-500 text-2xl" />
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
              <p className="mb-4">{card.description}</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Hormone Shots
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Upload Prescription
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Series Blood Tests
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Complete Blood Count
                </li>
              </ul>
            </div>
          </div>
        </div>
        </SwiperSlide>
      ))}
      </Swiper>

    </div>
    </div>
  );
}

export default Cards3;
