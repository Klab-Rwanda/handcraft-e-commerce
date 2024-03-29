import React from 'react'
import './Footer.css'
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <footer className="site-footer">
        <div className="footer-top_sec">
          <div className="footer-top_sec1 ">
            <h1>CATEGOLIES</h1>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Watchs</li>
            </ul>
          </div>
          <div className="footer-top_sec1 ">
            <h1>HELP</h1>
            <ul>
              <li>Track order</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-top_sec1 ">
            <h1>GET IN TOUCH</h1>
            <p>
              Any questions? Let us know <br />
              in store at 8th floor, 379St, Kigali,
              <br />
              or call us on (+1) 96 716 6879
            </p>
            <div classNmae="footer-icons">
              <AiFillFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
            </div>
          </div>
          <div className="footer-top_sec1 ">
            <h1>NEWS</h1>
            <p>
              <input type="text" placeholder="email@ex.co" />
              <br />
              <button id="footer-contact">
                <Link to="/Contact">CONTACT US</Link>
              </button>
            </p>
          </div>
        </div>
        <div className="footer-down_sec">
          <div className="footer-closing">
            copyright &copy; 2023 All right reserved | This website is made by
            K-lab
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer

