import React, { Component } from 'react';

function TimeLine() {
	return (
		<div className="timeline-container">
			<div className="timeline" />
			<div className="timeline-square-container">
				<div className="timeline-square" />
				<div className="timeline-square" />
				<div className="timeline-square" />
				<div className="timeline-square" />
				<div className="timeline-square" />
				<div className="timeline-square" />
			</div>
			<div className="content-container">
				<div className="content">
					<h3 className="content-year">PRESENT</h3>
				</div>
				<div className="content">
					<h3 className="content-year">2019</h3>
				</div>
				<div className="content">
					<h3 className="content-year">2017</h3>
				</div>
				<div className="content">
					<h3 className="content-year">2016</h3>
				</div>
				<div className="content">
					<h3 className="content-year">2016</h3>
				</div>
				<div className="content">
					<h3 className="content-year">2013</h3>
				</div>
			</div>
		</div>
	);
}

export default TimeLine;
