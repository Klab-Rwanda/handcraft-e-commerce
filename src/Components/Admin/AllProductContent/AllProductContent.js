import React from 'react'
import "./AllProductContent.css";
import { AuthContext } from "../../context/AuthProvider";
import  { useContext } from "react";





const AllProductContent = () => {

  const { products } = useContext(AuthContext);
  console.log(products);


  return (
    <div>
      <div className="product-boxx">
        <table className="table">
          <tr>
            
            <th>P.Image</th>
            <th>p.Name </th>
            <th>vendor</th>
            <th>Price</th>
            <th>Description</th>
          </tr>

{
  products?.map(product =>{
    return (
      <tr>
        <td>
          <img
            src={product.image}
            alt="pimage"
            className="img-min"
          ></img>
        </td>
        <td>
          <p>{product.productName}</p>
        </td>
        <td>John</td> <td>{product.productPrice}</td>{" "}
        <td>{product.productDescription}</td>{" "}
      </tr>
    );
  })
}

        </table>
      </div>
      <div className="next-cont">
        <ul>
          <li className="next1">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <p>Next</p>
      </div>
    </div>
  );
}

export default AllProductContent
