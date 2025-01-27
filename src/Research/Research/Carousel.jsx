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
            <div className=' flex flex-col  lg:flex-row justify-around lg:justify-between'>
            <div className='-mt-96 lg:-mt-52 lg:ml-16 text-5xl chakra-petch-bold text-white font-semibold text-center' >RESEARCH</div>
            <div className='-mt-72  lg:-mt-52 lg:mr-16 text-lg text-center   text-white'><span className='hover:text-blue-600' >HOME </span> <span className='transform rotate-90 inline-block'>^</span> <span className='hover:text-blue-600'>ABOUT</span></div>
            </div>
          </div>
      </div>
  )
}

export default Carousel;