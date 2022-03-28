import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetcher } from '../helpers/fetch';
import { Group, Member } from '../types';
import './dashboard.scss';
import Loader from '../components/loader';
import Graph from '../components/simulation/graph';
import Error from '../components/error';
import { Helmet } from 'react-helmet';
import { GES, KWh } from '../components/utils';
import { getGesStats, getKWhStats } from '../utils';
import values from '../values';
import Placeholder from '../components/misc/placeholder';

export const DashboardPage: React.FC = () => {
  const { groupSlug } = useParams<'groupSlug'>();

  const [group, setGroup] = useState<Group>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!groupSlug) return;
    let refetch = true;

    function go() {
      fetcher<Group>(`/api/groups/${groupSlug}`)
        .then((r) => setGroup(r))
        .catch((err) => {
          console.error(err);
          setError(err);
        })
        .finally(() =>
          setTimeout(() => {
            if (refetch) go();
          }, 1000)
        );
    }

    go();
    return () => {
      refetch = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupSlug]);

  const sortedMembers: Member[] = group
    ? group.members.length > 1
      ? group.members.slice().sort((a: Member, b: Member) => {
          const aSum = Object.values(getGesStats(a.stats)).reduce((a, b) => a + b);
          const bSum = Object.values(getGesStats(b.stats)).reduce((a, b) => a + b);

          return bSum - aSum;
        })
      : group.members
    : [];

  return (
    <div id='dashboard' className='page'>
      {!group && !error ? (
        <div className='wrapper'>
          <Loader>Chargement du groupe</Loader>
        </div>
      ) : error ? (
        <div className='wrapper'>
          {error.name === 'NotFoundError' ? (
            <Error title='Groupe non trouvé' details="Il semble que ce group n'existe pas..." anim='404'>
              <Link to='/session' className='btn'>
                Retour à l'accueil
              </Link>
            </Error>
          ) : (
            <Error title={error.message} />
          )}
        </div>
      ) : (
        group && (
          <>
            <Helmet>
              <title>{group.name} | Simulateur d'impact</title>
            </Helmet>
            {groupSlug && <DashboardPanel groupSlug={groupSlug} groupName={group.name} members={sortedMembers} />}
          </>
        )
      )}
    </div>
  );
};

const DashboardPanel: React.FC<{
  groupSlug: string;
  groupName: string;
  members: Member[];
}> = (props) => {
  const kwhTotals = props.members.map((m) => Object.values(getKWhStats(m.stats)).reduce((a, b) => a + b));
  const gesTotals = props.members.map((m) => Object.values(getGesStats(m.stats)).reduce((a, b) => a + b));

  const maxGES = Math.max(...gesTotals);

  const joinLink = `${window.location.host}/session/${props.groupSlug}`;

  return (
    <>
      <div className='wrapper'>
        <header>
          <h1>Groupe : {props.groupName}</h1>
          <div className='link'>
            Lien du groupe : <code>{joinLink}</code>
          </div>
        </header>
      </div>
      <div className='wrapper large'>
        <section className='members'>
          <div className='list'>
            {props.members.map((m, index) => (
              <div key={m.id} className='member'>
                <div>
                  <div className='username'>{m.name || <Placeholder>Sans nom</Placeholder>}</div>
                  <div className='' style={{ width: (gesTotals[index] / maxGES) * 100 + '%' }}>
                    <Graph stats={getGesStats(m.stats)} />
                  </div>
                </div>
                <div className='details'>
                  <div>
                    <KWh value={kwhTotals[index] * 365} />, <GES value={gesTotals[index] * 365} />
                  </div>
                  <div>
                    <b>{Math.round((kwhTotals[index] * 365) / values.frigoPerYear)} réfrigérateurs</b>,{' '}
                    <b>{Math.round((gesTotals[index] * 365) / values.gesPerKmInCar).toLocaleString()} km</b> par an
                  </div>
                </div>
              </div>
            ))}
          </div>
          {props.members.length < 1 && (
            <div>
              <h3>Il n'y a personne dans ce groupe pour le moment</h3>
            </div>
          )}
        </section>
      </div>
    </>
  );
};
