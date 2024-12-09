import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const getNavBarStyle = () => {
    if (location.pathname === "/project") {
      return { backgroundColor: "#fbfbfb", color: "#191815" };
    } else if (location.pathname === "/") {
      return {
        backgroundColor: "#1d1814",
        color: "#fdd596",
      };
    } else {
      return { backgroundColor: "#fbfbfb", color: "#191815" };
    }
  };

  return (
    <div>
      <nav className="nav__nav" style={getNavBarStyle()}>
        <div className="brand__logo" id="brand">
          <Link to="/">
            <p>Karan Dharmaraj</p>
          </Link>
        </div>
        <ul className="navigators">

        <li className="nav__items">
            <Link to="/projects" className="nav__link">
              Project
            </Link>
          </li>
          <li className="nav__items">
            <Link to="/" className="nav__link">
              About
            </Link>
          </li>
          
          <li className="nav__items">
            <a
              href="https://github.com/karan151002"
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="nav__items">
            <a
              href="https://www.linkedin.com/in/karan-dharmaraj-74052b240/"
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
