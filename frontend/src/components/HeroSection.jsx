import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection bg-gradient-to-r from-orange-100 to-green-200" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner text-black">
          <div className="largeBox">
            <h1 className="title">Good</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food !</h1>
                <h1 className="title dishes_title">Yum😋...</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">😋...</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
