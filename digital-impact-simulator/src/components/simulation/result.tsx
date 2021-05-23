import React from 'react';
import './result.scss';

import { Stats } from '../../types';
import { getGesStats, getKWhStats } from '../../utils';
import values from '../../values';

import fridgeIcon from '../../assets/icons/fridge.svg';
import carIcon from '../../assets/icons/car.svg';

import Sum from './sum';
import Graph from './graph';
import Legendary from './legendary';
import Simile from './simile';

export type Props = {
	stats: Stats,
}

const Result: React.FC<Props> = props => {
	const kwh = getKWhStats(props.stats);
	const totalKwh = Object.values(kwh).reduce((a, b) => a + b, 0);
	const ges = getGesStats(props.stats);
	const totalGes = Object.values(ges).reduce((a, b) => a + b, 0);

	return (
		<section id="result">
			<div className="wrapper">
				<h2>Résumé de votre impact sur une journée</h2>
				<Sum kwh={totalKwh} ges={totalGes} />

				<p>
					Répartition de votre consommation électrique liée à votre utilisation de
					services en ligne.
      </p>
				<Graph stats={kwh} />

				<p>
					Répartition vos émissions de CO<sub>2</sub> dues à l'utilisation de
        services en ligne.
      </p>
				<Graph stats={ges} />

				<Legendary />

				<br />

				<h3>En une année cela représente :</h3>
				<Sum kwh={totalKwh * 365} ges={totalGes * 365} />
				<br />
				<p>À titre de comparaison c'est :</p>
				<br />
				<div className="similes">
					<Simile title={`${Math.round((totalKwh * 365) / values.frigoPerYear)} frigos`} icon={fridgeIcon}>
						C'est l'équivalent en consommation energétique de {Math.round((totalKwh * 365) / values.frigoPerYear)} frigos par an.
        </Simile>
					<Simile
						title={`${((totalGes * 365) / values.gesPerKmInCar).toLocaleString()} Km`} icon={carIcon}>
						C'est l'équivalent en émissions carbone d'une voiture thermique ayant parcouru {((totalGes * 365) / values.gesPerKmInCar).toLocaleString()} Km.
        </Simile>
				</div>
			</div>
		</section>
	);
}

export default Result;
