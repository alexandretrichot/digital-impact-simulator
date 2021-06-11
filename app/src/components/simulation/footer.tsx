import React from 'react';
import './footer.scss';

import { Stats } from '../../types';
import Sum from './sum';

export type CompareToProp = {
	stats: Stats,
	self: boolean
} | undefined;

export type Props = {
	compareTo: CompareToProp,
	selfKwh: number,
	selfGes: number,
	vsKwh: number,
	vsGes: number,
};

const Footer: React.FC<Props> = props => {
	const good = props.selfGes < props.vsGes
	const bad = props.selfGes > props.vsGes

	return (
		<footer className={
			props.compareTo ?
				`compare ${good ? 'good' : ''} ${bad ? 'bad' : ''}` : ''}>

			<p className="top">{props.children}</p>

			<Sum kwh={props.selfKwh} ges={props.selfGes} vsKwh={props.compareTo ? props.vsKwh : undefined} vsGes={props.compareTo ? props.vsGes : undefined} />
			{/* {props.compareTo ? (
				<div style={{ opacity: '0.6' }}>
					<p>{props.compareTo.self ? 'Lors de votre dernière visite, vous aviez fait :' : 'En comparaison, votre ami a fait :'}</p>
					<Sum kwh={props.compKwh} ges={props.compGes}  />
				</div>
			) : null} */}
		</footer>
	);
};

export default Footer;
