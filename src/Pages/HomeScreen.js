import React from "react";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import "../Styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner/>

      {/* Row */}
    </div>
  );
};

export default HomeScreen;
