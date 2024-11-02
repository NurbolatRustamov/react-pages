import React from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";
import headerLogo from "../../src/images/logo.png";
import panel from "../../src/images/panel.png";
import face from "../../src/images/facebook.png";
import stripe from "../../src/images/stripe.png";
import apple from "../../src/images/apple.png";
import fitbit from "../../src/images/fit-bit.png";
import buzz from "../../src/images/buzz.png";
import sega from "../../src/images/sega.png";
import box from "../../src/images/box.png";
import google from "../../src/images/google.png";

const Menu = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img className="rasm" src={headerLogo} alt="" />
        </div>
        <ul>
          <NavLink to={"/"}>
            <li>
              <a href="#">Home</a>
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>
              <a href="#">About</a>
            </li>
          </NavLink>
          <NavLink to={"/layot"}>
            <li>
              <a href="#">Layot</a>
            </li>
          </NavLink>
          <NavLink to={"/additional"}>
            <li>
              <a href="#">Additional</a>
            </li>
          </NavLink>
        </ul>
      </header>
      <div className="text">
        <div className="text-text">
          <h1>Double click text to change it</h1>
          <p>
            To style this paragraph , select this paragraph,{" "}
            <br className="br" /> then edit its styles in the <br /> Style tabon
            the right side of the Designer.
          </p>
          <button>Edit this link in the settings tab in the right panel</button>
        </div>
        <div className="text-img">
          <img src={panel} alt="" />
          <p>
            In the navigator tab located in the right panel you can <br /> see
            all your elements in one place.
          </p>
        </div>
      </div>
      <div className="social">
        <div className="face">
          <img src={face} alt="" />
        </div>
        <div className="stripe">
          <img src={stripe} alt="" />
        </div>
        <div className="apple">
          <img src={apple} alt="" />
        </div>
        <div className="fitbit">
          <img src={fitbit} alt="" />
        </div>
        <div className="buzz">
          <img src={buzz} alt="" />
        </div>
        <div className="sega">
          <img src={sega} alt="" />
        </div>
        <div className="box">
          <img src={box} alt="" />
        </div>
        <div className="google">
          <img src={google} alt="" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-last">
          <p>
            © 2017, Webflow, Inc. All Rights Reserved. Brand logos for
            demonstration purposes only.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Menu;
