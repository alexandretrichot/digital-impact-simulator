import React from 'react';
import './counter.scss';

import Button from './button';
import { StatType } from '../../types';

export type Props = {
	title: string,
	description: string,
	value: StatType,
	step: number,

	onChange: (value: StatType) => void
}

const Counter: React.FC<Props> = props => {

	function updateStat(value: string | number) {
		if(value === '' || isNaN(Number(value))) return props.onChange(null);
		
		props.onChange(Math.min(Math.max(Number(value), 0), 1000));
	}

	return (
		<div className="counter">
			<div className="title">{props.title}</div>
			<div className="description">{props.description}</div>
			<div className="screen">
				<input
					type="number"
					inputMode="numeric"
					className="value"
					value={props.value !== null ? props.value : ''}
					onChange={ev => updateStat(ev.currentTarget.value)}
				/>
			</div>
			<div className="buttons">
				<Button onClick={() => updateStat(Number(props.value) - props.step)}>-{props.step}</Button>
				<Button onClick={() => updateStat(Number(props.value) + props.step)}>+{props.step}</Button>
			</div >
		</div >
	);
};

export default Counter;
