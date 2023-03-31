import React from 'react'
import "./PaymentModal.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from '../Axios/axios';




const schema = yup.object().shape({
  phoneNumber: yup.string().required(),

});

const PaymentModal = ({productInCart}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const totalAmount = productInCart?.reduce(
    (acc, current) => acc + current.productPrice,
    0
  );
  console.log(totalAmount)

   const onSubmit = async (data) => {
    //  try {
       console.log(data);
       const response = await axios.post(`payment/request`,data, {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
       });
  console.log(response);
       
    //  } catch (err) {
    //    console.log(err.response);
    //  }
   };





  return (
    <div className="paymentcont1">
      <div className="payment-comments">
        <b>
          <p>Payment details</p>
        </b>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <label htmlFor="Email">Email address</label> <br />
        <input
          type="text"
          id="payment-Subject"
          placeholder="Your Email Address"
        /> */}
          <br /> <br />
          <div className="user-iconparagraph">
            <select name="" id="Payment-method">
              <option value="option1">Payment Method</option>
              <option value="option1">MTN (Mobile money)</option>
              <option value="option2">Airtell(Airtell money)</option>
              <option value="option2">Equity Bank</option>
              <option value="option2">Bank of kigali</option>
              <option value="option2">KCB Bank</option>
            </select>
          </div>{" "}
          <br />
          <label htmlFor="Email">phone number</label> <br />
          <input
            type="number"
            id="payment-Subject"
            {...register("phoneNumber")}
            placeholder="250...."
          />
          <br />
          <div className="exp-cvv">
            {/* <div className="date-box">
            <br />
            <label htmlFor="Email">Expiry Date</label> <br />
            <input type="date" id="Date-frm" placeholder="#" />
          </div> */}
            <br />
            {/* <div className="cvv-box">
            <br />
            <label htmlFor="Email">cvv</label> <br />
            <input type="text" id="cvv-frm" placeholder="xxx" />
          </div> */}
          </div>
          <br />
          <div className="promo-code">
            <input type="checkbox" name="select" />{" "}
            <b>
              <p>I've promo code</p>
            </b>
            <br />
          </div>
          <br />
          {/* <div className="last-paycontent">
            <p>
              Subtotal <br />
              Platform Free
            </p>
            <p>
              <b>
                $96 <br /> $4{" "}
              </b>
            </p>
          </div> */}
          <div className="total">
            <p>Total Amount</p>
            <p>
              <b>{totalAmount}</b>
            </p>
          </div>
          <br />
          <button id="payment-commentbuton">
            {" "}
            <b>Make payment</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal
