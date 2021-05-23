import React from 'react';

export const KWh: React.FC<{ value: number }> = ({ value }) => {
	const isWh = value < 1;
	const isGWh = value >= 1000;

	return (
		<><b>{isGWh ? (value / 1000).toLocaleString() : isWh ? (value * 1000).toLocaleString() : value.toLocaleString()}</b>{isGWh ? " GWh" : isWh ? " Wh" : " kWh"}</>
	);
};

export const GES: React.FC<{ value: number }> = ({ value }) => {
	const isKg = value >= 1000;
	const isTonne = value >= 1000 * 1000;

	return (
		<><b>{isTonne ? (value / 1000000).toLocaleString() : isKg ? (value / 1000).toLocaleString() : value.toLocaleString()}</b> {isTonne ? "tonne" + (value / 1000000 >= 2 ? "s" : "") : isKg ? "Kg" : "g"} de CO<sub>2</sub></>
	);
};
