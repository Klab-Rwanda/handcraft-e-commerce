import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import axios from "../../Axios/axios";

import { Link } from "react-router-dom";
import './VendorOrder.css'
import { AuthContext } from '../../context/AuthProvider';

const VendorOrder = () => {
  const [modal, setModal] = useState(false);  
  const {orders} = useContext(AuthContext); 
console.log(orders);









  return (
    <>
      <div className="main-dashboard-order">
        <div className="topbar-item" id="order-top">
          <div className="dash-left">
            <h1 className="dash-head">Order Info</h1>
            <p className="dash-para">Everything here!</p>
          </div>
          <div className="dash-search">
            <input
              className="topnav-input"
              type="text"
              placeholder="Search everything here"
            />
            <FaSearch className="sear" />
          </div>
          <div className="dash-right">
            <Link to="/">
              <p>Go to home</p>
            </Link>
          </div>
        </div>

        {/* <div> */}

        <div className="prod-div">
          <h1 className="ti">All Purchases</h1>

          <table className="product-table">
            <tr className="ptr">
              <th>Date</th> <th>Customer</th>
              <th>Purchases</th>
              <th>Amount</th>
              <th> Phone</th>
              <th>Delivered</th>
            
            </tr>

           {orders?.map((order) =>{
            return(
            <>
              <tr>
                <td>
                  <p>{order.date}</p>
                </td>
                <td
                  onClick={() => {
                    setModal(true);
                  }}
                >
                 {order.customer.firstName}
                </td>{" "}
                <td>productOrd</td> <td>{order.totalAmount}</td> <td>{order.phoneNumber}</td> <td>{order.delivered}</td>
                <td>:</td>
              </tr>
            </>
            );
           })
           }

          </table>
        </div>
        {/* </div> */}

        {/* <div className="bg" style={{ display: !modal ? "none" : "flex" }}>
          <div className="order-popup">
            <div className="topper-order">
              <div>
                <p>Mon 06 jan 2023 08:30 AM</p>
              </div>
              <div className="order-right">
                <div className="statuss">
                  <select>
                    <option>Change status</option>
                    <option>Pending</option>
                    <option>Delivered</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="save">
                  <p>Save</p>
                </div>
                <div className="print">Print</div>
              </div>
            </div>
            <div className="main-order">
              <div className="top-main-order">
                <div className="ord">
                  <h1>Customer Info</h1>
                  <div id="bo1">
                    <div>
                      <p>Full name: </p>
                      <p>E-mail : </p>
                      <p>Phone : </p> <p>Adress:</p>
                    </div>
                    <div>
                      <p>KUNDA Pauline</p>
                      <p>kpopo@gmail.Com</p>
                      <p>0786904567</p>
                      <p>Huye</p>
                    </div>
                  </div>
                </div>
                <div className="ord" id="bo2">
                  <h1>Order Info</h1>
                  <div id="bo1">
                    <div>
                      <p>Product Name </p>
                      <p>Product price </p>
                      <p>Product Qty </p>
                      <p>Category </p>
                      <p>delivery </p>
                      <p> pay method </p>
                      <p> Status </p>
                    </div>
                    <div>
                      <p>: shirt </p>
                      <p> : $300 </p>
                      <p> : 2 </p>
                      <p> : women </p>
                      <p> : yes </p>
                      <p> : paypal </p>
                      <p> : Pending </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Buttom-main-order">
                <div className="ord" id="bo4">
                  <h1>Payment Info</h1>
                  <div id="bo1">
                    <div>
                      <p>Method </p>
                      <p>Owner Name </p>
                      <p>Phone </p>
                      <p>Status </p>
                    </div>
                    <div>
                      <p> : MTN</p>
                      <p> : BestShoes</p>
                      <p> :0783465723</p>
                      <p>:received </p>
                    </div>
                  </div>
                </div>
                <div className="ord" id="bo3">
                  <h1>Delivery Info</h1>
                  <div id="bo1">
                    <div>
                      <p>Adress </p>
                      <p> Road </p>
                      <p> Block </p>
                    </div>
                    <div>
                      <p>: huye-mukoni </p>
                      <p> : SH 605 H </p>
                      <p> : 2 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default VendorOrder