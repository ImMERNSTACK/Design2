import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function AmazingSpecialist() {
  // Data array containing the details of each specialist
  const specialists = [
    {
      name: "Lee S. Williamson",
      title: "PHD Student",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-1-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "Greg S. Grinstead",
      title: "Botanist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-4-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "Sara M. Blake",
      title: "Marine Biologist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-2-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "John A. Green",
      title: "Zoologist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-5-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "Emily R. Turner",
      title: "Geneticist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-6-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "Michael T. Smith",
      title: "Ecologist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-3-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "Rachel F. Edwards",
      title: "Paleontologist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-7-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },
    {
      name: "David L. Jenkins",
      title: "Microbiologist",
      image: "https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/team-8-600x600.jpg",
      socialLinks: [
        { platform: faFacebook, url: "#" },
        { platform: faTwitter, url: "#" },
        { platform: faInstagram, url: "#" },
        { platform: faLinkedin, url: "#" },
      ]
    },

  ];

  return (
    <div className="text-center py-16 px-4 bg-[#E4F7FA]">
      <h2 className="text-green-500 text-lg">Promising Best Quality Services</h2>
    <h1 className="text-4xl font-bold text-blue-900 mt-2 chakra-petch-bold">Our amazing Specialists </h1>
    <p className="text-gray-600 mt-4">We have world class pathologists & Lab assistants. We are equipped with best laboratory machinery & reagents. We ensure best quality findings.</p>
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialists.map((specialist, index) => (
          <div key={index} className="relative group">
            <img 
              src={specialist.image} 
              alt={`Portrait of ${specialist.name}`} 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-teal-600 bg-opacity-75 p-4 scale-y-0 group-hover:scale-y-100 transition-all duration-700 origin-bottom z-50">
              <h2 className="text-white text-lg">{specialist.title}</h2>
              <h1 className="text-white text-2xl font-bold">{specialist.name}</h1>
              <div className="flex space-x-2 mt-2  justify-center">
                {specialist.socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="text-white">
                    <FontAwesomeIcon icon={link.platform} />
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bg-gradient-to-t from-blue-700 to-transparent scale-y-0 group-hover:scale-y-75 transition-all duration-700 origin-bottom h-auto inset-0"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AmazingSpecialist;
