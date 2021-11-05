import React from "react";
import "./Navbar.css";
import navbarLogo from "assets/images/navbar-logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <a href="#" className="navbar-logo">
          <img src={navbarLogo} alt="" />
        </a>
        <a href="#" className="navbar-link">
          $TRT
        </a>
        <a href="#" className="navbar-link">
          MARKEtplace
        </a>
        <a href="#" className="navbar-link">
          whitepaper
        </a>
      </div>

      <div className="navbar-right">
        <button className="navbar-btn">Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
