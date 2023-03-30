import React from "react";
import "./nav.css";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";
import {Link} from 'react-router-dom';
import Header from "../header/Header";
import { AuthContext } from "../../Components/context/AuthProvider";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";


const Nav = () => {
 
  const { loggedUser } = useContext(AuthContext);
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
                      <Link to="./Login">signIn</Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link to="/Signup">register</Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="container search">
          <div className="icon_header">
            <img src="Madein.PNG" alt="our log" />
          </div>
          <div className="input_search">
            <select name="allCategories" id="">
              <option value="">All Category</option>
              <option value="">Shoes</option>
              <option value="">funiture</option>
              <option value="">technology</option>
              <option value="">t shirt</option>
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
                  <Link to="/Wishlist">
                    <AiOutlineHeart />
                  </Link>
                </span>
                <small>Wishlist</small>
              </div>
              <div className="cart">
                <span>
                  <Link to="/Cart">
                    <HiShoppingCart />
                  </Link>
                </span>
                <small>Cart</small>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Header />
    </>
  );
};

export default Nav;
