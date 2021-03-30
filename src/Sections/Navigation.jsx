import React from 'react';

function Navigation() {
	return (
		<div className="navigation">
			<div className="navigation-inner">
				<ul>
					<a href="#top-section" className="nav-item">
						<li>Welcome</li>
					</a>
					<a href="#about-section" className="nav-item">
						<li>About Me</li>
					</a>
					<a href="#project-section" className="nav-item">
						<li>My Works</li>
					</a>
					<a href="#contact-section" className="nav-item">
						<li>Contact</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
