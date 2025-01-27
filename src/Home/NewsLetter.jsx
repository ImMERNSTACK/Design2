import React, { useState } from "react";
import newsletter from "../assets/HomeImages/newsletter.png";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert(setMessage("Please enter a valid email address."));
      return;
    }

    // Simulate sending email to the backend
    console.log(`Subscribed email: ${email}`);
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear the input field
  };

  return (
    <div className="container mx-auto flex flex-col sm:flex-row justify-between bg-color-sky p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 p-4">
        <img
          src={newsletter}
          alt="Newsletter"
          className="w-16 h-16 sm:w-32 sm:h-32 object-contain"
        />
        <div className="text-white text-lg sm:text-2xl chakra-petch-bold mt-4 sm:mt-10">
          <p>For Latest Updates</p>
          <p>Subscribe To Our Newsletter</p>
        </div>
      </div>

      <div className="w-full sm:w-[400px] bg-color-sky mt-4 sm:mt-9 flex justify-center sm:ml-6 sm:h-20 rounded-xl">
  <div className="relative w-full text-white items-center rounded-full bg-[#69DFD3] flex">
  <input
      type="email"
      placeholder="Enter Your Email"
      value={email}
      onChange={handleInputChange}
      className="px-6 py-3 sm:py-5  outline-none bg-[#69DFD3] rounded-full text-white placeholder-white w-full"
    />
    <button
      onClick={handleSubscribe}
      className="absolute top-1/2 right-1 lg:right-5 transform -translate-y-1/2 bg-white text-bold text-color-sky px-6 py-3 rounded-full"
    >
      Subscribe
    </button>
  </div>
</div>


      {message && (
        <p
          className={`mt-4 text-sm ${
            message === "Thank you for subscribing!"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Newsletter;
