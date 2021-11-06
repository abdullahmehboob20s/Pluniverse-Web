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
        <a href="#" className="fs-20px uppercase white weight-8 lh-1">
          $TRT
        </a>
        <a href="#" className="fs-20px uppercase white weight-8 lh-1">
          MARKEtplace
        </a>
        <a href="#" className="fs-20px uppercase white weight-8 lh-1">
          whitepaper
        </a>
      </div>

      <div className="navbar-right">
        <button className="navbar-btn fs-16px white weight-7 lh-1 pointer">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
