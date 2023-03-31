import "./register.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Footer from "../../Home/Footer/Footer";
import SubHeader from "../../Home/SubHeader/SubHeader";
import Header from "../../Home/Header/Header";

const REGISTER_URL = "https://madeinapi.onrender.com/api/zeus/users/signUp";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


   const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
  const userData= new FormData();
  userData.append('firstName',data.firstname);
  userData.append("lastName", data .lastname);
  userData.append("email", data.email);
  userData.append("profile", data.profile[0]);
  userData.append("password", data.password);

  console.log(userData.get("password"));
    try {
      const response = await axios.post(REGISTER_URL, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
       
         const accessToken = response?.data?.token;
         localStorage.setItem("token", accessToken);
         window.location.reload(true);
        // setSuccess(true);
        // navigate("/login");
    } catch (err) {
      console.log(err.response)
    }
  };

  return (
    <>

     <Header/>
    <SubHeader/>
      <div className="customer-register">
        <div className="register">
          <div className="red" >
            <div className="registerr">
              <span className="registerTitle">Register</span>
              <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                  className="registerInput"
                  type="text"
                  {...register("firstname")}
                  autoComplete="off"
                  placeholder="Enter your username..."
                />
                <span>{errors?.firstname?.message}</span>

                <label>Last Name</label>
                <input
                  className="registerInput"
                  type="text"
                  {...register("lastname")}
                  placeholder="Enter your username..."
                />
                <span>{errors?.lastname?.message}</span>
                <label>Email</label>
                <input
                  className="registerInput"
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email..."
                />
                <span>{errors?.email?.message}</span>

                <label>Add Profile </label>
                <input
                  className="registerInput"
                  type="file"
                  {...register("profile")}
                />

                <label>Password</label>
                <input
                  className="registerInput"
                  type="password"
                  {...register("password")}
                  id="password"
                  placeholder="Enter your password..."
                />
                <span>{errors?.password?.message}</span>

               

                <button className="registerButton">Register </button>

                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <span>Login</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
         
        </div>
      </div>
      <Footer/>
    </>
  );
}
