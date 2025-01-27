import { faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MaintainLab() {
  return (
    <div><div className="p-6 md:p-12 xl:container mx-auto">

    <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex-row justify-center p-2 lg:p-12  flex-1">
    <div className="text-left mb-8">
        <p className="text-green-500 text-sm md:text-base">Learn How We maintain our Lab</p>
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900">Patholab Provides the best laboratory experience</h1>
    </div>
        <div className="bg-blue-500 text-white p-6 md:p-10 rounded-lg md:mr-6 mb-6 md:mb-0 w-full   ">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Patholab Laboratory Protocol</h2>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className='mr-2'/>
                    Safety & security is must in laboratory
                </li>
                <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className='mr-2'/>
                    Privacy of Client Data is highly maintained
                </li>
                <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className='mr-2'/>
                    Continous Monitoring & quality control
                </li>
                <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className='mr-2'/>
                    Proper documentation & quick report Delivery
                </li>
            </ul>
            <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                    <span>Diagnostic Facility</span>
                    <span className="text-green-300">90%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2.5">
                    <div className="bg-green-300 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                    <span>Accuracy in Findings</span>
                    <span className="text-green-300">96%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2.5">
                    <div className="bg-green-300 h-2.5 rounded-full" style={{ width: '96%' }}></div>
                </div>
            </div>
        </div>
        </div>
        <div className="relative w-full md:w-1/2  group">
           <p className='mb-14 text-[#6F7F90]'>Patholab is the best diagnostic lab in the city. The reasons to be best in what we do is the process of maintain the laboratory with international standards. Safety & security measures are highly maintained.</p>
            <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-13-1200x700.jpg" alt="Laboratory staff working with lab equipment" className="rounded-lg w-full " />
            <div className="absolute inset-0 flex items-center justify-center top-24">
                <div className=" bg-gradient-to-r group-hover:animate-spin transition-all duration-1000 from-green-300 via-blue-400 to-teal-400 rounded-full p-4 md:p-10 shadow-lg ">
                    <FontAwesomeIcon icon={faPlay} className='text-green-500 text-2xl md:text-5xl'/>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center top-24">
                <div className="bg-white rounded-full p-4 md:p-8 shadow-lg  ">
                    <FontAwesomeIcon icon={faPlay} className='text-green-500 text-2xl md:text-5xl'/>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default MaintainLab