import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../src/images/logo.png";
import layotImg from "../../src/images/layot.png";
import cursor from "../../src/images/cursor.png";
import cub from "../../src/images/cub.png";
import block from "../../src/images/block.png";
import "./layot.css";
const Layot = () => {
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
      <div className="layot">
        <p>Layout tip</p>
        <h3>
          Change the layout direction of a flexbox element from horizontal to
          vertical.
        </h3>
        <img className="la" src={layotImg} alt="" />
        <h4>
          Flexbox is a display setting found in the styles tab under <br />{" "}
          Layout Display Settings
        </h4>
        <div className="steps">
          <div className="step">
            <p>Step 1</p>
            <img src={cursor} alt="" />
            <h3>
              Click to select Column 1 which is the <br /> white box that this
              paragraph you're <br /> reading is currently inside of.
            </h3>
          </div>
          <div className="step">
            <p>Step 2</p>
            <img src={cub} alt="" />
            <h3>
              Now that Column 1 is selected, press the <br /> up arrow on your
              keyboard, selecting the <br /> parent element: Column Wrap 1
            </h3>
          </div>
          <div className="step">
            <p>Step 3</p>
            <img src={block} alt="" />
            <h3>
              With Column Wrap 1 selected, click the icon <br /> shown above in
              the Layout Flex Layout <br /> br styles panel.
            </h3>
          </div>
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

export default Layot;
