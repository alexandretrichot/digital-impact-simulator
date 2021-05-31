import React from 'react';
import './sum.scss';

import boltIcon from '../../assets/icons/bolt.svg';
import weightIcon from '../../assets/icons/weight.svg';

import { KWh, GES } from '../utils';

export type Props = {
	kwh: number,
	ges: number,

	vsKwh?: number,
	vsGes?: number,
}

const Sum: React.FC<Props> = props => {
	return (
		<div className="sum">
			<div className="value">
				<img src={boltIcon} alt="Icon" className="icon" />
				<span><KWh value={props.kwh} /></span>
				{props.vsKwh !== undefined ? (
					<div className="vs">
						<span>contre</span>
						{' '}
						<span><KWh value={props.vsKwh} /></span>
					</div>
				) : null}
			</div>
			<div className="value">
				<img src={weightIcon} alt="Icon" className="icon" />
				<span><GES value={props.ges} /></span>
				{props.vsGes !== undefined ? (
					<div className="vs">
						<span>contre</span>
						{' '}
						<span><GES value={props.vsGes} /></span>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Sum;
