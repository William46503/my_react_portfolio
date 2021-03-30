import React from 'react';
import { useState } from 'react';
import ProjectDisplay from '../Component/projectDisplay';
import FilterButton from '../Component/FilterButton';
import projectData from '../asset/projectData';

function Project() {
	const tagList = [ 'All', ...projectData.map((item) => item.tag) ];
	const [ projectItemList, setProjectItemList ] = useState(projectData);

	function processFilter(tag) {
		if (tag === 'All') {
			setProjectItemList(projectData);
		} else {
			const filteredList = projectData.filter((item) => item.tag === tag);
			setProjectItemList(filteredList);
		}
	}

	return (
		<div className="project-mainContainer">
			<span id="project-section" />
			<FilterButton tagList={tagList} processFilter={processFilter} />
			<ProjectDisplay projectItemList={projectItemList} />
		</div>
	);
}

export default Project;
