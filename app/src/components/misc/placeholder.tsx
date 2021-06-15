import React from 'react';
import './placeholder.scss';

const Placeholder: React.FC = props => {
	return (
		<span className="placeholder">{props.children}</span>
	)
};

export default Placeholder;
