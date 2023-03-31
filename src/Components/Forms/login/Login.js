import "./login.css";
import { useRef,useState,useEffect,useContext }  from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
// import AuthContext from "../../components/context/AuthProvider";

import SubHeader from "../../Home/SubHeader/SubHeader";
import Header from "../../Home/Header/Header";
import Footer from "../../Home/Footer/Footer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import axios from "../../Axios/axios";
const LOGIN_URL = "https://madeinapi.onrender.com/api/zeus/users/login";


const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const {setAuth} = useContext(AuthContext);

 const {loggedUser}= useContext(AuthContext);
 console.log(loggedUser);


 const onSubmit = async (data) =>{
  
try{
  const response = await axios.post("users/login",data); 
  const accessToken = response?.data?.token;
  localStorage.setItem('token',accessToken);
   window.location.reload(true);
  console.log(response);
   
  
    }
catch (err){
console.log(err.response);
}
  


 }



  return (
    <>
      <Header />
      <SubHeader />

      <div className="loginn">
        <div className="bor">
          <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
              <label>Email</label>
              <input
                className="loginInput"
                type="text"
                {...register("email")}
               
                placeholder="Enter your email..."
              />
              <span>{errors?.email?.message}</span>
              <label>Password</label>
              <input
                className="loginInput"
                type="password"
                {...register("password")}
                placeholder="Enter your password..."
              />
              <span>{errors?.password?.message}</span>
              <button className="loginButton">Login</button>
              <p>
                <Link className="link" to="/AdminDashboard">
                  Don't have Account Register Here !
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div id='login-footer' >
      <Footer />
      </div>
    </>
  );
}
