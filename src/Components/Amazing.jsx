import React from 'react'
import Navbar from '../Components2/Navbar'
import HeroSection from '../Components2/Hero'
import Services from "../Components2/Services"
import Services2 from "../Components2/Services2"
import ScaleAndReach from "../Components2/ScaleAndReach"
import PremiumServices from "../Components2/PremiumServices"
import Recommended from "../Components2/Recommended"
import Testimonials from "../Components2/Testimonials"
import PricingPackages from "../Components2/PricingPackages"
import Form from "../Components2/Form"
import Banner from "../Components2/Banner"
import Research from "../Components2/Research"
import Footer from "../Components2/Footer"


function Amazing() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Services2 />
      <ScaleAndReach/>
      <PremiumServices />
      <Recommended />
      <Testimonials />
      <PricingPackages />
      <Form />
      <Banner />
      <Research />
      {/* <Search /> */}
      <Footer />
    </div>
  )
}

export default Amazing