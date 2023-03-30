import React from "react";
import Nav from "../Components/NavBars/Nav";
import ClothingPeal from "../Components/ClothingAndPeal/ClothingPeal";
import Footer from "../Components/Home/Footer/Footer";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Nav/>
      <ClothingPeal/>
      <div className="home-footer">
      <Footer/>
      </div>
    </>
  );
};

export default Home;
