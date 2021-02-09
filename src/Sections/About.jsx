import React from 'react';
import '../Styles/Constant.scss';

function About(props) {
	return (
		<div className="about-mainContainer">
			<h1 className="about-title">About Me</h1>
			<div className="about-subContainer-left">
				<section className="about-sub-section">
					<h2 type="title">Who Am I</h2>
					<hr />
					<p type="sub" className="description">
						A multilingual, linguist, hobby full-stack, game developer, gamer, fighting game nerd, WTF
						Tae-Kwon-Do partitioner, recruiter & chef, from Norway.
					</p>
				</section>
				<section className="about-sub-section">
					<h2 type="title">What Can I do</h2>
					<hr />
					<p type="sub" className="description">
						<ul className="listOfAbilities">
							<li>
								<span className="categoryName">Language:</span>
								<ul className="languageList">
									<li>
										<span role="img">🇨🇭</span> Mandarin - Fluent
									</li>
									<li>
										<span role="img">🇭🇰</span> Cantonese - Fluent
									</li>
									<li>
										<span role="img">🇺🇸</span> English - Fluent
									</li>
									<li>
										<span role="img">🇯🇵</span> Japanese - Fluent
									</li>
									<li>
										<span role="img">🇳🇴</span>Norwegian - Fluent
									</li>
								</ul>
							</li>
							<li>
								<span className="categoryName">Programming(Learning):</span> JavaScript(React, Node),
								Flutter, UE/C++, MaterialUI, SemanticUI
							</li>
							<li>
								<span className="categoryName">Graphic Design:</span> AdobeXD, Photoshop, Gimp
							</li>
							<li>
								<span className="categoryName">Video Editing:</span> Sony Vegas, Filmora
							</li>
						</ul>
					</p>
				</section>
			</div>
			
		</div>
	);
}

export default About;
