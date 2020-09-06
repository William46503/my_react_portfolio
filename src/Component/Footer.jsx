import React from "react";
import "../App.css";

function Footer() {
  let currentTime = new Date().toLocaleDateString();
  const currentYear = currentTime.getFullYear;

  return (
    <div className="footer-mainContainer">
      <p>Copyright ©{currentYear} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
