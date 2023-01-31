import React, { useState, useRef } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  Link,
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const Header = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  return (
    <div className="App">
      <div>
        <div id="header" className={navbar ? "sticky" : ""}>
          <div className="desktopHeader">
            <div>
              <a href="/" className="logo">
                <span>Fuzail Akhtar</span>
                <Logo className="headerLogo" />
              </a>
            </div>
            <ul className="desktopMenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/employees">Our Employee</Link>
              </li>
            </ul>
            {/* <main>
              <Outlet />
            </main> */}
          </div>
          <div className="mobileHeader">
            <div>
              <a href="/" className="logo">
                <span>Fuzail Akhtar</span>
                <Logo className="headerLogo" />
              </a>
            </div>
            <ul className="mobileMenu">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div ref={sectionRefs[2]}>{props.children}</div>
      </div>
    </div>
  );
};

export default Header;
