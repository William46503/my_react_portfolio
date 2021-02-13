import React from 'react';

function Footer() {
	const currentTime = new Date();
	const currentYear = currentTime.getFullYear();

	return (
		<div className="footer-mainContainer">
			<p>Copyright ©{currentYear} All Rights Reserved</p>
		</div>
	);
}

export default Footer;
