import React, { useContext } from 'react'
import './VendorSidebar.css'
import {AiFillDashboard} from 'react-icons/ai'
import {MdOutlineManageAccounts, MdProductionQuantityLimits} from 'react-icons/md'
import {BsBorderStyle} from 'react-icons/bs'
import {FcSalesPerformance} from 'react-icons/fc' 
import {TbTransitionBottom} from 'react-icons/tb'
import {AiFillSetting} from 'react-icons/ai'
import { GrProductHunt } from 'react-icons/gr'
import { RiLogoutBoxFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import robot from '../VendorSidebar/robot.jpg';
import { AuthContext } from "../../context/AuthProvider";



const VendorSidebar = () => {

  const { loggedUser } = useContext(AuthContext);
  console.log("pauline");
  // const navigate = useNavigate();



  return (
    <div className="side">
      <div className="side-profile">
        {localStorage.getItem("token") ? (
          <>
            <img
              src={loggedUser.profile}
              alt="profile icon"
              className="img-mic"
            />
            <div className="side-profile-text">
              <p>hello!!</p>
              <h1 className="side-profile-text-h1">{loggedUser?.firstName}</h1>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="side-menu">
        <Link to="./" className="side-menu-single">
          <AiFillDashboard className="D-icon" />
          <h1 className="side-menu-text-h1">Dashboard</h1>
        </Link>

        <Link to="./Product" className="side-menu-single">
          <MdProductionQuantityLimits className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Products</h1>
        </Link>

        <Link to="./Order" className="side-menu-single">
          <FcSalesPerformance className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Orders</h1>
        </Link>

        <Link to="./Sales" className="side-menu-single">
          <BsBorderStyle className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Sales</h1>
        </Link>

        {/* <Link to="./Transition" className="side-menu-single">
          <TbTransitionBottom className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Transitions</h1>
        </Link> */}

        <Link to="./Setting" className="side-menu-single">
          <AiFillSetting className="D-icon" id="icons" />
          <h1 className="side-menu-text-h1">Settings</h1>
        </Link>
        {/* </div> */}

        <Link to="" className="side-menu-single">
          <RiLogoutBoxFill className="D-icon" id="icons" />
          <h1
            className="side-menu-text-h1"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/Login";
            }}
          >
            Logout
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default VendorSidebar;