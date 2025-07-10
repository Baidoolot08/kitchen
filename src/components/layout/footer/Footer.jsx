import React from "react";
import logo from "../../../assets/images/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
