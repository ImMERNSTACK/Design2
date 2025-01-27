import React from 'react'
import Header from '../Components2/Navbar'
import Carousel from '../Common/Carousel'
import AchievementsSection from '../Home/AchivmentSection'
import Progress from '../Progressbar/PregressBar'
import Footer from '../Components2/Footer'
import Slider from '../Common/Slider'
import Contents from '../Common/Contents'
import Prestegious from '../Common/Prestegious'
import ClientsTestimonials from '../Common/ClientsTestimonials'
import MaintainLab from '../Common/MaintainLab'
import AmazingSpecialist from '../Common/AmazingSpecialist'


function About() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <Slider/>
        <Contents/>
        <Progress/>
        <AchievementsSection/>
        <MaintainLab/>
        <AmazingSpecialist/>
        <ClientsTestimonials/> 
        <Prestegious/>
        <Footer/>
    </div>
  )
}

export default About