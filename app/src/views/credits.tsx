import { Helmet } from 'react-helmet';

import './credits.scss';

const CreditsPage: React.FC = () => {
	return (
		<div id="credits" className="page wrapper">
			<Helmet>
				<title>Crédits | Simulateur d'impact</title>
			</Helmet>
			<h1>Crédits</h1>
			<ul>
				<li>Animations de <a href="https://lottiefiles.com/" target="_blank" rel="noreferrer">LottieFiles</a></li>
				<li>Icons de <a href="https://flaticon.com/" target="_blank" rel="noreferrer">Flaticon</a></li>
			</ul>

			<h2>Sources</h2>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Service</th>
							<th>Source</th>
							<th>Conso. électrique pour 1 unité</th>
							<th>Rejet de GES pour 1 unité</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Recherches internet</td>
							<td>Test avec les DevTools de Chrome avec le cache désactivé sur Google.</td>
							<td>0,000188265 kWh</td>
							<td>0,097709448 g</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>Analyse d’une boite mail perso de 12,29 Go pour 11689 emails.</td>
							<td>0,000235517 kWh</td>
							<td>0,122233402 g</td>
						</tr>
						<tr>
							<td>Instagram</td>
							<td>Mesure de la consommation internet sur un terminal iPhone en l'espace de 5 minutes.</td>
							<td>0,002912 kWh</td>
							<td>1,511328 g</td>
						</tr>
						<tr>
							<td>Snapchat</td>
							<td>Mesure de la consommation internet sur un terminal iPhone en l'espace de 5 minutes.</td>
							<td>0,002912 kWh</td>
							<td>1,511328 g</td>
						</tr>
						<tr>
							<td>TikTok</td>
							<td>Mesure de la consommation internet sur un terminal iPhone en l'espace de 5 minutes.</td>
							<td>0,00448 kWh</td>
							<td>2,32512 g</td>
						</tr>
						<tr>
							<td>Facebook</td>
							<td>Mesure de la consommation internet sur un terminal iPhone en l'espace de 5 minutes.</td>
							<td>0,00289408 kWh</td>
							<td>1,50202752 g</td>
						</tr>
						<tr>
							<td>Jeux en ligne</td>
							<td>Moyenne de consommation d'une partie de jeu en ligne sur Fortnite.</td>
							<td>0,0001344 kWh</td>
							<td>0,0697536 g</td>
						</tr>
						<tr>
							<td>Cloud Gaming</td>
							<td>Pour une utilisation de Stadia en qualitée 1080p à 60 fps Pour une source : <a href="https://support.google.com/stadia/answer/9607891?hl=en">support.google.com/stadia/answer/9607891?hl=en</a></td>
							<td>0,04704 kWh</td>
							<td>24,41376 g</td>
						</tr>
						<tr>
							<td>YouTube</td>
							<td>Pour une vidéo en 1080p 60 fps à 6000 kbps source: <a href="https://support.google.com/youtube/answer/2853702?hl=fr">support.google.com/youtube/answer/2853702?hl=fr</a></td>
							<td>0,10752 kWh</td>
							<td>55,80288 g</td>
						</tr>
						<tr>
							<td>Netflix</td>
							<td>Pour une vidéo en HD à 5Mb/s source : <a href="https://help.netflix.com/fr/node/306">help.netflix.com/fr/node/306</a></td>
							<td>0,08064 kWh</td>
							<td>41,85216 g</td>
						</tr>
						<tr>
							<td>Musique (Spotify)</td>
							<td>Pour une qualité en 'Normal' à 96kbps source : <a href="https://support.spotify.com/us/article/high-quality-streaming">support.spotify.com/us/article/high-quality-streaming</a></td>
							<td>0,00129024 kWh</td>
							<td>0,66963456 g</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CreditsPage;
