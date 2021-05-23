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
		searches: 0,
		emailsSent: 0,
		emailsReceived: 0,
		instagramPics: 0,
		snapchatPics: 0,
		onlineGamesMinutes: 0,
		cloudGamesMinutes: 0,
		youtubeMinutes: 0,
		netflixMinutes: 0,
		musicMinutes: 0,
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
						<p>Chaque seconde, dans le monde, Google doit répondre à <b>{(38000).toLocaleString('fr')}</b> requêtes : soit <b>2,28 millions</b> par minute et plus de <b>137 millions</b> par heure.</p>
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
			<Section
				title={'Vos "petits" e-mails'}
				anim="mail"
				description={<>L'envoi d'un e-mail consomme environ <KWh value={values.kwh.email} /> et émet environ <GES value={values.ges.email} />.</>}

				items={
					[
						{
							title: "E-mails envoyés par jour",
							description: "Indiquez le nombre d'e-mails que vous envoyez au cours d'une journée.",
							step: 1,
							value: stats.emailsSent,
							onUpdate: emailsSent => updateStats({ emailsSent }),
						},
						{
							title: "E-mails reçus par jour",
							description: "Indiquez le nombre d'e-mails entrant dans votre boite de réception y compris vos spams, e-mails de réseaux sociaux, etc.",
							step: 1,
							value: stats.emailsReceived,
							onUpdate: emailsReceived => updateStats({ emailsReceived }),
						}
					]
				}

				children={
					<>
						<p>Chaque seconde, dans le monde, en moyenne <b>{(3391203).toLocaleString('fr')}</b> e-mails sont envoyés : soit plus de <b>12 milliards</b> par heure.</p>
						<p>Cela a pour effet de dégager l'équivalent de plus de <GES value={3391203 * 60 * 60} /> par heure.</p>
					</>
				}

				footer={
					<>
						<p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
						<Sum kwh={(Number(stats.emailsReceived) + Number(stats.emailsSent)) * values.kwh.email} ges={(Number(stats.emailsReceived) + Number(stats.emailsSent)) * values.ges.email} />
					</>
				}
			/>
			<Wave />
			<Section
				title={'Les réseaux sociaux'}
				anim="social"
				description={<>Chaque minute passée sur Instagram consomme environ <KWh value={values.kwh.instagram} /> et émet environ <GES value={values.ges.instagram} />.</>}

				items={
					[
						{
							title: "Minutes passées par jour sur Instagram",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 1,
							value: stats.instagramPics,
							onUpdate: instagramPics => updateStats({ instagramPics }),
						},
						{
							title: "Minutes passées par jour sur Snapchat",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 1,
							value: stats.snapchatPics,
							onUpdate: snapchatPics => updateStats({ snapchatPics }),
						}
					]
				}

				children={<><p> Sur Instagram, <b>100.00 millions</b> de photos et de vidéos sont publiées par par jour dans le monde. En parallèle, <b>4.20 milliards</b> de likes sont comptabilisés quotidiennement. </p></>}

				footer={
					<><p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
						<Sum kwh={Number(stats.instagramPics) * values.kwh.instagram + Number(stats.snapchatPics) * values.kwh.snapchat} ges={Number(stats.instagramPics) * values.ges.instagram + Number(stats.snapchatPics) * values.ges.snapchat} />
					</>
				}
			/>
			<Wave />
			<Section
				title={'Jeux en ligne'}
				anim="controller"
				description={
					<>
						<p>Chaque minute passée sur un jeu en ligne consomme environ <KWh value={values.kwh.onlineGame} /> et émet environ <GES value={values.ges.onlineGame} />.</p>
						<p>Pour du cloud gaming sur Stadia (Google) ou XCloud (Microsoft) on consomme environ <KWh value={values.kwh.cloudGaming} /> et émet environ <GES value={values.ges.cloudGaming} /> par minute de jeu.</p>
						<p>Cela revient à <KWh value={values.kwh.cloudGaming * 60} /> pour <GES value={values.ges.cloudGaming * 60} /> une heure de jeu !</p>
					</>
				}

				items={
					[
						{
							title: "Minutes de jeux vidéos sur console ou ordinateur par jour",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 20,
							value: stats.onlineGamesMinutes,
							onUpdate: onlineGamesMinutes => updateStats({ onlineGamesMinutes }),
						},
						{
							title: "Minutes de jeux vidéos 'sur le cloud' par jour",
							description: "Le jeu sur le cloud, un service proposé par Stadia ou XCloud, permet de jouer depuis n'importe quel appareil en déportant le calcul de l'image sur une machine distante. Cela ne concerne pas les jeux en ligne classiques.",
							step: 20,
							value: stats.cloudGamesMinutes,
							onUpdate: cloudGamesMinutes => updateStats({ cloudGamesMinutes }),
						}
					]
				}

				children={
					<>
						<p>En sachant que <b>3 millards</b> de personnes jouent aux jeux vidéo dans le monde et en admettant un temps de jeu par jour moyen de 30 minutes, faire un calcul rapide revient à dire que <KWh value={values.kwh.onlineGame * 30 * 3 * 1000 * 1000 * 1000} /> sont consommés pour un rejet de <GES value={values.ges.onlineGame * 30 * 3 * 1000 * 1000 * 1000} /> par jour.</p>
						{/* source : https://www.presse-citron.net/plus-de-3-milliards-de-personnes-jouent-aux-jeux-video-dans-le-monde/#:~:text=Plus%20de%203%20milliards%20de%20personnes%20jouent%20aux%20jeux%20vid%C3%A9o%20dans%20le%20monde,-Tests */}
					</>
				}

				footer={
					<>
						<p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
						<Sum kwh={Number(stats.onlineGamesMinutes) * values.kwh.onlineGame + Number(stats.cloudGamesMinutes) * values.kwh.cloudGaming} ges={Number(stats.onlineGamesMinutes) * values.ges.onlineGame + Number(stats.cloudGamesMinutes) * values.ges.cloudGaming} />
					</>
				}
			/>
			<Wave />
			<Section
				title={'Vos vidéos et votre musique'}
				anim="streaming"
				description={
					<>
						<p>Chaque heure passée sur une vidéo en streaming consomme <KWh value={((values.kwh.youtube + values.kwh.netflix) / 2) * 60} /> et émet environ <GES value={((values.ges.youtube + values.ges.netflix) / 2) * 60} /> ! C'est de loin l'usage d'internet qui a le plus d'impact environnemental.</p>
						<p>Une heure de musique écoutée en ligne (et sans vidéo) consomme <KWh value={values.kwh.music * 60} /> et entraine l'émission de <GES value={values.ges.music * 60} />.</p>
					</>
				}

				items={
					[
						{
							title: "Minutes passées sur Youtube par jour",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 10,
							value: stats.youtubeMinutes,
							onUpdate: youtubeMinutes => updateStats({ youtubeMinutes }),
						},
						{
							title: "Minutes passées sur Netflix par jour",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 10,
							value: stats.netflixMinutes,
							onUpdate: netflixMinutes => updateStats({ netflixMinutes }),
						},
						{
							title: "Minutes de musique écoutées par jour",
							description: "Sur des services comme Spotify, Deezer, Youtube Musique (et non Youtube), etc.",
							step: 20,
							value: stats.musicMinutes,
							onUpdate: musicMinutes => updateStats({ musicMinutes }),
						}
					]
				}

				children={
					<>
						<p>Chaque année, dans le monde, YouTube et les plateformes de vidéos en ligne génèrent <b>65 millions</b> de tonnes de CO<sub>2</sub>.</p>
						<p>Les services de VOD comme Netflix ou Amazon prime en génèrent, quant à eux, <b>102 millions</b>.</p>
						<p>Combinés, ils dégagent plus de <b>170 millions</b> de tonnes de CO<sub>2</sub>sur une année.</p>
					</>
				}

				footer={
					<>
						<p className="top"><b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :</p>
						<Sum kwh={Number(stats.youtubeMinutes) * values.kwh.youtube + Number(stats.netflixMinutes) * values.kwh.netflix + Number(stats.musicMinutes) * values.kwh.music} ges={Number(stats.youtubeMinutes) * values.ges.youtube + Number(stats.netflixMinutes) * values.ges.netflix + Number(stats.musicMinutes) * values.ges.music} />
					</>
				}
			/>
			<Wave />
		</div>
	);
};

export default Simulator;
