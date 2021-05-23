import React from 'react';
import { useParams } from 'react-router';

import './simulate.scss';

import Simulator from '../components/simulation/simulator';

export type SimulatePageParams = {
	id?: string;
}

const SimulatePage: React.FC = () => {
	const { id } = useParams<SimulatePageParams>();

	return (
		<div id="simulate">
			<Simulator />
		</div>
	);
}

export default SimulatePage;
