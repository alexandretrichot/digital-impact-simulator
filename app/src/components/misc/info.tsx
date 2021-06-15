import React from 'react';
import './info.scss';

import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';

const Info : React.FC = props => (
	<div className="info"><InfoIcon className="icon" /><div>{props.children}</div></div>
);

export default Info;
