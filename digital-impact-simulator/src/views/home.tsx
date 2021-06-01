import './home.scss';

import Lottie from '../components/misc/lottie';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
	return (
		<div id="home" className="page wrapper">
			<div className="intro">
				<h3>Votre consommation d’internet a-t-elle un impact sur l’environnement ?</h3>
				{/* <p>Le cas échéant, avez-vous une idée de ce que cela représente ? Ce que cela consomme en électricité (en Wh) et en émissions de gaz à effets de serre (équivalents de g de CO<sub>2</sub>) ?</p> */}
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
					<Link className="btn" to="/group">Aller dans un groupe</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
