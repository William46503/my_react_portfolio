import React from "react";
import projectbackgroundimg from "../asset/projectbackgroundimg.png";
// import Thumbnail from "./Thumbnail";

function Project() {
  return (
    <div className="project-mainContainer">
      <img
        className="myworkimg"
        src={projectbackgroundimg}
        alt="Mywork-image"
      />
    </div>
  );
}

export default Project;
