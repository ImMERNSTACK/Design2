import React from 'react'

function Carousel() {

  return (
    <div className="relative">
          <div className="w-full">
            <img
              src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/bg-page-title.png"
              alt="slide"
              className="w-full h-96 object-cover"
            /> 
            <div className=' flex justify-between xl:container xl:mx-auto p-2  '>
            <div className='-mt-52 ml-4 md:ml-8 lg:ml-16 text-5xl chakra-petch-bold text-white  font-semibold ' >ABOUT</div>
            <div className='-mt-52 ml-4 md:ml-8 lg:mr-16 text-lg  justify-start text-white'><span className='hover:text-blue-600' >HOME </span> <span className='transform rotate-90 inline-block'>^</span> <span className='hover:text-blue-600'>ABOUT</span></div>
            </div>
          </div>
      </div>
  )
}

export default Carousel;