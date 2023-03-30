import React, { useState } from "react";
import "./CartProduct.css";
import wishlistproduct from "../Wishlist/product7.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import PaymentModal from "../PaymentModal/PaymentModal";
import { GrClose } from "react-icons/gr";
const CartProduct = () => {
  const [modal, setModal] = useState(true);


  const handleModal = () => {
    console.log("Modal clicked close");
    setModal(!modal);
  };

  return (
    <div className="Cart-allcontent">
      <div className="Cart-container">
        <h1 className="Cart-title">
          <b>Shopping Cart</b>
        </h1>
        <br />

        <table className="Cart-table">
          <tr className="ptr">
            <th>Image</th> <th>Product Name</th>
            <th>Quantity</th> <th>Price</th>
            <th>Actions</th>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>
              {" "}
              <input type="number" />{" "}
            </td>{" "}
            <td>5,000 frw</td>
            <td>
              <button id="actionbutoon">Remove</button>
              <AiOutlineHeart id="actionbutoon2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>
              <input type="number" />
            </td>
            <td>5,000 frw</td>
            <td>
              <button id="actionbutoon">Remove</button>
              <AiOutlineHeart id="actionbutoon2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>
              {" "}
              <input type="number" />{" "}
            </td>{" "}
            <td>5,000 frw</td>
            <td>
              <button id="actionbutoon">Remove</button>
              <AiOutlineHeart id="actionbutoon2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>
              {" "}
              <input type="number" />{" "}
            </td>{" "}
            <td>5,000 frw</td>
            <td>
              <button id="actionbutoon">Remove</button>
              <AiOutlineHeart id="actionbutoon2" />
            </td>
          </tr>
        </table>
      </div>

      <div className="direction-form">
        <div className="direction-background">
          <div className="direction-content">
            <div className="Total-price">
              <p>
                <b>Total price:</b>
              </p>
              <p>50,000 Frw</p>
            </div>
            <div className="discount">
              <p>
                <b>Discount:</b>
              </p>
              <p id="discount-detail"> -500 Frw</p>
            </div>
            <div className="last-total">
              <p>
                <b>Total:</b>
              </p>
              <p>48,000 Frw</p>
            </div>
            <br />
          </div>
        </div>
        <div className="direction-button">
          <button id="purchase-commentbuton" onClick={handleModal}>
            <b>Make Purchase</b>
          </button>
          <button id="continue-commentbuton">
            <b>Continue Shopping</b>
          </button>
        </div>
        {modal && (
          <div className="modal-container">
            <PaymentModal />
            <button onClick={handleModal} className="closeModal">
              <GrClose id="payment-close" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProduct;
