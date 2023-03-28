import React from 'react'
import './Singlevender.css'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import CategoliesNav from '../../Components/CategoliesNav/CategoliesNav'


const Singlevender = () => {
  return (
      <>
      <Header />
      <SubHeader />
      <div className='Singlevender-body'>
      <div> <CategoliesNav/> </div>
       <div> right side</div>
       </div>
       <Footer/>
       </>
    
  )
}

export default Singlevender