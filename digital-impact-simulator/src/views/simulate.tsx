import React from 'react';
//import { useParams, useLocation } from 'react-router';

import './simulate.scss';

import Simulator from '../components/simulation/simulator';

export type SimulatePageParams = {
	id?: string;
	from?: string;
}

const SimulatePage: React.FC = () => {
	//const { id, from } = useParams<SimulatePageParams>();

	return (
		<div id="simulate">
			<Simulator />
		</div>
	);
}

export default SimulatePage;
