import React from 'react';
import './sum.scss';

import boltIcon from '../../assets/icons/bolt.svg';
import weightIcon from '../../assets/icons/weight.svg';

import { KWh, GES } from '../utils';

export type Props = {
	kwh: number,
	ges: number,
}

const Sum: React.FC<Props> = props => {
	return (
		<div className="sum">
			<div className="value">
				<img src={boltIcon} alt="Icon" className="icon" />
				<div className="result"><KWh value={props.kwh} /> </div>
			</div>
			<div className="value">
				<img src={weightIcon} alt="Icon" className="icon" />
				<div className="result"><GES value={props.ges} /> </div>
			</div>
		</div>
	);
};

export default Sum;
