import React from 'react';
import './header.scss';

import mneLogo from '../../assets/images/mne.png';

const AppHeader: React.FC = () => {
	return (
		<header id="app-header" className="wrapper">
			<img
				className="mne-logo"
      src={mneLogo}
      alt="Logo de Meuse Nature Environnement"
    />
			<h1>Pollution Numérique</h1>
			<h3>Simulateur d'impact</h3>
		</header>
	);
}

export default AppHeader;

