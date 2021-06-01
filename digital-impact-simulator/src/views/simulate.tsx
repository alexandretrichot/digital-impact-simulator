import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import Simulator from '../components/simulation/simulator';
import EmailCTA from '../components/misc/emailCTA';

import { Session } from '../types';
import { fetcher, useFetchSession } from '../helpers/fetch';
import { useDebounce } from '../helpers/hooks';
import Error from '../components/error';
import { Link } from 'react-router-dom';
import Loader from '../components/loader';

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
							{
								compare.data ? (
									<header className="wrapper">
										<div>Comparaison avec {self ? 'soit-même' : 'un ami'}</div>
										{/* Ajouter une introduction de page */}
									</header>
								) : null
							}
							<Simulator stats={session.stats} onStatsChange={stats => setSession({ ...session, stats })} compareTo={compare.data ? { stats: compare.data.stats, self } : undefined} />
							<div className="wrapper">
								<EmailCTA scheduled={!!session.email} onSetEmail={email => setSession({ ...session, email })} />
							</div>
						</>
					) : (
						error?.name === 'NotFoundError' ? (
							<div className="wrapper">
								<Error title="Cette session n'existe pas ou a été supprimée." >
									<Link to="/simulate" className="btn">Nouvelle session</Link>
								</Error>
							</div>
						) : (
							""
						)
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
	const setSessionId = (id: string) => history.replace(`/simulate/${id}`);
	
	const [data, setData] = useState<Session | undefined>(undefined);
	const [error, setError] = useState<Error | undefined>(undefined);

	const debouncedSession = useDebounce(data, 1000);

	useEffect(() => { // hydrate
		fetcher<Session>(`/api/sessions/${sessionId ? sessionId : ''}`, sessionId ? 'GET' : 'POST')
			.then(r => {
				if (!sessionId) setSessionId(r._id!);

				setData(r);
			})
			.catch(err => setError(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sessionId]);

	useEffect(() => { // mutate
		if (debouncedSession) {
			fetcher<Session, Session>(`/api/sessions/${sessionId}`, 'PUT', {
				stats: debouncedSession.stats,
				email: debouncedSession.email
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
