import React from "react";
import "./nav.css";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";
import {Link} from 'react-router-dom';
import Header from "../header/Header";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import {AuthContext} from "../context/AuthProvider";




const Nav = () => {
  const [menu, setMenu] = useState(false);

  const { loggedUser} = useContext(AuthContext);
  console.log( loggedUser )
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };



  return (
    <>
      <nav className="nav-page">
        <div className="welcome-home">
          <div className="container welcome">
            <h6>Welcome to made in RWANDA hand craft</h6>
            <div className="Nav-register">
              {localStorage.getItem("token") ? (
                <>
                  <div className="after-login">
                    <Link className="user" to="">
                      <span
                        onClick={() => {
                          localStorage.removeItem("token");
                          window.location.href = "/Login";
                        }}
                      >
                        LOGOUT
                      </span>
                    </Link>

                    <Link className="user" to="">
                      <span className="user">{loggedUser?.firstName}</span>
                    </Link>

                    <span>
                      <img
                        src={loggedUser.profile}
                        className="img-mic"
                        alt="miprofile"
                      />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <ul>
                    <li>
                      <span>
                        <BiUserCircle id="user-logo" />
                      </span>
                      <Link to="./Login">SignIn</Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link to="/Signup">Register</Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="container search">
          <div className="icon_header">
            <BiMenu id="Home-menuicon" onClick={()=> setMenu(!menu)}/>
            <img src="Madein.PNG" alt="our log" />
          </div>
          <div className="input_search">
          <select>
              <option value="option1"> All categories </option>
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
              <p>Live chat or :</p>
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
      </nav>
      <Header menu={menu} />
    </>
  );
};

export default Nav;
