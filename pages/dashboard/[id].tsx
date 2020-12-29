import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetchSession } from '../../lib/fetchers';

import { types } from '../../values';
import Graph from '../../components/Graph';

const sessionData = {
  users: [
    {
      name: "Alexandre Trichot",
      stats: {
        searches: 20,
        emailsSent: 10,
        emailsReceived: 20,
        emailsStored: 4000,
        instagramPics: 10,
        snapchatPics: 10,
        gamesMinutes: 60,
        youtubeMinutes: 10,
        netflixMinutes: 0
      }
    },
  ]
}

export default function sessionDashboard() {
  const router = useRouter();

  const { data, error } = useSWR(router.query.id as string, fetchSession, { refreshInterval: 2000 });

  if (error) return <div>Impossible de trouver la session '{router.query.id}'</div>
  if (!data) return <div>Chargement...</div>

  return <div id="dashboard">
    <header>
      <h1>Session : {router.query.id ? router.query.id : ''}</h1>
      <div className="legendary">
        {Object.keys(types).map(i => <div key={i} className="item">
          <div className="color" style={{ backgroundColor: types[i].color }}></div>
          <div className="name">{types[i].name}</div>
        </div>)}
      </div>
    </header>
    <section className="users">
      <div className="list">
        {sessionData.users.map(u => <div className="user">
          <div className="username">{u.name}</div>
          <Graph stats={u.stats} />
        </div>)}
      </div>
    </section>
  </div>;
}
