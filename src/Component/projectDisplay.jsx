import React from 'react';

function ProjectDisplay({ projectItemList }) {
	return (
		<div className="projectList-Container">
			<h1>This is itemList</h1>
			{projectItemList.map((element) => {
				return (
					<div>
						<h1>{element.tag}</h1>
						<p>{element.title}</p>
					</div>
				);
			})}
		</div>
	);
}

export default ProjectDisplay;
