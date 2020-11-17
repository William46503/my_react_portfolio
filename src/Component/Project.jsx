import React from "react";
import Footer from "./Footer";
// import Project_head_container from "../Component/Project-head-container";
// import Thumbnail from "./Thumbnail";

function Project() {
  return (
    <div className="project-main-maintainer">
      <div className="project-top-container">
        <a className="category-item" href="#">
          <picture>
            <img src="images\GraphicDesign.jpg" alt="GraphicDesignPicture"/>
            
          </picture>
          <h2 className="category-title ">Graphic Design</h2>
        </a>
        <a className="category-item" href="#">
        <picture>
            <img src="images\Programming.jpg" alt="ProgrammingPicture"/>
          </picture>
          <h2 className="category-title">Programming</h2>
        </a>
        <a  className="category-item" href="#">
        <picture>
            <img src="images\MovieEdit.jpg" alt="MovieEditPicture"/>
            
          </picture>
          {/* <h2 className="category-title">Video Content</h2> */}
          </a>
      </div>
      <section>

      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Project;
