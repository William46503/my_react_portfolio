import React from 'react';
import TitleText from '../Component/TitleText';
import TimeLine from '../Component/Timeline';
import LinkButton from './../Component/LinkButton';

function Welcome() {
	return (
		<div className="welcome-mainContainer">
			<span id="top-section" />
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
