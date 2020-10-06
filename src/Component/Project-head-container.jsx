import React from "react";
import bgimg1 from "../asset/skulls.png";

function Project_head_container() {
  return (
    // <div className="">
    <div classname=" main-head-container grid-parent">
      <div className="project-img img1">
        <h2>Test</h2>
        <img src={bgimg1} alt="" />
        <h3>wwww</h3>
      </div>
      <div className="project-img img2">
        <h2>Test</h2>
      </div>
      <div className="project-img img3">
        <h2>Test</h2>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Project_head_container;
