import React from 'react';
import './header.scss';

import mneLogo from '../../assets/images/mne.png';
import { Link } from 'react-router-dom';

export const AppHeader: React.FC = () => {
	return (
		<header id="app-header" className="wrapper">
			<Link to="/" className="mne-logo">
				<img src={mneLogo} alt="Logo de Meuse Nature Environnement" />
			</Link>

			<h1 className="title">Simulateur d'Impact Numérique</h1>
		</header>
	);
}
