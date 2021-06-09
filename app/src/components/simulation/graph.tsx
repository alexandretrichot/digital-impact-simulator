import React from 'react';
import './graph.scss';

import { CategorizedStats } from '../../types';
import { types } from "../../values";

export type Props = {
	stats: CategorizedStats,
}

const Graph: React.FC<Props> = ({ stats }) => {
	const total = Object.values(stats).map(s => Number(s)).reduce((a, b) => a + b, 0);

	return (
		<div className="graph">
			{total === 0 ? (
				<div className="center">Pas de données à afficher</div>
			) : (
				<div className="segments">
					<span className="segment" style={{ width: (Number(stats.searches) / total) * 100 + '%', backgroundColor: types.searches.color, }}><span className="text">{types.searches.name}</span></span>
					<span className="segment" style={{ width: (Number(stats.emails) / total) * 100 + '%', backgroundColor: types.emails.color, }}><span className="text">{types.emails.name}</span></span>
					<span className="segment" style={{ width: (Number(stats.socials) / total) * 100 + '%', backgroundColor: types.socials.color, }}><span className="text">{types.socials.name}</span></span>
					<span className="segment" style={{ width: (Number(stats.games) / total) * 100 + '%', backgroundColor: types.games.color, }}><span className="text">{types.games.name}</span></span>
					<span className="segment" style={{ width: (Number(stats.streaming) / total) * 100 + '%', backgroundColor: types.streaming.color, }}><span className="text">{types.streaming.name}</span></span>
				</div>
			)}
		</div>
	);
}

export default Graph;
