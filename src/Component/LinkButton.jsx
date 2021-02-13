import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function LinkButton(props) {
	return (
		<div className={props.buttonContainerClass}>
			<a href="https://www.linkedin.com/in/william-l-w-lu-689167184" target="blank">
				<Button className={props.buttonClass} size="huge" animated="fade">
					<Button.Content hidden className={props.hiddenIcon}>
						Linkedin <Icon name="arrow alternate circle right outline" size="small" />
					</Button.Content>
					<Button.Content visible className={props.visibleIcon}>
						<Icon name="linkedin" size="large" />
					</Button.Content>
				</Button>
			</a>
			<a href="https://github.com/William46503" target="blank">
				<Button className={props.buttonClass} size="huge" animated="fade">
					<Button.Content hidden className={props.hiddenIcon}>
						Github <Icon name="arrow alternate circle right outline" size="small" />
					</Button.Content>
					<Button.Content visible className={props.visibleIcon}>
						<Icon name="github" size="large" />
					</Button.Content>
				</Button>
			</a>
			<a href="https://twitter.com/NextLvLPenguin" target="blank">
				<Button className={props.buttonClass} size="huge" animated="fade">
					<Button.Content hidden className={props.hiddenIcon}>
						Twitter <Icon name="arrow alternate circle right outline" size="small" />
					</Button.Content>
					<Button.Content visible className={props.visibleIcon}>
						<Icon name="twitter" size="large" />
					</Button.Content>
				</Button>
			</a>
		</div>
	);
}
export default LinkButton;
