import React from 'react';
import './legendary.scss';

import { types } from '../../values';

const Legendary: React.FC = () => {
	return (
		<div className="legendary">
			{Object.keys(types).map(t => (
				<div className="item" key={t}>
					<div className="color" style={{ backgroundColor: (types as any)[t].color }}></div>
					<div className="name">{(types as any)[t].name}</div>
				</div>
			))}
		</div>
	);
}

export default Legendary;
