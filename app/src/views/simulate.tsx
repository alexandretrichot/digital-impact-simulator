import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import Simulator from '../components/simulation/simulator';
import EmailCTA from '../components/misc/emailCTA';

import { Session } from '../types';
import { fetcher, useFetchSession } from '../helpers/fetch';
import { useDebounce } from '../helpers/hooks';
import Error from '../components/error';
import Loader from '../components/loader';
import Info from '../components/misc/info';
import Share from '../components/misc/share';

const SimulatePage: React.FC = () => {
	const { search } = useLocation();
	const params = new URLSearchParams(search);

	const compareTo = params.get('compareTo');
	const self = params.has('self');

	const compare = useFetchSession(compareTo);

	const { session, isLoading, error, setSession } = useSession();

	return (
		<div id="simulate">
			{
				isLoading ? (
					<div className="wrapper">
						<Loader>Chargement de la session</Loader>
					</div>
				) : (
					session ? (
						<>
							<header className="wrapper">
								<h2>Il est possible de connaître votre impact, c'est parti ?</h2>
								<p>Ce simulateur vous donnera une idée de l'impact global de votre usage d'internet sur la consommation électrique et sur les rejets de gaz à effet de serre dans l'atmosphère.</p>
								<br />

								{compare.data && (
									<Info>La session actelle sera comparé avec <b>{self ? 'vos précédents résultats' : 'les résultats de votre ami'}</b>.</Info>
								)}
							</header>

							<Simulator stats={session.stats} onStatsChange={stats => setSession({ stats, from: compareTo ? compareTo : undefined })} compareTo={compare.data ? { stats: compare.data.stats, self } : undefined} />

							<div className="wrapper">
								<div>
									<p>Comme vous pouvez le constater, internet n'est pas "immatériel" comme on l'entend souvent : nos activités "dématérialisées" ont un impact bien réel.</p>
									<p>De façon invisible mais bien concrète, notre utilisation d'internet est à l'origine de consommations d'électricité et de rejets de gaz à effet de serre conséquents, contribuant à la surconsommation, au gaspillage de ressources, au dérèglement climatique et à des inégalités et injustices majeures...</p>
									<p>Et la plupart de nos usages sont liés à des activités de loirirs et non des activités stratégiques, indispensables ou permettant a minima de contribuer à l'amélioration ou a préservation des conditions de vie sur Terre.</p>
									<br />
									<p>Vous voulez en savoir plus ? Vous avez envie de réduire votre impact ? Nous vous proposons de consulter <a href="#">cette brochure de 16 pages</a> sur les impacts environnementaux du numérique réalisée en 2021 par Meuse Nature Environnement.</p>
								</div>

								<EmailCTA scheduled={!!session.email} onSetEmail={email => setSession({ ...session, email, emailDate: new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000)) })} />
								<Share link={`${window.location.host}/simulate?compareTo=${session._id}`} />
							</div>
						</>
					) : (
						<div className="wrapper">
							<Error title={error ? (error.name === 'NotFoundError' ? `Cette session n'existe pas ou a été supprimée.` : error.message) : 'Erreur inconnue'} >
								<a href="/simulate" className="btn">Nouvelle session</a>
							</Error>
						</div>
					)
				)
			}
		</div>
	);
}

export default SimulatePage;

const useSession = () => {
	let history = useHistory();
	const { sessionId } = useParams<{ sessionId: string }>();
	const setSessionId = (id: string) => history.replace(`/simulate/${id}${history.location.search}`);

	const [data, setData] = useState<Session | undefined>(undefined);
	const [error, setError] = useState<Error | undefined>(undefined);

	const debouncedSession = useDebounce(data, 1000);

	useEffect(() => { // hydrate
		fetcher<Session>(`/api/sessions/${sessionId ? sessionId : ''}`, sessionId ? 'GET' : 'POST')
			.then(r => {
				if (!sessionId) setSessionId(r._id!);

				setData(r);
			})
			.catch(err => {
				console.error(err);
				setError(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sessionId]);

	useEffect(() => { // mutate
		if (debouncedSession) {
			fetcher<Session, Session>(`/api/sessions/${sessionId}`, 'PUT', {
				stats: debouncedSession.stats,
				email: debouncedSession.email,
				emailDate: debouncedSession.emailDate,
				from: debouncedSession.from
			})
				.catch(console.error);
		}
	}, [debouncedSession, sessionId]);

	return {
		session: data,
		isLoading: !data && !error,
		error,
		setSession: setData,
	};
}
