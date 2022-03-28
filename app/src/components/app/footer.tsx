import React from 'react';
import './footer.scss';

import { Link } from 'react-router-dom';

import drealLogo from '../../assets/images/dreal.jpg';
import mneLogo from '../../assets/images/mne-white.png';

import odd04Icon from '../../assets/images/odd04.jpg';
import odd12Icon from '../../assets/images/odd12.jpg';
import odd13Icon from '../../assets/images/odd13.jpg';
import odd17Icon from '../../assets/images/odd17.jpg';

export const AppFooter: React.FC = () => {
	return (
		<footer id="app-footer">
			<div className="main">
				<div className="wrapper">
					<div className="grid">
						<div className="about">
							<p>Imaginé et réalisé par</p>
							<p><a href="https://meusenature.fr/" target="_blank" rel="noreferrer"><img src={mneLogo} alt="Logo de Meuse Nature Environnement" height="30" width="141" /></a></p>
							<p>Conçu et développé par <a href="https://alexandretrichot.fr/" target="_blank" rel="noreferrer">Alexandre TRICHOT</a></p>

							<p>Ce simulateur a été développé avec le soutien de la DREAL Grand Est, et contribue aux objectifs de développement durable.</p>
							<div className="odd">
								<img className="odd-icon" src={odd04Icon} alt="Icon ODD" />
								<img className="odd-icon" src={odd12Icon} alt="Icon ODD" />
								<img className="odd-icon" src={odd13Icon} alt="Icon ODD" />
								<img className="odd-icon" src={odd17Icon} alt="Icon ODD" />
							</div>
							<div className="sponsors">
								<img
									src={drealLogo}
									alt="Logo de la DREAL du Grand-Est"
									height="60"
									width="142"
								/>
							</div>
						</div>
						<div className="links">
							<h3>Liens utiles</h3>
							<Link className="link" to="/">Accueil</Link>
							<Link className="link" to="/credits">Crédits</Link>
							<Link className="link" to="legal">Mentions légales</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="wrapper">
					<div className="centered">
						© Meuse Nature Environnement, 2021
					</div>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;

