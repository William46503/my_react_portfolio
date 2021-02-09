import React from 'react';
import TitleText from '../Component/TitleText';
import LinkButton from '../Component/LinkButton';
import TimeLine from '../Component/Timeline';
import '../Styles/Welcome.css';

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
			<TimeLine />
		</div>
	);
}

export default Welcome;
