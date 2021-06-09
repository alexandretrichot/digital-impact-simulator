import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../components/error';

const NotFoundPage: React.FC = () => {
	return (
		<div className="wrapper">
			<Error title="Page non trouvée" details="Oups, je crois que nous nous sommes égarés..." anim="404" >
				<Link to='/' className="btn">Retour à l'accueil</Link>
			</Error>
		</div>
	);
};

export default NotFoundPage;
