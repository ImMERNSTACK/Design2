import React from 'react'

 import ResearchData from './ResearchData'
 import Carousel from '../Research/Carousel'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../../Components2/Footer';
import Navbar from '../../Components2/Navbar';

function Research() {
    const images = [
        'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-1.jpg',
        'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single4.jpg',
        'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single3.jpg',
        'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single2.jpg',
        'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single.jpg',
        'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/coats-2.png',
      ];
  return ( <>
  <Navbar/>
  <Carousel/>
  <div className="container mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper m-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full   justify-center h-[600px] p-6 object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
        <div className='bg-teal-400 w-full lg:h-[34vw]'>
            <div className='flex justify-center'>
                <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/title-icon.png" className='mt-10 transition duration-750 animate-bounce' alt="" />
            </div>
            <div className='flex flex-col -mt-12'>
                <div className='self-center text-white mb-3'>  What good works we are doing </div>
                <div className='self-center font-bold chakra-petch-bold text-white text-3xl mb-3'>OUR LATEST RESEARCH </div>
                <div className='self-center text-white text-lg'>We have world class pathologists & Lab assistants. We are equipped
                with best labo</div>
            </div>
           <ResearchData/>
            <Footer/>

        </div>   
        </>
    
  )
}

export default Research