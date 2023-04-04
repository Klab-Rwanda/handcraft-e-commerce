import { createContext, useEffect, useState } from "react";
import axios from "../Axios/axios";
import { useJwt } from "react-jwt";
import { set } from "react-hook-form";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));
  const [auth, setAuth] = useState({});
  const [loggedUser, setLoggedUser] = useState({});
  const [allUsers, setAllUsers] = useState({});

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders,setOrders]= useState([]);

  //  console.log(loggedUser.id);
  console.log(loggedUser);
  //  console.log(Products);
  const FetchUser = async () => {
    try {
      if (decodedToken) {
        const result = await axios(`users/${decodedToken?.id}`);
        // console.log(result);
        setLoggedUser(result.data.user);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const FetchAllUser = async () => {
    try {
      const data = await axios("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      setAllUsers(data.data.Users);
    } catch (error) {
      console.log(error.response);
    }

  };

    const FetchCarts = async()=>{
      try{
  const data = await axios("carts",{

  });
  console.log(data.data.carts);
  setCartItems(data.data.carts);

      }
      catch(error){
     console.log(error.response)
      }
    };

  const fetchProducts = async () => {
    try {
      const data = await axios ("/products", {});
      console.log(data.data.allProducts);
      setProducts(data.data.allProducts);
     

    } catch (err) {
      console.log(err.response);
    }
  };

  const fetchOrders = async () => {
    try {
      const data = await axios("/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data.data.orders);
      setOrders(data.data.orders);
    } catch (err) {
      console.log(err.response);
    }
  };









  console.log(decodedToken);

  useEffect(() => {
    FetchUser();
    FetchAllUser();
    fetchProducts();
    FetchCarts();
    fetchOrders();
  }, [decodedToken]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        loggedUser,
        cartItems,
        products,
        orders,
        allUsers,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
