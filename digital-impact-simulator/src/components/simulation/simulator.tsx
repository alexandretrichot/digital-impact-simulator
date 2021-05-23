import React from 'react';

import './simulator.scss';
import fridgeIcon from '../../assets/icons/fridge.svg';
import carIcon from '../../assets/icons/car.svg';

import values from '../../values';

import { KWh, GES } from '../utils';
import Wave from './wave';
import Section from './section';
import Sum from './sum';

import { Stats } from '../../types';

export type Props = {

}

const Simulator: React.FC<Props> = props => {
	const [stats, setStats] = React.useState<Stats>({
		searches: 40,
	});

	function updateStats(newStats: Partial<Stats>) {
		setStats({
			...stats,
			...newStats
		});
	}

	return (
		<div id="simulator">
			<div className="wrapper">
				<div className="frame-info">
					<p>
						Voici un ordre de grandeur de ce que représentent les chiffres à venir :
        	</p>
					<div className="compare">
						<img src={fridgeIcon} alt="Fridge icon" />
						<p>
							<KWh value={values.frigoPerYear} /> = <b>1</b> frigo ! (consommation d'électricité par un réfrigérateur pendant 1 an)
          	</p>
					</div>
					<div className="compare">
						<img src={carIcon} alt="Car icon" />
						<p>
							<b>100</b> Km = <GES value={values.gesPerKmInCar * 100} /> (émissions de gaz à effets de serre par un véhicule thermique qui roule 10 kilomètres)
						</p>
					</div>
				</div>
			</div>
			<Wave />
			<Section
				title="Vos recherches sur internet"
				anim="search"
				description={<>En moyenne, une recherche sur un moteur de recherche comme Google, Bing ou Yahoo! consomme environ <KWh value={values.kwh.search} /> et émet environ <GES value={values.ges.search} />.</>}

				items={
					[
						{
							title: "Recherches",
							description: "Indiquez votre nombre moyen de recherches sur internet par jour.",
							step: 1,
							value: stats.searches,
							onUpdate: searches => updateStats({ searches }),
						}
					]
				}

				children={
					<>
						<p>Chaque seconde, dans le monde, Google doit répondre à <b>38{'&nbsp;'}000</b> requêtes : soit <b>2,28 millions</b> par minute et plus de <b>137 millions</b> par heure.</p>
						<p>Cela a pour effet de consommer <KWh value={values.kwh.search * 38000 * 60 * 60} /> et de dégager l'équivalent de <GES value={values.ges.search * 38000 * 60 * 60} /> chaque heure en permanence.</p>
						<p><i>Note : Ecosia est le seul moteur de recherche ayant un bilan carbone positif. Les rejets de CO<sub>2</sub> sont compensés par des replantations d'arbres.</i></p>
					</>
				}

				footer={
					<>
						<p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
						<Sum kwh={Number(stats.searches) * values.kwh.search} ges={Number(stats.searches) * values.ges.search} />
					</>
				}
			/>
			<Wave />
		</div >
	);
};

export default Simulator;
