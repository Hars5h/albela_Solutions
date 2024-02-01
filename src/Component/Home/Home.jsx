import React from "react";
import "./Home.css";
import leftimg from "../../assets/leftimg.svg";
function Home() {
  return (
    <div className="home-wrapper">
      <div className="left-home-div">
        <p className="header-div1">Coding,</p>
        <p className="header-div">Testing &</p>
        <p className="header-div">Deploying</p>
        <p className="p-tag-front">
          We provide custom development and solutions for software and work on
          new technology
        </p>
        <div className="home-contact-button-div">
          <button type="submit" className="home-contact-button">Contact Us</button>
        </div>
      </div>
      <div className="rigth-home-div">
        <img src={leftimg} style={{ height: "75%" }} />
      </div>
    </div>
  );
}

export default Home;
