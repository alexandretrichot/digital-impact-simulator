import { useState } from 'react';

import Head from 'next/head';

import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const CREATE_SESSION = gql`
mutation CreateSession($name: String!) {
  createSession(name: $name)
}
`;

const GET_SESSION = gql`
query GetSession($id: ID!) {
  getSession(sessionId: $id) {
    id,
    name
  }
}
`;


export default function DashboardPortal() {
  const router = useRouter();
  const [sessionName, setSessionName] = useState('');
  const [sessionId, setSessionId] = useState('');

  const [createSession, createSessionHook] = useMutation(CREATE_SESSION, {
    onCompleted: data => {
      router.push(`/dashboard/${data.createSession}`);
    }
  });

  const query = useQuery(GET_SESSION, { variables: { id: sessionId } });

  return <div className="dashboard-portal">
    <Head>
      <title>Dashboard | Pollution Numérique</title>
    </Head>
    <div className="portal">
      <h1>Aperçu de session</h1>
      <div className="title">Créer une session</div>
      {createSessionHook.loading ? <div>Chargement</div> : <div className="form">
        <input type="text" placeholder="Nom de session" value={sessionName} onChange={ev => setSessionName(ev.target.value)} />
        <button disabled={!sessionName} onClick={() => sessionName.length && createSession({ variables: { name: sessionName } })} className="btn">Créer</button>
      </div>}
      <div className="separator">OU</div>
      <div className="title">Rejoindre une session existante</div>
      <div className="form">
        <input type="text" placeholder="Id de la session" value={sessionId} onChange={ev => setSessionId(ev.target.value)} />
        <button className="btn" disabled={!query.data} onClick={() => query.data && router.push(`/dashboard/${query.data.getSession.id}`)}>{query.loading ? 'Recherche...' : 'Ouvir'}</button>
      </div>
    </div>
  </div>
}
