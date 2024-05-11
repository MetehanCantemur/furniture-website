import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import mobilyafoto from "../assets/mmm.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={mobilyafoto} alt="" />
        <div className="mainLink">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};
