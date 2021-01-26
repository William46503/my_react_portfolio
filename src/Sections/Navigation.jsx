import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navigation() {
	return (
		<div className="navigation">
			<div className="navigation-inner">
				<ul>
					<Link to="/" className="nav-item">
						<li>Welcome</li>
					</Link>
					<Link to="/about" className="nav-item">
						<li>About Me</li>
					</Link>
					<Link to="/project" className="nav-item">
						<li>My Works</li>
					</Link>
					<Link to="/contact" className="nav-item">
						<li>Contact</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
