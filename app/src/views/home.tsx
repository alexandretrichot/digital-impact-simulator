import './home.scss';

import Lottie from '../components/misc/lottie';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
	return (
		<div id="home" className="page wrapper">
			<div className="intro">
				<h3>Votre consommation d’internet a-t-elle un impact sur l’environnement ?</h3>
				<p>Vigilante sur la consommation exponentielle et généralisée d'objets connectés et d'internet, <a href="https://meusenature.fr/">Meuse Nature Environnement</a> s'est interrogée sur les impacts écologiques de cette "dématérialisation". Pour donner à chacun(e) une idée des impacts de ses principaux usages d'internet, nous avons conçu un simulateur en ligne qui estime la consommation électrique et les rejets de gaz à effets de serre induits par ses usages. Une bonne base pour commencer si l'on souhaite réduire son impact efficacement !</p>
			</div>
			<div className="split">
				<div className="card">
					<div className="text">Je fais le test seul</div>
					<div className="anim"><Lottie anim="booking" /></div>
					<Link className="btn" to="/simulate">C'est parti</Link>
				</div>
				<div className="card">
					<div className="text">Je fais le test en groupe</div>
					<div className="anim"><Lottie anim="friends" /></div>
					<Link className="btn" to="/session">Créer un groupe</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
