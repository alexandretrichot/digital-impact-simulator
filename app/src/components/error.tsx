import React from 'react';
import './error.scss';

import Lottie from './misc/lottie';

export type Props = {
	title: string;
	anim?: string;
	details?: string;
}

const Error: React.FC<Props> = props => {
	return (
		<div className="error-pane">
			<div className="anim"><Lottie anim={props.anim || 'error-screen'} /></div>
			<div className="title">{props.title}</div>
			{props.details ? (
				<div className="details">
					{props.details}
				</div>
			) : null
			}
			<br />
			{props.children}
		</div>
	);
}

export default Error;
