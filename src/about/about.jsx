import React from "react";
import headerLogo from "../../src/images/logo.png";
import parets from "../../src/images/parets.png";
import reset from "../../src/images/reset.png";
import { NavLink } from "react-router-dom";
import "./about.css";
// import Menu from "../menu/menu";
const About = () => {
  return (
    <>
      {/* <Menu /> */}
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
      <div className="parents">
        <div className="parents-text">
          <div className="parents-text-text">
            <h3>What is a Class?</h3>
            <p>
              A Class is more than just the name of an element, it is a title
              you create that <br /> can be added to other elements that you'd
              like to be styled the same way. <br /> Notice that if you select
              this paragraph, and change it, it will effect the <br /> paragraph
              below as well, since they have the same Class.
            </p>
            <h4>
              A Class is more than just the name <br /> of an element, it is a
              title you create that <br /> can be added to other elements that
              you'd like to be <br /> styled the same way. Notice that if you
              select this
            </h4>
          </div>
          <div className="parents-text-img">
            <img src={parets} alt="" />
            <p>Double click an image to replace it.</p>
          </div>
        </div>
        <div className="parents-text-two">
          <div className="parents-text-img">
            <img src={reset} alt="" />
            <p>You can also double click an image to change its size.</p>
          </div>
          <div className="parents-text-text">
            <h3>Parents, and text alignment</h3>
            <p>
              By now you may have noticed that web design, <br /> simply put, is
              a series of boxes inside of <br /> boxes with text and images
              inside of them. <br /> Try selecting the parent element of
            </p>
            <h4>
              By now you may have noticed that web design, <br /> simply put, is
              a series of boxes inside of <br /> boxes with text and images
              inside of them. <br /> Try selecting the parent element of
            </h4>
          </div>
        </div>
      </div>
      <footer className="footer">
        <header className="header-foot">
          <div className="header-logo-foot">
            <img className="rasm" src={headerLogo} alt="" />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>
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

export default About;
