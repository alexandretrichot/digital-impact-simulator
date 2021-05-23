import './home.scss';

import Lottie from '../components/lottie';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
	return (
		<div id="home" className="page wrapper">
			<div className="flex">
				<div className="anim"><Lottie anim={'booking'} /></div>
				<div>
					<p>
						Vous êtes-vous déjà demandé si votre consommation d’internet avait un
						impact sur l’environnement ?
        </p>
					<p>
						Le cas échéant, avez-vous une idée de ce que cela représente ? Ce que
						cela consomme en électricité (en Wh) et en émissions de gaz à effets
          de serre (équivalents de g de CO<sub>2</sub>) ?
        </p>
					<p>
						Pour vous rendre compte de votre impact, nous vous proposons ce
						simulateur d'impact.
        </p>
					<Link className="btn" to="/simulate">Faites le test !</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
