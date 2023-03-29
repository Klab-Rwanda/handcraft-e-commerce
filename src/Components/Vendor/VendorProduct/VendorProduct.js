import React from "react";
import "./VendorProduct.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import product from "../VendorProduct/product1.png";
import { useForm } from "react-hook-form";
import axios from "../../Axios/axios";

const VendorProduct = () => {
  const [modal, setModal] = useState(false);

const { register, handleSubmit, reset } = useForm();
const onSubmit = async (data) => {
  const formData = new FormData();
  formData.append("productName", data.productName);
  formData.append("productDescription", data.productDescription);
  formData.append("productCategory", data.productCategory);
  formData.append("productImage", data.productImage[0]);
  formData.append("productPrice", data.productPrice);
  formData.append("productTag", data.productTag);
   formData.append("productDiscount", data.productDiscount);

    console.log(data);

  



  try {
  const response = await axios.post(
      "products/create",
      formData,
      {
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
      
    );
    console.log(response);
    
   
    // alert("post successfully");
    // reset();
  } catch (error) {
    console.log(error.response);
  }
};









  return (
    <div className="product-content">
      <div className="topbar-item" id="pro-top">
        <div className="dash-left">
          <h1 className="dash-head">Product info</h1>
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
          <p>visit your store</p>
        </div>
      </div>
      <div className="main-product">
        <div className="product-head-nav">
          <div className="product-left">
            <div className="product-leftcard">
              <select>
                <option>Categories</option>
                <option>women-skirt</option>
                <option>men-shirt</option>
                <option>women-shirt</option>
                <option>women-dress</option>
              </select>
            </div>
            <div className="product-leftcard">
              <select>
                <option> Status</option>
                <option>men-shirt</option>
                <option>women-shirt</option>
                <option>women-dress</option>
              </select>
            </div>
            <div className="product-leftcard">
              <select>
                <option>Price</option>
                <option></option>
                <option>men-shirt</option>
                <option>women-shirt</option>
                <option>women-dress</option>
              </select>
            </div>
          </div>
          <div className="product-rightcard">
            <button
              type="button"
              className="new-product"
              id="new-product"
              onClick={() => {
                setModal(true);
              }}
            >
              {" "}
              New Product{" "}
            </button>
          </div>
        </div>
        <div className="prod-div">
          <h1 className="ti">My Products</h1>

          <table className="product-table">
            <tr className="ptr">
              <th>Image</th>
              <th>PName</th> <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Sold</th>
              <th>Earings</th> <th>Actions</th>
            </tr>

            <tr>
              <td>
                <img src={product} alt="pimage" className="img-min"></img>
              </td>
              <td>
                <p>skirt</p>
              </td>
              <td>Women</td> <td>$200</td> <td>20</td> <td>10</td>
              <td>2000</td>
              <td>:</td>
            </tr>

            <tr>
              <td>
                <img src={product} alt="pimage" className="img-min"></img>
              </td>
              <td>
                <p>skirt</p>
              </td>
              <td>Women</td> <td>$200</td> <td>20</td> <td>10</td>
              <td>2000</td>
              <td>:</td>
            </tr>

            <tr>
              <td>
                <img src={product} alt="pimage" className="img-min"></img>
              </td>
              <td>
                <p>skirt</p>
              </td>
              <td>Women</td> <td>$200</td> <td>20</td> <td>10</td>
              <td>2000</td>
              <td>:</td>
            </tr>

            <tr>
              <td>
                <img src={product} alt="pimage" className="img-min"></img>
              </td>
              <td>
                <p>skirt</p>
              </td>
              <td>Women</td> <td>$200</td> <td>20</td> <td>10</td>
              <td>2000</td>
              <td>:</td>
            </tr>
          </table>
        </div>

        <div className="popup-bg" style={{ display: !modal ? "none" : "flex" }}>
          <div className="popup">
            '
            <form className="forms" onSubmit={handleSubmit(onSubmit)}>
              <table>
                <tr className="tr">
                  <td>
                    <h1>Product Name</h1>
                    <input
                      type="text"
                      {...register("productName")}
                      placeholder="type name here"
                    />
                  </td>

                  <td>
                    <h1>Upload Photo</h1>
                    <input type="file" {...register("productImage")} />
                  </td>
                </tr>
                <tr className="tr">
                  <td>
                    <h1>Product Description</h1>
                    <textarea
                      type="text"
                      {...register("productDescription")}
                      placeholder="type name here"
                    />
                  </td>
                  <td>
                    <h1>Product Tag</h1>
                    <input
                      type="text"
                      {...register("productTag")}
                      placeholder="type name here"
                    />
                  </td>
                </tr>

                <tr className="tr">
                  <td>
                    <h1>Category</h1>
                    <input
                      type="text"
                      {...register("productCategory")}
                      placeholder="type name here"
                    />
                  </td>
                  <td>
                    {/* <h1>Brand</h1>
              <input type= 'text'name="name" placeholder='type name here'/> */}
                    <h1>Price Discount</h1>
                    <input
                      type="text"
                      {...register("productDiscount")}
                      placeholder="type name here"
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td>
                    <h1>Product price</h1>
                    <input
                      type="text"
                      {...register("productPrice")}
                      placeholder="type name here"
                    />
                  </td>
                </tr>
                <button>CREATE</button>
              </table>
              {/* <div className="buttom">
                <button
                  type="button"
                  name="upadate"
                  className="update"
                  id="product-button"
                >
                  Update
                </button>
                <button
                  type="button"
                  name="delete"
                  className="delete"
                  id="product-button"
                >
                  {" "}
                  Delete
                </button>
                <button
                  type="button"
                  name="cancel"
                  className="cancel"
                  id="product-button"
                >
                  {" "}
                  Cancel
                </button> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProduct;
