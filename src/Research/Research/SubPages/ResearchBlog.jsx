import React from 'react';
import Aside from './Aside';
import { faFacebook, faFacebookF, faTwitter, faPinterestP, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { IoCalendar, IoFolderOpenOutline, IoPersonOutline } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Carouselpages from './Carouselpages';
import { useLocation } from 'react-router';
import Footer from '../../../Components2/Footer';
import Navbar from '../../../Components2/Navbar';


const p1 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.';
const p2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.';

const ResearchBlog = () => {
     const location=useLocation()
    
  return (
    <>
    <Navbar/>
       <Carouselpages heading={location.state.heading}/>
       {console.log(location)}
      <main className="container mx-auto py-8 px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row">
       
          <div className="md:w-2/3 space-y-8">
       
            <div className="flex flex-wrap gap-4">
              <button className="text-sm md:text-md p-2 font-semibold rounded-full text-blue-400 bg-sky-200">
                AI SCIENCE
              </button>
              <button className="text-sm md:text-md p-2 font-semibold rounded-full text-blue-400 bg-sky-200">
                Scientific
              </button>
            </div>

            {/*  Info Section */}
            <div className="flex flex-wrap   items-center gap-4 text-sm md:text-lg text-gray-500 font-semibold">
              <IoPersonOutline className="text-xl md:text-2xl" />
              <span className="hover:text-color-sky chakra-petch-bold">Ryan Keller</span>
              <IoCalendar className="text-xl md:text-2xl" />
              <span className="hover:text-color-sky chakra-petch-bold">August 29, 2023</span>
              <IoFolderOpenOutline className="text-xl md:text-2xl" />
              <span className="hover:text-color-sky chakra-petch-bold">Neuroscience, Nutrition</span>
              <p className="hover:text-color-sky chakra-petch-bold">0 Comments</p>
            </div>

            {/* Blog Content Section */}
            <img
              src={location.state.image}
              alt="Petri dishes with blue liquid"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-lg object-cover"
            />
            <p className="mt-5 text-gray-500 font-sans text-base md:text-lg">{p1}</p>
            <p className="mt-5 text-gray-500 font-sans text-base md:text-lg">{p2}</p>

            {/* Additional Image Section */}
            <img
              src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single.jpg"
              alt="Petri dishes with blue liquid"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-md object-cover"
            />
            <p className="mt-5 text-gray-700 font-sans text-base md:text-lg">{p1}</p>
            <p className="mt-5 text-gray-700 font-sans text-base md:text-lg">{p2}</p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single2.jpg"
                alt=""
                className="w-[400px] h-[350px] animate-slide-left rounded-md object-cover"
              />
              <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single3.jpg"
                alt=""
                className="w-[400px] h-[350px] animate-slide-left rounded-md object-cover"
              />
              <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/image-single4.jpg"
                alt=""
                className="w-[400px] h-[350px] animate-slide-left rounded-md object-cover"
              />
            </div>

            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex items-center gap-4 text-lg chakra-petch-bold text-blue-900">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-color-sky" ></FontAwesomeIcon>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </li>
                <li className="flex items-center gap-4 text-lg chakra-petch-bold text-blue-900">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-color-sky"></FontAwesomeIcon>
                  Eam soluta dicunt cu. Est ad oporteat appellantur, per dic ta pertinax cueaque ipsa quae ab illo.
                </li>
                <li className="flex items-center gap-4 text-lg  chakra-petch-bold text-blue-900">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-color-sky"></FontAwesomeIcon>Cu movet debitis cum. Vix paulo evertquasi arch itecto beatae vitae dictaitur conceptam.
                </li>
              </ul>
            </div>

            <p className="mt-5 text-gray-500 font-sans text-base md:text-lg">{p1}</p>


            {/*  Action Section */}
            <div className="flex  flex-col md:flex-row items-center md:items-start bg-cover bg-center rounded-lg p-4 space-y-4 md:space-y-0"
              style={{
                backgroundImage:
                  'url(https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/bg.jpg)',
              }}
            >
              <div className="md:w-2/3  space-y-6 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
                  Dedicated Professionals & Doctors Recommend Us
                </h2>
                <p className="text-gray-700 text-base md:text-lg">
                  Dedicated professionals committed to providing you with accurate and reliable
                  diagnostic services. Get patholab services today from the best lab experts & make a
                  visit to our laboratory.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <button className="bg-gradient-to-r from-teal-400 to-green-400 hover:from-teal-500 hover:to-green-500 text-white px-6 py-3 font-semibold rounded-full">
                    Get lab Services
                  </button>
                  <button className="bg-white text-blue-950 px-6 py-3 font-semibold  hover:bg-green-400 rounded-full">
                    Book A Home Visit
                  </button>
                </div>
              </div>
              <div className=" flex  justify-center ">
                <img
                  src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/coats-2.png"
                  alt="Group of doctors"
                  className="w-[300px] md:w-[350px] md:mt-36 h-full rounded-lg object-cover"
                />
              </div>
            </div>

            <p className="mt-5 text-gray-500 font-sans text-base md:text-lg">{p2}</p>

            {/* Video Section */}
            <div className="relative ">
              <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/blog-bg-video.jpg"
                alt="Petri dishes with blue liquid"
                className="w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-lg object-cover"
              />
               <FontAwesomeIcon
                icon={faCirclePlay}
                className="absolute animate-ping bottom-[45%] left-[45%]  transform text-5xl md:text-6xl lg:text-8xl text-color-sky cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="absolute  bottom-[45%] left-[45%] transform text-5xl md:text-6xl lg:text-8xl text-color-sky cursor-pointer"
              />
            </div>

            <p className="mt-5 text-gray-500 font-sans text-base md:text-lg">{p2}</p>
            <div className="flex flex-row items-center space-x-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="chakra-petch-bold text-2xl flex items-center space-x-2">
                <span className='text-blue-950'>Share:</span>
                <FontAwesomeIcon icon={faFacebook} className='font-bold text-sm p-2 text-white  rounded-full bg-blue-950' />
                <FontAwesomeIcon icon={faTwitter} className='font-bold text-sm p-2 text-white rounded-full bg-blue-600' />
                <FontAwesomeIcon icon={faPinterestP} className='font-bold text-sm p-2 text-white rounded-full  bg-red-700' />
                <FontAwesomeIcon icon={faLinkedinIn} className='font-bold text-sm p-2 text-white  rounded-full bg-blue-700' />
              </div>
            </div>

             {/* Author Section  */}
            <div className="flex flex-col border-4 space-x-6 md:flex-row items-center md:items-start bg-gray-300 p-8 rounded-xl space-y-4 md:space-y-0">
              <img
                src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/avatar.png"
                alt="Author"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-center space-y-4 md:text-left">
                <h1 className="chakra-petch-bold text-xl md:text-2xl text-blue-950">Rayan Keller</h1>
                <p className="text-base md:text-lg text-gray-600">
                  Author of this blog, Rayan Keller, is a travel nutritionist, writer & photographer.
                  She shares her daily life activities in a very entertaining manner.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <FontAwesomeIcon icon={faFacebookF} className="text-xl text-blue-600" />
                  <FontAwesomeIcon icon={faTwitter} className="text-xl text-blue-400" />
                  <FontAwesomeIcon icon={faPinterest} className="text-xl text-red-600" />
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xl text-blue-800" />
                </div>
              </div>
            </div>

            <div className="  max-w-5xl mx-auto p-6 bg-white rounded-lg space-y-8">
             
              <h2 className="text-4xl chakra-petch-bold font-bold text-blue-950">Leave A Comment</h2>
              <p className="text-gray-700 text-md">Your email address will not be published *</p>

             
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border-2 rounded-md focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border-2 rounded-md focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 border-2 rounded-md focus:ring-2 focus:ring-gray-400"
                />
              </div>

             
              <div className="flex items-center md:flex-wrap space-x-2">
                <input
                  type="checkbox"
                  id="save-details"
                  className="h-4 w-4 text-gray-800 border-white rounded focus:ring-gray-400"
                />
                <label htmlFor="save-details" className="text-gray-700 text-md">
                  Save my details in this browser for the next time I comment.
                </label>
              </div>
              <textarea
                placeholder="Comment"
                rows="5"
                className="w-full p-3 border-2 rounded-md focus:ring-1 focus:ring-gray-400"
              ></textarea>
             <button className="px-9 py-4 mt-6 text-white font-semibold bg-gradient-to-r from-teal-400 to-green-400 rounded-full hover:bg-gradient-to-l">
                Post Comment
              </button>
            </div>
          </div>
          
          <div className="md:w-1/3 sm:w-full sm:w-flex">
            <div
              className="sticky  sm:w-[400px] md:[300px] lg:w-[400px] top-2"
              style={{
                 
                overflowY: "auto",
             }}
            >
              <Aside />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResearchBlog;
