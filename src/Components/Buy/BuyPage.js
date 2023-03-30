import React from 'react'
import {AiFillStar} from 'react-icons/ai';
import {BsTruck}  from 'react-icons/bs'
import {CgToolbox} from 'react-icons/cg'
import {GiWallet} from 'react-icons/gi'
import './BuyPage.css'

const BuyPage = () => {
  return (
    <>
    <div className="buy-sect1">
      <div className='buy-sect1-part1'>
        <h1> Other view of Product</h1>
        <img src={'/Home/jordan.jpg'} alt="jordan" /> 
        <img src={'/Home/jordan.jpg'} alt="jordan" /> 
        <img src={'/Home/jordan.jpg'} alt="jordan" />
      </div>
      <div className='buy-sect1-part2'>
        <div className="sect1-part2-img">
          <img src={'/Home/jordan.jpg'} alt="jordan" />
        </div>
        <div className="sect1-part2-text">
          <h1> Product Name </h1>
          <h2> Price of the product </h2>
          <h2><AiFillStar className="buy-rate" />
          <AiFillStar className="buy-rate" />
          <AiFillStar className="buy-rate" />
          <AiFillStar className="buy-rate" />
          <AiFillStar className="buy-rate" /> (1 review)</h2>
          <div className="buy-sect1-part2-text-btn1">
           <div> <p>SIZE</p> </div>
           <div> <button> XLarge</button> </div>
           <div> <button className='buy-color'> Large</button> </div>
           <div> <button className='buy-color'> Medium</button> </div>
           <div> <button className='buy-color'> Small</button> </div>
          </div>
          <div className="buy-sect1-part2-text-btn2">
          <button> Add to Cart</button>
            <button> Quality</button> 
          </div>
          <div className="buy-sect1-part2-text-btn3">
            <button> Buy Now</button>
            </div>
        </div>

        </div>
        <div className="buy-sect1-part3">
          <div className='icon-view-sect1'>  <div><BsTruck className='buy-icons'/></div> <div><b>Free Shipping & Returns</b><br/>
                           For all order over $99</div></div>
          <div className='icon-view-sect1'> <div> <CgToolbox className='buy-icons'/> </div> <div><b>Secure Payment</b><br/>
                           We ensure secure Payment</div></div>
          <div className='icon-view-sect1'> <div><GiWallet className='buy-icons'/></div> <div><b>Money back grant</b><br/>
                           Any back in 30 days</div></div>
          </div>
      </div> 
    </>
  )
}

export default BuyPage