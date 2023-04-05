import React, { useContext } from "react";

import { AiFillStar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./BuyPage.css";
import { AuthContext } from "../../Components/context/AuthProvider";
  import { useParams } from "react-router";
import axios from "../Axios/axios";
import { Notify } from "notiflix";




const BuyPage = () => {
  const { products } = useContext(AuthContext);

 const { productId} = useParams();
   const single = products.find((product) => product._id === productId);
   const { image, productDescription,productName, productPrice } = single;


   const handleCart = async (id) => {
    const data = { numberOfItems: 1 };
    try {
      const response = await axios.post(`/carts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Notify.success("Added to Cart successfully");
      window.location.reload(true);
      console.log(response);
    } catch (error) {
      if (error.response.status === 401) {
        Notify.failure("Please Login first before adding to Cart");
      }
    }
  };


  return (
    <>
      <div className="buy-sect1">
        <div className="buy-sect1-part1">
          <h1> Other view of Product</h1>
          <img src={image} alt={image} />
          <img src={image} alt={image} />
          <img src={image} alt={image} />
        </div>
        <div className="buy-sect1-part2">
          <div className="sect1-part2-img">
            <img src={image} alt={image} />
          </div>
          <div className="sect1-part2-text">
            <h1>{productName}</h1>
            <h2> {productPrice}Frw </h2>
            <h2>
              <AiFillStar className="buy-rate" />
              <AiFillStar className="buy-rate" />
              <AiFillStar className="buy-rate" />
              <AiFillStar className="buy-rate" />
              <AiFillStar className="buy-rate" />
            </h2>
            <div className="buy-sect1-part2-text-btn1">
              <div>
                {" "}
                <p>SIZE</p>{" "}
              </div>
              <div>
                {" "}
                <button> XLarge</button>{" "}
              </div>
              <div>
                {" "}
                <button className="buy-color"> Large</button>{" "}
              </div>
              <div>
                {" "}
                <button className="buy-color"> Medium</button>{" "}
              </div>
              <div>
                {" "}
                <button className="buy-color"> Small</button>{" "}
              </div>
            </div>
            <div className="buy-details">
              <h3>Details</h3>
              <p> {productDescription}</p>
            </div>
            <div className="buy-sect1-part2-text-btn2">
              {/* {products?.map((product)=>{
                <> */}
                <button
              //   onClick={() => {
              //     handleCart(product._id);
              //   }}
              >
                Add to Cart
              </button>
                {/* </> */}
              {/* })} */}
              <button> Quality</button>
            </div>
            <div className="buy-sect1-part2-text-btn3">
              <button> Buy Now</button>
            </div>
          </div>
        </div>
        <div className="buy-sect1-part3">
          <div className="icon-view-sect1">
            {" "}
            <div>
              <BsTruck className="buy-icons" />
            </div>{" "}
            <div>
              <b>Free Shipping & Returns</b>
              <br />
              For all order over $99
            </div>
          </div>
          <div className="icon-view-sect1">
            {" "}
            <div>
              {" "}
              <CgToolbox className="buy-icons" />{" "}
            </div>{" "}
            <div>
              <b>Secure Payment</b>
              <br />
              We ensure secure Payment
            </div>
          </div>
          <div className="icon-view-sect1">
            {" "}
            <div>
              <GiWallet className="buy-icons" />
            </div>{" "}
            <div>
              <b>Money back grant</b>
              <br />
              Any back in 30 days
            </div>
          </div>
          <div className="buy-details">
            <div className="vender-data">
              <h2>Vender</h2>
              <div className="vender-data-img">
                <div>
                  <img src={"/Home/jordan.jpg"} alt="jordan" />
                </div>
                <div>
                  <h3> Vender Name </h3>
                  <h3> Vender Rate </h3>
                  <h3> Vender Location </h3>
                </div>
              </div>
              <button className="Vender-button">
                <Link to="/OneVender">visit Shop</Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
