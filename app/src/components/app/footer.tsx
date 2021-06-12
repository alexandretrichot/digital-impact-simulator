import React from 'react';
import './footer.scss';

import { Link } from 'react-router-dom';

import grandEstLogo from '../../assets/images/grand-est.png';
import mneLogo from '../../assets/images/mne-white.png';

const AppFooter: React.FC = () => {
	return (
		<footer id="app-footer">
			<div className="main">
				<div className="wrapper">
					<div className="grid">
						<div className="about">
							<p>Imaginé et réalisé par</p>
							<p><a href="https://meusenature.fr/" target="_blank" rel="noreferrer"><img src={mneLogo} alt="Logo de Meuse Nature Environnement" height="30" width="141" /></a></p>
							<p>Conçu et développé par <a href="https://alexandretrichot.fr/" target="_blank" rel="noreferrer">Alexandre TRICHOT</a></p>

							<br />

							<p>Avec la participation de</p>
							<div className="sponsors">
								<img
									src={grandEstLogo}
									alt="Logo du Grand-Est"
									height="40"
									width="95"
								/>
							</div>
						</div>
						<div className="links">
							<h3>Liens utils</h3>
							<Link className="link" to="/">Accueil</Link>
							<Link className="link" to="/credits">Crédits</Link>
							<Link className="link" to="legal">Mentions légales</Link>
							<Link className="link" to="cgu">CGU</Link>
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

