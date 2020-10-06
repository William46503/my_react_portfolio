import React from "react";
// import Project_head_container from "../Component/Project-head-container";
// import Thumbnail from "./Thumbnail";

function Project() {
  return (
    <div className="grid-parent project-top-container">
      <div className="project-img">
        <h2>Graphic Design</h2>
        <img src="/images/GraphicDesign.jpg" alt="Picture of Graphic Design" />
      </div>
      <div className="project-img">
        <h2>Programming</h2>
        <img src="/images/Programming.jpg" alt="Picture of Programming" />
      </div>
      <div className="project-img">
        <h2>Video Editing/Other</h2>
        <img src="/images/MovieEdit.jpg" alt="Picture of MovieEdit" />
      </div>
    </div>
  );
}

export default Project;
