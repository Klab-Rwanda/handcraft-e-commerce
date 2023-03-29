import React from 'react'
import {AiFillStar} from 'react-icons/ai';
import './BuyPage.css'

const BuyPage = () => {
  return (
    <>
    <div className="buy-sect1">
      <div className='buy-sect1-part1'>
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
          <AiFillStar className="buy-rate" /></h2>
          <div className="buy-sect1-part2-text-btn1">
            <p>SIZE</p>
            <button> XLarge</button>
            <button> Large</button>
            <button> Medium</button>
            <button> Small</button> 
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
          <div> icons free shipping</div>
          <div> icons free shipping</div>
          <div> icons free shipping</div>
          </div>
      </div> 
    </>
  )
}

export default BuyPage