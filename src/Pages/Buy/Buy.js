import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import BuyPage from '../../Components/Buy/BuyPage'
import './Buy.css'

const Buy = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <h1 className='buy-page-header'> Product  Details </h1>
      <div className="buy-container">
      <BuyPage/>
        </div> 
      <Footer/>
       </div>
  )
}

export default Buy