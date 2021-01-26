import React from 'react';
import ReactTyping from '../Component/ReactTypingEffect';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Welcome.css';

function Welcome() {
	return (
		<div className="welcome-mainContainer">
			<div className="titleText-Container">
				<h1 className="titleName">William L.W. Lu</h1>
				<div className="titleSubContent">
					<ReactTyping />
				</div>
			</div>
			<div className="buttonContainer">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/william-l-w-lu-689167184/"
				>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 1.5 }}
						transition={{ ease: 'easeOut' }}
						className="urlButton"
					>
						<FontAwesomeIcon className="faIcon" icon={faLinkedin} />
						LinkedIn
					</motion.button>
				</a>

				<a target="_blank" rel="noopener noreferrer" href="https://github.com/William46503">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 1.5 }}
						transition={{ ease: 'easeOut' }}
						className="urlButton"
					>
						<FontAwesomeIcon className="faIcon" icon={faGithubSquare} />
						Github
					</motion.button>
				</a>
			</div>
		</div>
	);
}

export default Welcome;
