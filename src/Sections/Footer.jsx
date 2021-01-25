import React from "react";
import "../App.css";

function Footer() {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  return (
    <div className="footer-mainContainer">
      <p>Copyright ©{currentYear} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
