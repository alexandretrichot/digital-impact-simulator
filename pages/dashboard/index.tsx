import { useState } from 'react';
import { useRouter } from 'next/router';

import { gql, useMutation, useQuery } from '@apollo/client';

const CREATE_SESSION = gql`
mutation CreateSession {
  createSession
}
`;

const GET_SESSION = gql`
query GetSession($id: ID!) {
  getSession(id: $id) {
    id
  }
}
`;


export default function DashboardPortal() {
  const router = useRouter();
  const [sessionId, setSessionId] = useState('');

  const [createSession, { loading, data }] = useMutation(CREATE_SESSION);

  const { loading: qLoading, error, data: qData } = useQuery(GET_SESSION, { variables: { id: sessionId } });

  return <div className="dashboard-portal">
    <div className="box">
      <h1>Dashboard</h1>
      <section>
        <h2>Créer une session</h2>
        {loading ? <div>Chargement</div> : (
          data ? <a className="btn" href={`/dashboard/${data.createSession}`}>Rejoindre la session</a> :
            <button onClick={() => createSession()} className="btn">Créer un session</button>
        )}
      </section>
      <section>
        <h2>Ou, Rejoindre une session existante</h2>
        <input type="text" placeholder="Id de la session" value={sessionId} onChange={ev => setSessionId(ev.target.value)} />

        {qLoading ? <div>Recherche...</div> : (
          qData ? <a className="btn" href={`/dashboard/${qData.getSession.id}`}>Rejoindre la session</a> :
            <div>Pas de session</div>
        )}
      </section>
    </div>
  </div>
}
