import React from 'react';
import Footer from './Footer';
// import Project_head_container from "../Component/Project-head-container";
// import Thumbnail from "./Thumbnail";

function Project() {
	return (
		<div className="project-wrapper">
			<div className="category-item">
				<a href="#">
					<h2>Graphic Design</h2>
					<picture>
						<img
							className="category-image ci1"
							src="/images/GraphicDesign.jpg"
							alt="GraphicDesignPicture"
						/>
					</picture>
				</a>
			</div>
			<div className="category-item">
				<a href="#">
					<h2>Programming</h2>
					<picture>
						<img className="category-image ci2" src="/images/Programming.jpg" alt="ProgrammingPicture" />
					</picture>
				</a>
			</div>
			<div className="category-item">
				<a href="#">
					<h2>Video Editing</h2>
					<picture>
						<img className="category-image ci3" src="/images/MovieEdit.jpg" alt="MovieEditingPicture" />
					</picture>
				</a>
			</div>
		</div>
	);
}

export default Project;
