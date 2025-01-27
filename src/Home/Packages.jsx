import { faDumbbell, faHeartbeat, faUsers, faVials } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Packages() {
  return (
    <div><div className="text-center py-16 px-4 bg-[#E4F7FA]">
    <h2 className="text-green-500 text-lg">Promising Best Quality Services</h2>
    <h1 className="text-4xl font-bold text-blue-900 mt-2 chakra-petch-bold">Our amazing Healthcare Packages</h1>
    <p className="text-gray-600 mt-4">As a Investment firm our main goal is to provide best services to our customers & create best ideas to help grow our clients.</p>
    <div className="flex justify-center mt-8 space-x-8">
        <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg">
                <FontAwesomeIcon icon={faVials} className=' text-white text-3xl'/>
            </div>
            <p className="mt-2 text-gray-700">Show All</p>
        </div>
        <div className="flex flex-col items-center">
      <div className="relative  bg-gray-100 p-4 rounded-lg overflow-hidden group">
        {/* Sliding color background */}
        
        {/* Icon */}
        <FontAwesomeIcon
          icon={faHeartbeat}
          className=" text-gray-500 text-3xl "
        />
        <div
          className="absolute inset-0 bg-gradient-to-r  from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-right"
        ><FontAwesomeIcon
        icon={faHeartbeat}
        className=" absolute top-[25%] right-[25%] text-gray-500 text-3xl group-hover:text-white transition-text duration-300"
      /></div>
      </div>
      <p className="mt-2 text-gray-700">Complete Care</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="relative  bg-gray-100 p-4 rounded-lg overflow-hidden group">
        {/* Sliding color background */}
        
        {/* Icon */}
        <FontAwesomeIcon
          icon={faUsers}
          className=" text-gray-500 text-3xl "
        />
        <div
          className="absolute inset-0 bg-gradient-to-r  from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-right"
        ><FontAwesomeIcon
        icon={faUsers}
        className=" absolute top-[25%] right-[25%] text-gray-500 text-3xl group-hover:text-white transition-text duration-300"
      /></div>
      </div>
      <p className="mt-2 text-gray-700">Family Care</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="relative  bg-gray-100 p-4 rounded-lg overflow-hidden group">
        {/* Sliding color background */}
        
        {/* Icon */}
        <FontAwesomeIcon
          icon={faHeartbeat}
          className=" text-gray-500 text-3xl "
        />
        <div
          className="absolute inset-0 bg-gradient-to-r  from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-right"
        ><FontAwesomeIcon
        icon={faDumbbell}
        className=" absolute top-[25%] right-[25%] text-gray-500 text-3xl group-hover:text-white transition-text duration-300"
      /></div>
      </div>
      <p className="mt-2 text-gray-700">Fitness Care</p>
    </div>
    </div>
</div></div>
  )
}

export default Packages