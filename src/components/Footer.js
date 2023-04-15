import React from "react";
import footerLogo from "../img/logoWhite.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <img src={footerLogo} alt="footer-logo" />
        <p>&#xA9; 2022 Kasa. by Lamya</p>
      </div>
    </footer>
  );
};

export default Footer;
