import React from 'react'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Footer from '../../Components/Home/Footer/Footer'
import BuyPage from '../../Components/Buy/BuyPage'

const Buy = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <div className="buy-container">
      <BuyPage/>
        </div> 
      <Footer/>
       </div>
  )
}

export default Buy