import React from 'react';

export const KWh: React.FC<{ value: number }> = ({ value }) => {
	const isWh = value < 1;
	const isGWh = value >= 1000;

	return (
		<><b>{isGWh ? f(value / 1000) : isWh ? f(value * 1000) : f(value)}</b>{isGWh ? " GWh" : isWh ? " Wh" : " kWh"}</>
	);
};

export const GES: React.FC<{ value: number, long?: boolean }> = ({ value, long }) => {
	const isKg = value >= 1000;
	const isTonne = value >= 1000 * 1000;

	return (
		<><b>{isTonne ? f(value / 1000000) : isKg ? f(value / 1000) : f(value)}</b> {isTonne ? "tonne" + (value / 1000000 >= 2 ? "s" : "") : isKg ? "kg" : "g"} {long && 'équivalent '}de CO<sub>2</sub></>
	);
};

function f(n: number): string {
	if(n > 0.5) {
		return Math.round(n).toLocaleString('fr');
	} else {
		return (Math.round(n * 1000) / 1000).toLocaleString('fr');
	}
}