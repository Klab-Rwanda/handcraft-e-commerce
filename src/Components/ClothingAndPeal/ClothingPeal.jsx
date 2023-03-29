import React, { useContext } from "react";
import "./Clothing.css";
import { MdArrowRightAlt } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import APEAL from "../../assets/appeal.jpg";
import ING from "../../assets/ingo.jpg";
import { AuthContext } from "../../Components/context/AuthProvider";
const ClothingPeal = () => {
  const { products } = useContext(AuthContext);
  console.log(products);

  return (
    <>
      <section id="clothing">
        <div className="container productheader">
          <h1>Clothing And Appeal</h1>
          <div className="moreProduct">
            <h2>More Product</h2>
            <span>
              <MdArrowRightAlt />
            </span>
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
          <div className="apealright">
              {products?.map((product) => {
                return (
                  <>
                    <div className="proCards">
                      <img src={product.productImage} alt="" />
                      <div className="overview">
                        <ul>
                          <li>
                            <FaCartPlus className="iconx" />
                          </li>
                          <li>
                            <AiOutlineHeart className="iconx" />
                          </li>
                          <li>
                            <HiOutlineArrowNarrowRight className="iconx" />
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
