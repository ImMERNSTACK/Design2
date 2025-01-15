import { faFacebook, faGoogle, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap, faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className=' text-white relative'>
   <footer class="p-10 bg-[#046270] lg:h-[44vw] " style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }} >
    <div class="grid grid-cols-1 md:grid-cols-5 gap-7 mt-10 ">
     <div>
      <img alt="Patholab logo" class="mb-4" height="100" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo-light.png" width="100"/>
      <p>
       Patholab laboratory is a very well equipped laboratory of this country &amp; they promised to provide best services
      </p>
      <div class="flex space-x-4 mt-4">
       <a class="text-white" href="#">
        <FontAwesomeIcon icon={faFacebook}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faGoogle}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faTwitter}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faInstagram}/>
       </a>
       <a class="text-white" href="#">
       <FontAwesomeIcon icon={faPinterest}/>
       </a>
      </div>
     </div>
     <div>
      <h3 class="text-xl font-bold mb-4 chakra-petch-bold">
       Our Services
      </h3>
      <ul>
       <li>
        Clinical Histopathology Tests
       </li>
       <li>
        Clinical Biochemistry Tests
       </li>
       <li>
        Vaccine Research Center
       </li>
       <li>
        Clinical Microbiology Tests
       </li>
       <li>
        Complete Health Checkup
       </li>
      </ul>
     </div>
     <div>
      <h3 class="text-xl font-bold mb-4 chakra-petch-bold">
       For Customers
      </h3>
      <ul>
       <li>
        Upload Prescription
       </li>
       <li>
        Request a call Back
       </li>
       <li>
        Healthcare Packages
       </li>
       <li>
        Download Reports
       </li>
       <li>
        Track Progress
       </li>
      </ul>
     </div>
     <div>
      <h3 class="text-xl font-bold mb-4 chakra-petch-bold">
       Opening Hour
      </h3>
      <ul>
       <li>
        Monday
       </li>
       <li>
        Tuesday
       </li>
       <li>
        Wednesday
       </li>
       <li>
        Thursday
       </li>
       <li>
        Friday
       </li>
       <li>
        Saturday
       </li>
       <li>
        Sunday
       </li>
      </ul>
     </div>
     <div className='mt-11 mr-20'>
      <ul>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-green-400">
         9am - 7am
        </span>
       </li>
       <li>
        <span class="text-red-500">
         Closed
        </span>
       </li>
      </ul>
     </div>
    </div>
    <div class="mt-10 inline-block flex-col md:flex-row  items-center border-t -ml-6 lg:-ml-4 border-white py-2 lg:py-6 ">
     
    <div className="bg-teal-700 text-white rounded-full lg:ml-24 flex flex-col md:flex-row justify-between items-center p-4 md:p-8 w-full max-w-5xl">
                    <div className="flex items-center mb-4 md:mb-0">
                        <FontAwesomeIcon icon={faPhoneAlt} className='mr-4 text-green-400'/>
                        <div>
                            <p className="text-lg">Need Help? Book Lab Visit</p>
                            <p className="text-2xl font-bold text-green-400">+234 567 899</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <FontAwesomeIcon icon={faEnvelope} className='text-green-400 mr-4'/>
                        <p className="text-lg">Info@Patholab.com</p>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='text-green-400 mr-4'/>
                        <p className="text-lg">183 Marina Avenue, Miami Ci Mall, USA</p>
                    </div>
                </div>
     <div className="flex flex-col lg:flex-row items-center lg:justify-between w-[95vw] mt-8 space-y-4 lg:space-y-0">
  {/* Copyright Section */}
  <div className="text-center lg:text-left">
    <span>© 2023, BRAVISTHEME, All rights reserved</span>
  </div>

  {/* Links Section */}
  <div className="flex space-x-4">
    <a className="text-white hover:underline" href="#" aria-label="Privacy Policy">
      Privacy Policy
    </a>
    <a className="text-white hover:underline" href="#" aria-label="Terms and Condition">
      Terms &amp; Condition
    </a>
    <a className="text-white hover:underline" href="#" aria-label="Promo Terms and Conditions">
      *Promo T&amp;Cs Apply
    </a>
  </div>

  {/* Payment Gateways Section */}
  <div className="flex items-center space-x-3">
    <span>Payment Gateways:</span>
    <div className="flex space-x-2">
      {[
        "card-5.png",
        "card-3.png",
        "card-2.png",
        "card-1.png",
      ].map((img, idx) => (
        <img
          key={idx}
          alt={`Payment Gateway ${idx + 1}`}
          src={`https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/${img}`}
          width="25"
          height="20"
          className="hover:scale-110 transition-transform"
        />
      ))}
    </div>
  </div>
</div>


    </div>
   </footer></div>
  )
}

export default Footer