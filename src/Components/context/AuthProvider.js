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
  const [allVendors ,setAllVendor] = useState([]);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders,setOrders]= useState([]);
  const [product, setProduct] = useState(null);


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
      // console.log(err.response);
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
      setAllUsers(data.data.users);
    } catch (error) {
      console.log(error.response);
    }

  };

 const FetchAllVendor = async () => {
   try {
     const data = await axios("/users/all/vendors", {
       headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
     });
     console.log(data.data.vendors);
     setAllVendor(data.data.vendors);
   } catch (error) {
     console.log(error.response);
   }
 };







    const FetchCarts = async()=>{
      try{
  const data = await axios("carts",{

  });
  // console.log(data.data.carts);
  setCartItems(data.data.carts);

      }
      catch(error){
    //  console.log(error.response)
      }
    };

  const fetchProducts = async () => {
    try {
      const data = await axios ("/products", {});
      // console.log(data);
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
      // console.log(data.data.orders);
      setOrders(data.data.orders);
    } catch (err) {
      console.log(err.response);
    }
  };

  //  const FetchSingleProduct = async (_id) => {
  //    try {
  //        const result = await axios(`/product/${id}`);
  //        console.log(result);
  //        setProduct(result.data.product);
  //      }
      
     
  //    catch (err) {
  //      console.log(err.response);
  //    }
  //  };








  console.log(decodedToken);

  useEffect(() => {
    FetchUser();
    FetchAllUser();
    fetchProducts();
    // FetchSingleProduct();
    FetchCarts();
    FetchAllVendor();
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
        product,
        allVendors,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
