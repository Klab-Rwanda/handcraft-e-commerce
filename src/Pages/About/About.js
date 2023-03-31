import React from 'react'
import AboutContent from '../../Components/AboutHeader,content/AboutContent'
import AboutHeader from '../../Components/AboutHeader,content/AboutHeader'
import Footer from '../../Components/Home/Footer/Footer'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-subheader">
        <SubHeader />
      </div>
      <AboutHeader />
      <AboutContent />
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}

export default About
