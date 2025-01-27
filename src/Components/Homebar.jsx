import React from 'react';
import Services from '../Home/Services';
import Section2 from '../Home/Section2';
import AchievementsSection from '../Home/AchivmentSection';
import AppointmentForm from '../Home/AppointmentForm';
import Navbar from  '../Common/Navbar/Navbar'
import FAQ from  '../Home/FAQ'
import NewsLetter from '../Home/NewsLetter'
import CaseStudy from '../Home/CaseStudy';
import HeroSection from '../HeroPage/HeroSection'
import Research from '../Home/Research';
import Footer from "../Components2/Footer"
import Progress from '../Progressbar/PregressBar';
import Cards3 from '../Home/Cards3';
import Packages from '../Home/Packages';
//  import Card2 from '../Home/Card2'


const Homebar = () => {
  return (<>
    <Navbar/>
    <HeroSection/>
    <Services/>
    {/* <Card2/> */}
    <Progress/>
    <Packages/>
    <Cards3/>
    <AchievementsSection/>
    <CaseStudy/>
    <AppointmentForm/>
    <Section2/>    
    <FAQ/>
    <Research/>
    
    <Footer/>
   
    </>
  );
};

export default Homebar;
