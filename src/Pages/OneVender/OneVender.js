import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import Shopdata from '../../Components/Shop/Shopdata/Shopdata'
import CategoliesNav from '../../Components/CategoliesNav/CategoliesNav'
import './Onevenderbody.css'
import Hotitems from '../../Components/Shop/Hotitems/Hotitems'


const OneVender = () => {
  return (
    <div><Header/>
    <SubHeader/>
    <div className="OneVender-container">
     <div className='OneVender-cat1'>
      <CategoliesNav/>
      <Hotitems/>
      </div> 
      <div className='Onevender-cat2'>
        <h1 className='single-vender-name'> SINGLE VENDERE</h1>
        <Shopdata/>
        </div>
    </div>
    <Footer/></div>
  )
}

export default OneVender