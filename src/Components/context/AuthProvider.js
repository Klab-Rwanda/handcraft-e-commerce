import { createContext, useEffect, useState } from "react";
import axios from "../Axios/axios";
import { useJwt } from "react-jwt";
import { set } from "react-hook-form";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));
  const [auth, setAuth] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
 const [products, setProducts] = useState([]);
 const [cartItems, setCartItems] = useState([]);

 console.log(loggedUser.id);
//  console.log(Products);
  const FetchUser = async () => {
    try {


      if (decodedToken) {
        const result = await axios(`users/getOne/${decodedToken?.id}`);
        setLoggedUser(result.data.data);
       
      }
    } 
    
    
    
    catch (err) {
      console.log(err.response);
    }
  };


  const FetchCarts = async()=>{
    try{
const data = await axios("cart/read",{

});
console.log(data);
setCartItems(data.data.data)

    }
    catch(error){
   console.log(error.response)
    }
  };

  
   const fetchProducts = async () => {
    try {
      const data = await axios("/products/read", {
       
      });
     console.log(data);
      setProducts(data.data.data)
    }
    catch(err){
      console.log(err.response);
    }
    };
  console.log(decodedToken);

  useEffect(() => {
    FetchUser();
    fetchProducts();
    FetchCarts();
  }, [decodedToken]);

  return (
    <AuthContext.Provider
      value={{ auth, loggedUser, products, cartItems, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
