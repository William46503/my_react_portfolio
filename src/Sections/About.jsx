import React from 'react';
import '../Styles/Constant.scss';
import { Header, Icon } from 'semantic-ui-react';

function About(props) {
	return (
		<div className="about-mainContainer">
			<h1 className="about-title">About Me</h1>
			<div className="about-subContainer">
				<section id="bio" className="about-sub-section">
					<h2 type="title">
						<span className="inner-text">Who Am I</span>
					</h2>
					<hr />
					<p type="sub" className="description">
						Redux, Storybook, Apollo (GraphQL), Styled Components, NextJS, Testing-Library, Jest, HTML, CSS,
						and
					</p>
				</section>
				<section id="programming" className="about-sub-section">
					<h2 type="title">
						<span className="inner-text">Who Am I</span>
					</h2>
					<hr />
					<p type="sub" className="description">
						Redux, Storybook, Apollo (GraphQL), Styled Components, NextJS, Testing-Library, Jest, HTML, CSS,
						and
					</p>
				</section>
			</div>
		</div>
	);
}

export default About;
