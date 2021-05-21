import { useRouter } from 'next/router';
import Head from 'next/head';

import { useQuery, gql } from '@apollo/client';

import values, { types } from '../../values';
import Graph from '../../components/Graph';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import { User as UserType } from '../../lib/models/User';
import Nothing from '../../components/Nothing';
import { formatGES, formatKWh, getGesStats, getKWhStats } from '../../utils';

const GET_SESSION = gql`
query GetSession($id: ID!) {
  getSession(sessionId: $id) {
    id
    name
    users {
      id
      name
      stats {
        searches
        emailsSent
        emailsReceived
        emailsStored
        instagramPics
        snapchatPics
        gamesMinutes
        cloudGamesMinutes
        youtubeMinutes
        netflixMinutes
        spotifyMinutes
      }
    }
  }
}
`;

export default function sessionDashboard() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SESSION, { variables: { id: router.query.id }, pollInterval: 1000 });

  return <div id="dashboard">
    <Head>
      <title>Session | Pollution Numérique</title>
    </Head>

    {loading ? <Loader>Chargement de la session...</Loader> : (
      error ? <Error details={error.message}>Oups, il y a eu un problème</Error> : <>
        <header>
          <h1>Session : {data.getSession.name}</h1>
          <div className="link">Lien de session : <code>{`${location.host}/${data.getSession.id}`}</code></div>
          <div className="legendary">
            {Object.keys(types).map(i => <div key={i} className="item">
              <div className="color" style={{ backgroundColor: types[i].color }}></div>
              <div className="name">{types[i].name}</div>
            </div>)}
          </div>
        </header>
        <Users users={data.getSession.users.length > 1 ? data.getSession.users.slice().sort((a: UserType, b: UserType) => {
          const aSum = Object.values(getGesStats(a.stats)).reduce((a, b) => a + b);
          const bSum = Object.values(getGesStats(b.stats)).reduce((a, b) => a + b);

          return bSum - aSum;
        }) : data.getSession.users} sessionLink={`${location.host}/${data.getSession.id}`} />
      </>
    )}
  </div>;
}

function Users(props: { users: UserType[], sessionLink: string }) {
  const kwhTotals = props.users.map(u => Object.values(getKWhStats(u.stats)).reduce((a, b) => a + b));
  const gesTotals = props.users.map(u => Object.values(getGesStats(u.stats)).reduce((a, b) => a + b));

  const maxGES = Math.max(...gesTotals);

  return <section className="users">
    <div className="list">
      {props.users.map((u, index) => <div key={u._id} className="user">
        <div className="username">{u.name}</div>
        <br />
        <div>{formatKWh(kwhTotals[index] * 365)} {formatGES(gesTotals[index] * 365)} </div>
        <div><b>{Math.round(kwhTotals[index] * 365 / values.frigoPerYear)} frigos</b> par an et <b>{Math.round(gesTotals[index] * 365 / values.gesPerKmInCar).toLocaleString()} Km</b> en voiture</div>
        <div style={{width: gesTotals[index] / maxGES * 100 + '%'}}><Graph stats={getGesStats(u.stats)} /></div>
        <br/>
      </div>)}
    </div>
    {props.users.length < 1 && <Nothing title="Il n'y a personne dans cette session pour le moment">
      <br />
      <div className="link">Pour rejoindre : <code>{props.sessionLink}</code></div>
    </Nothing>}
  </section>;
}
