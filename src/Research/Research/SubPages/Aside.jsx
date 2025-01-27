import { faFacebookF, faLinkedinIn, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import {FaSearch } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const Aside = () => {
  const Post = [
    {
      image: 'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-about-105x82.jpg',
      title: 'Patient-Centered Hospital Labs Start Here',
      date: 'AUGUST 29, 2023',
    },
    {
      image: 'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-13-105x82.jpg',
      title: 'Blood Protein Signatures Change Across Lifespan',
      date: 'AUGUST 31, 2023',
    },
    {
      image: 'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-12-105x82.jpg',
      title: 'Microbiologics Introduces SARS-CoV-2 Synthetic',
      date: 'AUGUST 31, 2023',
    },
  ];

  return (
    <aside className=" w-full px-4  p-6 md:px-8  space-y-12">
      {/* Search Section */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border placeholder-blue-950 text-bold border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button className="absolute   py-2 px-2 right-0 bg-gradient-to-r from-teal-400 to-green-400 hover:bg-gradient-to-l text-white  rounded-full">
           <IoSearch className='text-2xl text-black '/>
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white p-2  border-gray-400  border-t border-l border-r rounded-md">
        <img
          src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-about.jpg"
          alt="Scientist working with microscope"
          className="w-full rounded-md"
        />
        <p className="mt-4 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus accusantium dolore mo uelau dantium totam rem aperiam eaque ipsa quaillo inven.
        </p>
         </div>
      {/* Categories Section */}
      <div>
        <h2 className="text-xl font-bold chakra-petch-bold text-blue-950 mb-4">Categories</h2>
        <ul className="space-y-2 mt-8">
          <li className="flex justify-between  border-dashed border-b-2 border-gray-600 items-center">
            <span className="text-gray-700">Genetics</span>
            <span className="text-gray-500">(4)</span>
          </li>

          <li className="flex justify-between items-center border-dashed border-b-2 border-gray-600">
            <span className="text-gray-700">Neuroscience</span>
            <span className="text-gray-500">(7)</span>
          </li>

          <li className="flex justify-between items-center border-dashed border-b-2 border-gray-600">
            <span className="text-gray-700">Nutrition</span>
            <span className="text-gray-500">(5)</span>
          </li>

          <li className="flex justify-between items-center border-dashed border-b-2 border-gray-600">
            <span className="text-gray-700">Research</span>
            <span className="text-gray-500">(5)</span>
          </li>
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div>
        <h2 className="text-xl chakra-petch-bold text-blue-950 mb-4">Recent Posts</h2>
        {Post.map((item, index) => (
          <div key={index} className="flex items-start space-x-4  mt-8">
            <img
              src={item.image}
              alt="Post"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className='chakra-petch-bold '>
              <h3 className="text-sm font-semibold  text-blue-950">{item.title}</h3>
              <p className="text-sm text-color-sky">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Section */}
      <div>
        <h2 className="text-xl chakra-petch-bold text-blue-950 mb-4">Tags</h2>
        <div className="flex flex-wrap  mt-8 gap-2">
          {['AI-SCIENCE', 'GENETIC', 'LABORATORY', 'PATHOLOGY', 'NEUROSCIENCE', 'MEDICAL', 'SCIENTIFIC'].map((tag, index) => (
            <a
              key={index}
              href="/"
              className=" hover:bg-gradient-to-r  hover:from-green-400 hover:to-blue-400 px-3 py-1 text-sm font-semibold text-blue-950 bg-blue-100 rounded-full"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <h2 className="text-xl  chakra-petch-bold text-blue-950 mb-4">Gallery</h2>
        <div className="grid grid-cols-3  mt-8 gap-2">
          {[
            'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-1.jpg',
            'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single4.jpg',
            'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single3.jpg',
            'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single2.jpg',
            'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single.jpg',
            'https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/coats-2.png',
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-20 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
