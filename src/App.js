import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminUsers from "./Pages/AdminUsers/AdminUsers";
import AdminSideBar from "./Components/Admin/AdminSidebar/AdminSideBar";
import VendorSidebar from "./Components/Vendor/VendorSidebar/VendorSidebar";
import Product from "./Pages/VendorDashboard/Product";
import Adminallproducts from "./Pages/AdminProducts/Adminallproducts";
import Adminsellerdetail from "./Pages/AdminsellerDetail/Adminsellerdetail";
import Adminsales from "./Pages/AdminSales/Adminsales";
import AdminLogout from "./Pages/Adminlogout/AdminLogout";
import VendorDashboard from "./Components/Vendor/vendorDashboard/vendorDashboard";
import Sales from "./Pages/VendorDashboard/Sales";
import Order from "./Pages/VendorDashboard/Order";
import Transition from "./Pages/VendorDashboard/Transition";
import Setting from "./Pages/VendorDashboard/Setting";
import Shop from "./Pages/Shop/Shop";
import Vender from "./Pages/Vender/Vender";

import Login from './Components/Forms/login/Login';
import Register from './Components/Forms/register/Register';
import ProtectAuthentication from './Components/context/ProtectAuthentication'

import Cart from './Pages/Cart/Cart';
import Buy from './Pages/Buy/Buy'
import {useState} from "react";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Singlevender from './Pages/SingleVender/Singlevender';
import Payment from './Pages/Payment/Payment';
import SingleProductview from './Pages/SingleProductview/SingleProductview';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import CartPage from './Pages/CartPage/CartPage';

import OneVender from "./Pages/OneVender/OneVender";
import VendorManageContent from "./Components/Admin/vendorManageContent/VendorManageContent";
import AdminVendor from "./Pages/AdminUsers/AdminVendor";


const App = () => {
  const [sider, setSider] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Vender" element={<Vender />} />
          <Route path="OneVender" element={<OneVender />} />

          <Route
            path="Login"
            element={
              <ProtectAuthentication>
                <Login />
              </ProtectAuthentication>
            }
          />
          <Route
            path="Signup"
            element={
              <ProtectAuthentication>
                <Register />
              </ProtectAuthentication>
            }
          />
          {/* <Route path="Buy" element={<Buy />} /> */}
          <Route path="/:productId" element={<Buy />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="WishlistPage" element={<WishlistPage />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="Singlevender" element={<Singlevender />} />
          <Route path="SingleProductview" element={<SingleProductview />} />
          <Route index element={<Home />} />
          <Route />
          <Route
            path="AdminDashboard"
            element={
              <div className="admin-container">
                <AdminSideBar sider={sider} setSider={setSider} />
                <Outlet />
              </div>
            }
          >
            <Route
              index
              element={<AdminDashboard sider={sider} setSider={setSider} />}
            />
            <Route path="AdminUsers" element={<AdminUsers />} />
            <Route path="Adminallproducts" element={<Adminallproducts />} />
            <Route path="Adminsellerdetail" element={<Adminsellerdetail />} />
            <Route path="Adminsales" element={<Adminsales />} />
            <Route path="AdminLogout" element={<AdminLogout />} />
            <Route path="AdminVendor" element={<AdminVendor/>} />
          </Route>

          <Route
            path="vendorDashboard"
            element={
              <div className="dash">
                <VendorSidebar />
                {/* <AdminSideBar /> */}
                <Outlet />
              </div>
            }
          >
            <Route index element={<VendorDashboard />} />
            <Route path="Product" element={<Product />} />
            <Route path="Sales" element={<Sales />} />
            <Route path="Order" element={<Order />} />
            <Route path="Transition" element={<Transition />} />
            <Route path="Setting" element={<Setting />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
