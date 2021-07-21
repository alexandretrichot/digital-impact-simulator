import './home.scss';

import Lottie from '../components/misc/lottie';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
	return (
		<div id="home" className="page wrapper">
			<div className="intro">
				<h3>Votre consommation d’internet a-t-elle un impact sur l’environnement ?</h3>
				<p>Pour le découvrir, faites le test !</p>
			</div>
			<h2 className="centered">Je fais le test...</h2>
			<div className="split">
				<div className="card">
					<div className="text">Seul</div>
					<div className="anim"><Lottie anim="booking" /></div>
					<Link className="btn" to="/simulate">Faire le test !</Link>
				</div>
				<div className="card">
					<div className="text">En groupe</div>
					<div className="anim"><Lottie anim="friends" /></div>
					<Link className="btn" to="/session">Créer un groupe</Link>
				</div>
			</div>
			<div className="card">
				<p>Depuis plusieurs années, <a href="https://meusenature.fr/">Meuse Nature Environnement</a> se questionne sur les impacts de la "dématérialisation" généralisée des activités et s'alarme sur la consommation exponentielle d'objets connectés et d'internet en général. Pour mieux appréhender l'impact que peut avoir notre usage généralisé d'internet, nous vous proposons ce simulateur.</p>
				<p>A partir de votre expérience personnelle d'internet, il vous donnera une idée de l'impact de votre usage d'internet sur la consommation électrique et sur les rejets de gaz à effet de serre dans l'atmosphère, de façon globale et également par type d'utilisation. Un bon début pour déjà savoir où on en est et par où commencer pour réduire son impact efficacement !</p>
			</div>
		</div>
	);
}

export default HomePage;
