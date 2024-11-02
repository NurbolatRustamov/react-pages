import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../src/images/logo.png";
import margin from "../../src/images/margin.png";
import add from "../../src/images/add.png";
import res from "../../src/images/res.png";
import states from "../../src/images/states.png";
import "./additional.css";
const Additional = () => {
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
      <div className="tips">
        <p>Additional tips</p>

        <div className="tip-box">
          <div className="tip">
            <img src={margin} alt="" />
            <h3>Margin / Padding</h3>
            <h4>
              The above screenshot shows the <br /> controls for margin and
              padding. <br />
              Simply put, this is the space you add <br /> inside and/or outside
              of an element.
            </h4>
          </div>
          <div className="tip">
            <img src={add} alt="" />
            <h3>Add Elements</h3>
            <h4>
              The navigator tab gives you a clear <br /> breakdown of elements
              and their <br />
              parents, as well as where they are <br /> located within the page.
            </h4>
          </div>

          <div className="tip">
            <img src={res} alt="" />
            <h3>Responsive design</h3>
            <h4>
              Clicking these breakpoints icons will <br /> change the size of
              the viewport to <br /> mimic common device sizes. Styles <br />{" "}
              that are changed when viewing the <br /> website at other
              breakpoints will <br /> effect sizes smaller as well.
            </h4>
          </div>
          <div className="tip">
            <img src={states} alt="" />
            <h3>States</h3>
            <h4>
              On the top right of the selector <br /> section, there is a states
              dropdown. <br /> Here you can edit element styles <br /> different
              states. The most common <br /> use for this is adding hover
              effects to <br />
              elements such as buttons.
            </h4>
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

export default Additional;
