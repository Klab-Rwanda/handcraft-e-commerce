import "./register.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios/axios";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Footer from "../../Home/Footer/Footer";
import SubHeader from "../../Home/SubHeader/SubHeader";
import Header from "../../Home/Header/Header";
import { Notify } from "notiflix";

const REGISTER_URL = "/users/register";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
  phoneNumber: yup.string().required(),
  shopName: yup.string().required(),
  shopDescription: yup.string().required(),
  shopAddress: yup.string().required(),
  idNumber: yup.string().required(),
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
  const [changeRole, setChangeRole] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(REGISTER_URL, data, {});

      const accessToken = response?.data?.token;
      localStorage.setItem("token", accessToken);
         Notify.success("registered successfully");

      window.location.reload(true);
      setSuccess(true);
      navigate("/login");
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <>
      <Header />
      <SubHeader />
      <div className="customer-register">
        <div className="register">
          <div className="red">
            <div className="registerr">
              <span className="registerTitle">Register</span>
              <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input
                  className="registerInput"
                  type="text"
                  {...register("firstName")}
                  autoComplete="off"
                  placeholder="Enter your username..."
                />
                <span>{errors?.firstname?.message}</span>

                <label>Last Name</label>
                <input
                  className="registerInput"
                  type="text"
                  {...register("lastName")}
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
                <label>Password</label>
                <input
                  className="registerInput"
                  type="password"
                  {...register("password")}
                  id="password"
                  placeholder="Enter your password..."
                />
                <span>{errors?.password?.message}</span>

                <label>Register as </label>

                <select
                  className="registerInput"
                  {...register("roleId")}
                  onChange={(e) => {
                    if (e.target.value == "3") {
                      setChangeRole(false);
                    } else {
                      setChangeRole(true);
                    }
                  }}
                >
                  <option value="3"> Customer </option>
                  <option value="2"> vendor</option>
                </select>

                {changeRole && (
                  <>
                    <label>Phone</label>
                    <input
                      className="registerInput"
                      type="text"
                      id="phone"
                      {...register("phoneNumber")}
                      placeholder="Enter your phone..."
                    />

                    <label>Shop name </label>
                    <input
                      className="registerInput"
                      type="text"
                      id="shopname"
                      {...register("shopName")}
                      placeholder="Enter your shop name ..."
                    />

                    <label>Shop Description </label>
                    <textarea
                      className="registerInput"
                      type="text"
                      id="description"
                      {...register("shopDescription")}
                      placeholder="Enter your shop Description ..."
                    />
                    <label>SHOP Adress</label>
                    <input
                      className="registerInput"
                      type="text"
                      {...register("shopAddress")}
                      placeholder="Enter your Id ..."
                    />

                    <label>ID</label>
                    <input
                      className="registerInput"
                      type="number"
                      id="id"
                      {...register("idNumber")}
                      placeholder="Enter your Id ..."
                    />

                    <span>{errors?.email?.message}</span>
                  </>
                )}

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
      <div id="register-footer">
        <Footer />
      </div>
    </>
  );
}
