import React from 'react'
import ContactContent from '../../Components/ContactHeader,content/ContactContent'
import ContactHeder from '../../Components/ContactHeader,content/ContactHeder'
import Header from "../../Components/Home/Header/Header";
import Footer from '../../Components/Home/Footer/Footer';
import SubHeader from '../../Components/Home/SubHeader/SubHeader';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header/>
      <SubHeader />
      <ContactHeder />
      <ContactContent />
      <div className="contact-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Contact
