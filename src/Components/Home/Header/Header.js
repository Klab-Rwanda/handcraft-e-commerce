import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useState } from "react";

const Header = () => {
 
  const { loggedUser } = useContext(AuthContext);
  console.log('pauline');
  const navigate =useNavigate();
  





  return (
    <div className="welcome-home">
      <div className="container welcome">
        <h6>Welcome to made in RWANDA hand craft</h6>

        <div className="Nav-register">
          {localStorage.getItem("token") ? (
            <>
              <div className="after-login">
                <Link className="user" to=".">
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


                  <Link to='./Login'>signIn</Link>

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
  );
};

export default Header;