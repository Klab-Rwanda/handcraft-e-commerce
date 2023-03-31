import React, { useState } from "react";
import "./CartProduct.css";
import wishlistproduct from "../Wishlist/product7.jpg";
import locationpc from "../CartProduct/1mtn.jpeg";
import locationpc2 from "../CartProduct/1airtel.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import PaymentModal from "../PaymentModal/PaymentModal";
import { GrClose } from "react-icons/gr";
import axios from "../../Components/Axios/axios";
import { useContext } from "react";
import { AuthContext } from "../../Components/context/AuthProvider";
import { Notify } from "notiflix/build/notiflix-notify-aio";


const CartProduct = () => {
  const [modal, setModal] = useState(false);
  const { cartItems, products, loggedUser } = useContext(AuthContext);

  const ids = cartItems?.map((item) => Number(item.productId));
  //  console.log(ids);
  const cartsId = cartItems?.map((i) => Number(i.customerId));

  const productInCard = products?.filter((item) => ids.includes(item.id));

  console.log(productInCard, cartItems);

  const handleModal = () => {
    console.log("Modal clicked close");
    setModal(!modal);
  };

  const handleAccept = async (id) => {
    const data = { numberOfItems: 1 };
    try {
      const response = await axios.get(`cart/read/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

 const handleDelete = async (id) => {
  console.log(id)
   try {
     await axios.delete(`cart/removeProduct/${id}`, {
       headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
     });
       Notify.success("Removed from Cart successfully");
     window.location.reload(true);
   } catch (error) {
     console.log(error.response);
   }
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

          {localStorage.getItem("token") &&
            cartsId.includes(loggedUser.id) &&
            productInCard?.map((product) => {
              return (
                <tr>
                  <td>
                    <img
                      src={product.productImage}
                      alt="pimage"
                      className="img-min"
                    ></img>
                  </td>
                  <td>
                    <p>{product.productName}</p>
                  </td>
                  <td>
                    {" "}
                    <input type="number" />{" "}
                  </td>{" "}
                  <td>{product.productPrice}</td>
                  <td>
                    <button
                      id="actionbutoon"
                      onClick={() => {
                       
                          
                          handleDelete(cartItems?.find(item=>  { 
                            return item.productId==Number(product.id)})?.id

                          )
                       
                      }}
                    >
                      Remove
                    </button>
                    <AiOutlineHeart id="actionbutoon2" />
                  </td>
                </tr>
              );
            })}
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
          <div className="payment-methodline">
            <img src={locationpc} alt="pimage" className="mtnairtel"></img>
            <img src={locationpc2} alt="pimage" className="irtel"></img>
          </div>
        </div>
        {modal && (
          <div className="modal-container">
            <PaymentModal productInCart={productInCard} />
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
