import React from 'react';
import './footer.scss';

import grandEstLogo from '../../assets/images/grand-est.jpg';

const AppFooter: React.FC = () => {
	return (
		<footer id="app-footer" className="wrapper">
			<hr />
			<div className="sponsors">
				<p>
					Sur l'initiative de <a href="https://meusenature.fr/">Meuse Nature Environnement</a>, conçu
        et développé par <a href="https://github.com/alexandretrichot/">Alexandre TRICHOT</a>
				</p>
				<p>
					Animations de <a href="https://lottiefiles.com/">LottieFiles</a> et
        icons de <a href="https://flaticon.com/">Flaticon</a>.
      </p>
				<p>
					Sources des données disponibles sur <a href="https://github.com/alexandretrichot/digital-impact-simulator#sources">GitHub</a>.
      </p>

				<p>Avec la participation de la Région Grand Est</p>
				<div className="flex">
					<img
						src={grandEstLogo}
						alt="Logo du Grand-Est"
					/>
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;

