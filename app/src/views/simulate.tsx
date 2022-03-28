import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router';

import Simulator from '../components/simulation/simulator';
import EmailCTA from '../components/misc/emailCTA';

import { Session } from '../types';
import { fetcher, useFetchSession } from '../helpers/fetch';
import { useDebounce } from '../helpers/hooks';
import Error from '../components/error';
import Loader from '../components/loader';
import Info from '../components/misc/info';
import Share from '../components/misc/share';

export const SimulatePage: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const compareTo = params.get('compareTo');
  const self = params.has('self');

  const compare = useFetchSession(compareTo);

  const { session, isLoading, error, setSession } = useSession();

  return (
    <div id='simulate'>
      {isLoading ? (
        <div className='wrapper'>
          <Loader>Chargement de la session</Loader>
        </div>
      ) : session ? (
        <>
          <header className='wrapper'>
            <h2>Il est possible de connaître votre impact, c'est parti ?</h2>
            <p>
              Ce simulateur vous donnera une idée de l'impact global de votre usage d'internet sur la consommation électrique et sur les rejets de gaz à effet
              de serre dans l'atmosphère.
            </p>
            <br />

            {compare.data && (
              <Info>
                La session actelle sera comparée avec <b>{self ? 'vos précédents résultats' : 'les résultats de votre ami'}</b>.
              </Info>
            )}

            <div className={`age-container`}>
              <div className={`pre-text`}>Je suis agé de</div>
              <select value={session.age} onChange={(ev) => setSession({ ...session, age: ev.currentTarget.value })}>
                <option value={undefined}>sélectionnez</option>
                <option value={'<15'}>moins de 15 ans</option>
                <option value={'15-25'}>15 à 25 ans</option>
                <option value={'25-45'}>25 à 45 ans</option>
                <option value={'45-65'}>45 à 65 ans</option>
                <option value={'>65'}>plus de 65 ans</option>
              </select>
            </div>
          </header>

          <Simulator
            stats={session.stats}
            onStatsChange={(stats) => setSession({ age: session.age, stats, from: compareTo ? compareTo : undefined })}
            compareTo={compare.data ? { stats: compare.data.stats, self } : undefined}
          />

          <div className='wrapper'>
            <div>
              <p>
                Comme vous pouvez le constater, internet n'est pas "immatériel" comme on l'entend souvent : nos activités "dématérialisées" ont un impact bien
                réel.
              </p>
              <p>
                De façon invisible mais bien concrète, notre usage d'internet contribue à la surconsommation, au gaspillage de ressources, au dérèglement
                climatique et à des inégalités et injustices majeures...
              </p>
              <br />
              <p>
                Vous voulez en savoir plus ? Consultez{' '}
                <a href='https://meusenature.fr/publications/numerique' target='_blank' rel='noreferrer'>
                  notre brochure éditée en Août
                </a>
                .
              </p>
            </div>

            <EmailCTA
              scheduled={!!session.email}
              onSetEmail={(email) => setSession({ ...session, email, emailDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000) })}
            />

            <Share link={`${window.location.host}/simulate?compareTo=${session._id}`} />
          </div>
        </>
      ) : (
        <div className='wrapper'>
          <Error title={error ? (error.name === 'NotFoundError' ? `Cette session n'existe pas ou a été supprimée.` : error.message) : 'Erreur inconnue'}>
            <a href='/simulate' className='btn'>
              Nouvelle session
            </a>
          </Error>
        </div>
      )}
    </div>
  );
};

const useSession = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { sessionId } = useParams<'sessionId'>();
  const setSessionId = (id: string) => navigate(`/simulate/${id}${location.search}`);

  const [data, setData] = useState<Session | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  const debouncedSession = useDebounce(data, 2000);

  useEffect(() => {
    // hydrate
    fetcher<Session>(`/api/sessions/${sessionId ? sessionId : ''}`, sessionId ? 'GET' : 'POST')
      .then((r) => {
        if (!sessionId) setSessionId(r._id!);

        setData(r);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  useEffect(() => {
    // mutate
    if (debouncedSession) {
      fetcher<Session, Session>(`/api/sessions/${sessionId}`, 'PUT', {
        age: debouncedSession.age,
        stats: debouncedSession.stats,
        email: debouncedSession.email,
        emailDate: debouncedSession.emailDate,
        from: debouncedSession.from,
      }).catch(console.error);
    }
  }, [debouncedSession, sessionId]);

  return {
    session: data,
    isLoading: !data && !error,
    error,
    setSession: setData,
  };
};
