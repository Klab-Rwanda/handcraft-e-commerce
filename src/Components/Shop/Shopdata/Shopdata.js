import React from "react";
import "./Shopdata.css";
import ProductDisplay from "../../OneProduct/ProductDisplay";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "../../Axios/axios";
import { Notify } from "notiflix";
import { Link } from "react-router-dom";


const Shopdata = () => {
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
      {/* <div className="shopdata"> */}
<div className="apealright">
            {products?.map((product) => {
              return (
                <>
                  <div className="proCards">
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
                          <Link to="/Buy">
                            {" "}
                            <HiOutlineArrowNarrowRight className="iconx" />{" "}
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













        {/* {products?.map((product) => {
          return (
            <>
              <div className="shopdata-container1">
                <ProductDisplay
                  imageUrl={product.image}
                  name={product.productName}
                  rating={5}
                  price={product.productPrice}
                />
              </div>
            </>
          );
        })} */}
      {/* </div> */}
    </>
  );
};

export default Shopdata;
