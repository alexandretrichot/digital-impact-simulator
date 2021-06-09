import React from 'react';
import './section.scss';

import Lottie from '../misc/lottie';
import Counter from './counter';
import { StatType } from '../../types';

export type Props = {
	title: string,
	anim: string,
	description: React.ReactNode,
	items: Item[],
	footer: React.ReactNode,
}

export type Item = {
	title: string,
	description: string,
	step: number,
	value: StatType,
	onUpdate: (value: StatType) => void,
}

const Section: React.FC<Props> = props => {
	return (
		<section className="section">
			<div className="wrapper">
				<header>
					<div>
						<h2>{props.title}</h2>
						{props.description}
					</div>
					<div className="anim"><Lottie anim={props.anim} /></div>
				</header>

				<div className="counters">
					{props.items.map((i, index) => (<Counter key={index} title={i.title} description={i.description} value={i.value} step={i.step} onChange={i.onUpdate} />))}
				</div>

				<div className="main">
					{props.children}
				</div>

				{props.footer}
			</div>
		</section>
	);
};

export default Section;
