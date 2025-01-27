import React from "react";
import icon1 from "../assets/images/icon_tick1.png";
import icon2 from "../assets/images/icon_tick2.png";
import icon3 from "../assets/images/icon_tick3.png";
import formimg from "../assets/images/formimg.png";

const Card = ({ icon, title, description, bgColor }) => (
  <div className="flex gap-5 items-center">
    <div className={`p-4 rounded-full ${bgColor}`}>
      <img className="h-[30px] w-[40px]" src={icon} alt={title} />
    </div>
    <div>
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-neutral-500">{description}</p>
    </div>
  </div>
);

const Form = () => {
  const cards = [
    {
      icon: icon1,
      title: "Fast Report Delivery",
      description:
        "We provide the highest priority to deliver reports quickly for critical patients.",
      bgColor: "bg-[#CBF4F1]",
    },
    {
      icon: icon2,
      title: "Easy Testing Procedure",
      description: "Our advanced labs ensure precise and reliable results.",
      bgColor: "bg-[#D6E9FB]",
    },
    {
      icon: icon3,
      title: "Accuracy in Findings",
      description: "Our team is available around the clock to assist you.",
      bgColor: "bg-[#CBF4F1]",
    },
  ];

  return (
    <div className="xl:container xl:mx-auto bg-[#ddf4fc96]">
    <div className="flex flex-wrap lg:flex-nowrap  p-8 sm:p-[100px] relative ">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 2xl:w-1/2 pr-0 lg:pr-[250px] z-50  ">
        {/* img div */}
        <div className="absolute -z-20 hidden lg:block lg:ml-[350px] lg:bottom-[100px]">
          <img className="h-[580px]" src={formimg} alt="" />
        </div>

        <div>
          <p className="text-[#2AD2C1] font-medium mb-4">
            Versatile Laboratory Service Provider
          </p>
          <h1 className="text-[30px] sm:text-[40px] leading-[36px] sm:leading-[48px] font-semibold mb-10">
            There are so many reasons to choose us
          </h1>
        </div>
        <div className="flex flex-col gap-8 mt-6 w-full lg:w-[400px]">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#2AD2C1] p-8 rounded-lg w-full lg:w-[36vw] mt-10 lg:ml-[80px] lg:mt-0 z-50 xl:container mx-auto">
        <p className="text-center text-lg text-white mb-2">
          High Performance Services For
        </p>
        <h1 className="text-white text-center text-2xl sm:text-3xl font-semibold mb-6">
          Schedule An Appointment
        </h1>
        <p className="text-white text-center text-base sm:text-sm mb-8">
          Patholab is the best diagnostic lab in the city. I have a great
          experience with them. They provide authentic services.
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select a service</option>
              <option>General Diagnostic Testing</option>
              <option>Osmotic Fragility Testing</option>
              <option>Glycosylated Hemoglobin</option>
              <option>Specialized Genetic Testing</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Appointment time</option>
              <option>08:00 AM</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Special Requirement</option>
              <option>Wheelchair Support</option>
              <option>Clinical Histopathology Tests</option>
              <option>Vaccine Research Center</option>
              <option>Naturopathic Lab Testing</option>
            </select>
          </div>

          <div className="flex gap-3 my-5">
            <input type="checkbox" name="" id="" />
            <p className="text-white font-medium">
              I agree to the Terms of Use and Privacy Policy
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 focus:ring-2 focus:ring-teal-500 transition duration-300 w-full"
          >
            Make Appointment
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Form;
