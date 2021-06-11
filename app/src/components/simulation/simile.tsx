import React from 'react';
import './simile.scss';

export type Props = {
	title: string,
	icon: string,
}

const Simile: React.FC<Props> = props => {

	return (
		<div className="simile">
			<img src={props.icon} alt="Simile icon" />
			<div className="title">{props.title}</div>
			<div>{props.children}</div>
		</div>
	);
}

export default Simile;
