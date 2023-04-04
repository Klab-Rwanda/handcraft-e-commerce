import React , {useContext}from 'react'
import './SubHeader.css'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiInjustice} from 'react-icons/gi'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdOutlineDiscount} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {HiShoppingCart} from 'react-icons/hi'
import {IoPricetagsOutline} from 'react-icons/io5'
import {AiOutlineBars} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import { AuthContext } from '../../context/AuthProvider'






const SubHeader = () => {
  const {menu } = useContext(AuthContext);
  return (
    <>
      <div className="nav-page">
        <div className="container search">
          <div className="icon_header">
            <img src="Madein.PNG" alt="our log" />
          </div>
          <div className="input_search">
            <select>
              <option value="option1"> categories </option>
              <option value="option2">FASHION</option>
              <option value="option3">Made in rwanda</option>
              <option value="option3">Sport</option>
              <option value="option3">Electronics</option>
              <option value="option3">Home and garden</option>
              <option value="option3">Health and beauty</option>
              <option value="option3">Toys and hobbies</option>
              <option value="option3">Automotive</option>
              <option value="option3">Baby and kids</option>
              <option value="option3">Books and stationery</option>
              <option value="option3">Food and drinks</option>
              <option value="option3">Pets</option>
              <option value="option3">Travel</option>
              <option value="option3">Other</option>
            </select>
            <input type="text" placeholder="Search In" />
            <span className="searchIcon">
              <BiSearch />
            </span>
          </div>
          <div className="cartWishlist">
            <div className="contact">
              <p>live chat or :</p>
              <small>+250 785 161 508</small>
            </div>
            <div className="cwcontainer">
              <div className="cart">
                <span>
                  <Link to="/WishlistPage">
                    <AiOutlineHeart />
                  </Link>
                </span>
                <small>Wishlist</small>
              </div>
              <div className="cart">
                <span>
                  <Link to="/CartPage">
                    <HiShoppingCart />
                  </Link>
                </span>
                <small>Cart</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={menu ? "response" : "navBar"}>
        <div className="container subNav">
          <div className={menu ? "off-screen" : "categories"}>
            <span>
              <AiOutlineBars />
            </span>
            <div className={menu ? "off-screen" : "pdetails"}>
              <p>
              <select className="header-selector">
              <option value="option1"> Broweser Categories </option>
              <option value="option2">FASHION</option>
              <option value="option3">Made in rwanda</option>
              <option value="option3">Sport</option>
              <option value="option3">Electronics</option>
              <option value="option3">Home and garden</option>
              <option value="option3">Health and beauty</option>
              <option value="option3">Toys and hobbies</option>
              <option value="option3">Automotive</option>
              <option value="option3">Baby and kids</option>
              <option value="option3">Books and stationery</option>
              <option value="option3">Food and drinks</option>
              <option value="option3">Pets</option>
              <option value="option3">Travel</option>
              <option value="option3">Other</option>
            </select></p>
            </div>
          </div>
          <div className={menu ? "" : "links"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Shop">Shop</Link>
              </li>
              <li>
                <Link to="/Vender">Vendor</Link>
              </li>
              <li>
                <Link to="/About">About us</Link>
              </li>
            </ul>
          </div>
          <div className={menu ? "off-screen" : "trackOrders"}>
            <div className="track">
              <span>
                <GoLocation />
              </span>
              <p>Track Order</p>
            </div>
            <div className="track">
              <span>
                <IoPricetagsOutline />
              </span>
              <p>Hot deals</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHeader