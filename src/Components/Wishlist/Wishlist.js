import React from 'react'
import "./Wishlist.css";
import wishlistproduct from "../Wishlist/product7.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
const Wishlist = () => {
  return (
    <div>
      <div className="wishlist-container">
        <h1 className="wish-title">
          <b> Wishlist</b>
        </h1>
        <br />

        <table className="Wishlist-table">
          <tr className="ptr">
            <th>Image</th> <th>Product Name</th>
            <th>Unit Price</th> <th>Stock Status</th>
            <th>Actions</th>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>5,000 frw</td> <td>In Stock</td>
            <td>
              <button id="actionbutoon">ADD TO CART</button>
              <RiDeleteBinLine id="actionbutoon2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>5,000 frw</td> <td>In Stock</td>
            <td>
              <button id="actionbutoon">ADD TO CART</button>
              <RiDeleteBinLine id="actionbutoon2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>5,000 frw</td> <td>In Stock</td>
            <td>
              <button id="actionbutoon">ADD TO CART</button>
              <RiDeleteBinLine id="actionbutoon2" />
            </td>
          </tr>

          <tr>
            <td>
              <img src={wishlistproduct} alt="pimage" className="img-min"></img>
            </td>
            <td>
              <p>T-shirt</p>
            </td>
            <td>5,000 frw</td> <td>In Stock</td>
            <td>
              <button id="actionbutoon">ADD TO CART</button>
              <RiDeleteBinLine id="actionbutoon2" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Wishlist
