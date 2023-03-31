import React from 'react'
import Footer from '../../Components/Home/Footer/Footer'
import Header from '../../Components/Home/Header/Header'
import SubHeader from '../../Components/Home/SubHeader/SubHeader'
import Wishlist from '../../Components/Wishlist/Wishlist'
import "./WishlistPage.css";

const WishlistPage = () => {
  return (
    <div>
      <div className="wishlistheading">
        <Header />
        <SubHeader />
      </div>
      <Wishlist />
      <div className="wishlist-footer">
        <Footer />
      </div>
    </div>
  );
}

export default WishlistPage
