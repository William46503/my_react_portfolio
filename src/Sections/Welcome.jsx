import React from 'react';
import TitleText from '../Component/TitleText';
import LinkButton from '../Component/LinkButton';
// import '../Styles/Welcome.css';

function Welcome() {
	return (
		<div className="welcome-mainContainer">
			<TitleText />
			<LinkButton
				buttonContainerClass={'LinkButtonContainer'}
				buttonClass={'ButtonClass'}
				visibleIcon={'VisibleIcon'}
				hiddenIcon={'HiddenIcon'}
			/>
		</div>
	);
}

export default Welcome;

