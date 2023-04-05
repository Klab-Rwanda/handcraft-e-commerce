import React, { useContext } from "react";
import "./Clothing.css";
import { MdArrowRightAlt } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

import { AuthContext } from "../../Components/context/AuthProvider";
import { Link } from "react-router-dom";
import APEAL from "../../assets/appeal.jpg";
import ING from "../../assets/ingo.jpg";
import axios from "../../Components/Axios/axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
// import { useEffect } from "react";
// import { useState } from "react";

const ClothingPeal = (props) => {
  const { products } = useContext(AuthContext);
 


  console.log(products);

 

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
      <section id="clothing">
        <div className="container productheader">
          <h1>Clothing And Appeal</h1>
          <div className="moreProduct">
            <Link to="/Shop">
              <h2>More Product</h2>
              <span>
                <MdArrowRightAlt />
              </span>
            </Link>
          </div>
        </div>

        <div className="container appealContainer">
          <div className="apealLeft">
            <img src={APEAL} alt="" />
            <div className="appealOverlay"></div>
            <div className="appealDetails">
              <p>
                <span>Weekended</span> sale
              </p>
              <h3>NEW ARRIVALS</h3>
              <small>collection</small>

              <button className="btn bapeal">
                Shop Now <MdArrowRightAlt className="btnappeal" />
              </button>
            </div>
          </div>
          <div className="apealright" >
            {products?.map((product) => {
              return (
                <>
                  <div
                    className="proCards">
                    <img src={product.image} alt="" />
                    <div className="overview">
                      <ul>
                        <li>
                          <FaCartPlus
                            className="iconx"
                            onClick={() => {
                              handleCart(product._id);
                            }}
                          />
                        </li>
                        {/* <li>
                          <AiOutlineHeart className="iconx" />
                        </li> */}
                        <li>
                          <Link  id="read"to={`${product._id}`}>
                            <HiOutlineArrowNarrowRight className="iconx" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="proDetails">
                      <h3>{product.productName}</h3>
                      <div className="reviws">
                        <div className="rates">
                          <AiFillStar className="rate" />
                          <AiFillStar className="rate" />
                          <AiFillStar className="rate" />
                          <AiFillStar className="rate" />
                        </div>
                        <p>(1 reviews)</p>
                      </div>
                      <small>{product.productPrice} Frw</small>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClothingPeal;
