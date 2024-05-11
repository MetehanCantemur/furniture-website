import React from "react";
import BannerImage from "../assets/mobilya.jpg";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage}) ` }}
    >
      <div className="order"></div>

      <div className="açıklama">
        <h1>DESIGN YOUR HOME</h1>
        <h2>CONTACT US</h2>
      </div>
      <div className="but">
        <button className="but1">BİZE ULAŞIN</button>
        <button>DETAYLI BİLGİ</button>
      </div>
    </div>
  );
};
