import React, { useEffect, useState } from "react";
import "../Styles/Nav.css";
import NetflixLogo from "../assets/Netflix.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={NetflixLogo} alt="" />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
