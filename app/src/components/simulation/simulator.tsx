import React from 'react';

import values from '../../values';

import { KWh, GES } from '../utils';
import Wave from './wave';
import Section from './section';
import Result from './result';

import { Stats } from '../../types';
import Footer, { CompareToProp } from './footer';

export type Props = {
	compareTo?: CompareToProp,
	stats: Stats,
	onStatsChange: (stats: Stats) => void,
}

const Simulator: React.FC<Props> = props => {
	const updateStats = (newStats: Partial<Stats>) => {
		props.onStatsChange({
			...props.stats,
			...newStats
		});
	}

	return (
		<div id="simulator" style={{ margin: '2rem 0' }}>
			<div></div>
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
							value: props.stats.searches,
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
					<Footer
						compareTo={props.compareTo}
						selfKwh={Number(props.stats.searches) * values.kwh.search}
						selfGes={(Number(props.stats.searches) * values.ges.search)}
						vsKwh={Number(props.compareTo?.stats.searches) * values.kwh.search}
						vsGes={Number(props.compareTo?.stats.searches) * values.ges.search}
					>
						<b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :
					</Footer>
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
							value: props.stats.emailsSent,
							onUpdate: emailsSent => updateStats({ emailsSent }),
						},
						{
							title: "E-mails reçus par jour",
							description: "Indiquez le nombre d'e-mails entrant dans votre boite de réception y compris vos spams, e-mails de réseaux sociaux, etc.",
							step: 1,
							value: props.stats.emailsReceived,
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
					<Footer
						compareTo={props.compareTo}
						selfKwh={(Number(props.stats.emailsReceived) + Number(props.stats.emailsSent)) * values.kwh.email}
						selfGes={(Number(props.stats.emailsReceived) + Number(props.stats.emailsSent)) * values.ges.email}
						vsKwh={(Number(props.compareTo?.stats.emailsReceived) + Number(props.compareTo?.stats.emailsSent)) * values.kwh.email}
						vsGes={(Number(props.compareTo?.stats.emailsReceived) + Number(props.compareTo?.stats.emailsSent)) * values.ges.email}
					>
						<b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :
					</Footer>
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
							title: "Instagram",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 1,
							value: props.stats.instagramMinutes,
							onUpdate: instagramMinutes => updateStats({ instagramMinutes }),
						},
						{
							title: "Snapchat",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 1,
							value: props.stats.snapchatMinutes,
							onUpdate: snapchatMinutes => updateStats({ snapchatMinutes }),
						},
						{
							title: "TikTok",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 1,
							value: props.stats.tiktokMinutes,
							onUpdate: tiktokMinutes => updateStats({ tiktokMinutes }),
						},
						{
							title: "Facebook",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 1,
							value: props.stats.facebookMinutes,
							onUpdate: facebookMinutes => updateStats({ facebookMinutes }),
						}
					]
				}

				children={<><p> Sur Instagram, <b>100.00 millions</b> de photos et de vidéos sont publiées par par jour dans le monde. En parallèle, <b>4.20 milliards</b> de likes sont comptabilisés quotidiennement. </p></>}

				footer={
					<Footer
						compareTo={props.compareTo}
						selfKwh={
							Number(props.stats.instagramMinutes) * values.kwh.instagram
							+ Number(props.stats.snapchatMinutes) * values.kwh.snapchat
							+ Number(props.stats.tiktokMinutes) * values.kwh.tiktok
							+ Number(props.stats.facebookMinutes) * values.kwh.facebook
						}

						selfGes={
							Number(props.stats.instagramMinutes) * values.ges.instagram
							+ Number(props.stats.snapchatMinutes) * values.ges.snapchat
							+ Number(props.stats.tiktokMinutes) * values.ges.tiktok
							+ Number(props.stats.facebookMinutes) * values.ges.facebook
						}

						vsKwh={
							Number(props.compareTo?.stats.instagramMinutes) * values.kwh.instagram
							+ Number(props.compareTo?.stats.snapchatMinutes) * values.kwh.snapchat
							+ Number(props.compareTo?.stats.tiktokMinutes) * values.kwh.tiktok
							+ Number(props.compareTo?.stats.facebookMinutes) * values.kwh.facebook
						}

						vsGes={
							Number(props.compareTo?.stats.instagramMinutes) * values.ges.instagram
							+ Number(props.compareTo?.stats.snapchatMinutes) * values.ges.snapchat
							+ Number(props.compareTo?.stats.tiktokMinutes) * values.ges.tiktok
							+ Number(props.compareTo?.stats.facebookMinutes) * values.ges.facebook
						}
					>
						<b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :
					</Footer>
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
							value: props.stats.onlineGamesMinutes,
							onUpdate: onlineGamesMinutes => updateStats({ onlineGamesMinutes }),
						},
						{
							title: "Minutes de jeux vidéos 'sur le cloud' par jour",
							description: "Le jeu sur le cloud, un service proposé par Stadia ou XCloud, permet de jouer depuis n'importe quel appareil en déportant le calcul de l'image sur une machine distante. Cela ne concerne pas les jeux en ligne classiques.",
							step: 20,
							value: props.stats.cloudGamesMinutes,
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
					<Footer
						compareTo={props.compareTo}
						selfKwh={Number(props.stats.onlineGamesMinutes) * values.kwh.onlineGame + Number(props.stats.cloudGamesMinutes) * values.kwh.cloudGaming}
						selfGes={Number(props.stats.onlineGamesMinutes) * values.ges.onlineGame + Number(props.stats.cloudGamesMinutes) * values.ges.cloudGaming}
						vsKwh={Number(props.compareTo?.stats.onlineGamesMinutes) * values.kwh.onlineGame + Number(props.compareTo?.stats.cloudGamesMinutes) * values.kwh.cloudGaming}
						vsGes={Number(props.compareTo?.stats.onlineGamesMinutes) * values.ges.onlineGame + Number(props.compareTo?.stats.cloudGamesMinutes) * values.ges.cloudGaming}
					>
						<b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :
					</Footer>
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
							value: props.stats.youtubeMinutes,
							onUpdate: youtubeMinutes => updateStats({ youtubeMinutes }),
						},
						{
							title: "Minutes passées sur Netflix par jour",
							description: "Indiquez ici le temps que vous y passez chaque jour",
							step: 10,
							value: props.stats.netflixMinutes,
							onUpdate: netflixMinutes => updateStats({ netflixMinutes }),
						},
						{
							title: "Minutes de musique écoutées par jour",
							description: "Sur des services comme Spotify, Deezer, Youtube Musique (et non Youtube), etc.",
							step: 20,
							value: props.stats.musicMinutes,
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
					<Footer
						compareTo={props.compareTo}
						selfKwh={Number(props.stats.youtubeMinutes) * values.kwh.youtube + Number(props.stats.netflixMinutes) * values.kwh.netflix + Number(props.stats.musicMinutes) * values.kwh.music}
						selfGes={Number(props.stats.youtubeMinutes) * values.ges.youtube + Number(props.stats.netflixMinutes) * values.ges.netflix + Number(props.stats.musicMinutes) * values.ges.music}
						vsKwh={Number(props.compareTo?.stats.youtubeMinutes) * values.kwh.youtube + Number(props.compareTo?.stats.netflixMinutes) * values.kwh.netflix + Number(props.compareTo?.stats.musicMinutes) * values.kwh.music}
						vsGes={Number(props.compareTo?.stats.youtubeMinutes) * values.ges.youtube + Number(props.compareTo?.stats.netflixMinutes) * values.ges.netflix + Number(props.compareTo?.stats.musicMinutes) * values.ges.music}
					>
						<b>En conséquence</b>, voici votre impact en consommation en énergie et émissions de gaz à effet de serre :
					</Footer>
				}
			/>
			<Wave />
			<Result stats={props.stats} vsStats={props.compareTo?.stats} />
		</div>
	);
};

export default Simulator;

