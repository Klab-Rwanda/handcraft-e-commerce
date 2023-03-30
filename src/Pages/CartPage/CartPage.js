import React from 'react'
import CartProduct from '../../Components/CartProduct/CartProduct'
import Footer from '../../Components/Home/Footer/Footer';
import SubHeader from '../../Components/Home/SubHeader/SubHeader';
import Header from "../../Components/Home/Header/Header";
import "./CartPage.css";
const CartPage = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <CartProduct />
      <div className="cart-footer">
        <Footer />
      </div>
    </div>
  );
}

export default CartPage
