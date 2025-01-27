import { faArrowUp, faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ClientsTestimonials() {
  return (
    <div className="mx-auto py-12 px-4 bg-gradient-to-r from-teal-400 to-cyan-500">
        <div className="xl:container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-white text-lg">Learn How We Maintain Our Lab</h2>
        <h1 className="text-white text-3xl sm:text-4xl font-bold">Clients Testimonial</h1>
      </div>
      <div className="text-center mb-8">
        <p className="text-white sm:text-lg">Patholab is the best diagnostic lab in the city. The reasons to be best in what we do is the process of maintaining the laboratory with Patholab.</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full sm:w-1/2 lg:w-1/3">
          <div className="flex items-center mb-4">
            <img
              src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/team-v1-100x100.jpg"
              alt="Portrait of Raymond Castillo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Raymond Castillo</h3>
              <p className="text-teal-500">NEW YORK</p>
            </div>
            <div className="ml-auto text-yellow-500">
              <span className="font-bold">Rating:</span>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <p className="text-gray-600">"Regardless of which division, testing services, silicone mock vessels, or test equipment, our team will go above and beyond to ensure the highest. I highly recommend them."</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg w-full sm:w-1/2 lg:w-1/3">
          <div className="flex items-center mb-4">
            <img
              src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/avatar-100x100.png"
              alt="Portrait of Emily Robinson"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Emily Robinson</h3>
              <p className="text-teal-500">FIRST TIME PATIENT</p>
            </div>
            <div className="ml-auto text-yellow-500">
              <span className="font-bold">Rating:</span>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <p className="text-gray-600">"Biomedical Device and Consultants & Laboratories will spend extra time to get you exactly what you need, at the best price. Questions that other companies might ignore. I highly recommend them."</p>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button className="bg-white rounded-full p-2 shadow-lg">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="bg-white rounded-full p-2 shadow-lg">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-white rounded-full p-4 shadow-lg">
          <FontAwesomeIcon icon={faArrowUp} className="text-teal-500" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default ClientsTestimonials;
