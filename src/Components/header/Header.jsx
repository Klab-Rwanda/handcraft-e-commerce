import "./header.css";
import { AiOutlineBars } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { IoPricetagsOutline } from "react-icons/io5";
import MainHeader from "./MainHeader";
import {Link} from 'react-router-dom'



const Header = ({menu}) => {
  return (
    <>
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
      <MainHeader />
    </>
  );
};

export default Header;
