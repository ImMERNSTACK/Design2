import React, { useState, useEffect } from "react";
import HeaderMain from "./Header";

const Header2 = () => {
 
  const [showHeader, setShowHeader] = useState(false);
  
  const [lastScrollY, setLastScrollY] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      // If the user is scrolling down, hide the header
      console.log(window.scrollY)
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      }else if(window.scrollY<100){
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      // Update the last scroll position
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header style={{zIndex:100}}
      className={`fixed top-0 left-0  w-full transition-transform duration-300 ease-in-out ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full z-50"
      } text-white `}
    >
      <HeaderMain show="yes"/>
    </header>
  );
};

export default Header2;
