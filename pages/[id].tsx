import { useState } from 'react';

import { useRouter } from 'next/router';

import { gql, useMutation, useQuery } from '@apollo/client';

import Simulator from '../components/simulator';

const GET_SESSION = gql`
query GetSession($id: ID!) {
  getSession(sessionId: $id) {
    id
  }
}
`;

const CREATE_USER = gql`
mutation CreateUser($name: String!, $sessionId: ID!) {
  createUser(name: $name, sessionId: $sessionId) {
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
      youtubeMinutes
      netflixMinutes
    }
  }
}
`;

const ADD_USER_TO_SESSION = gql`
query GetSession($id: ID!) {
  getSession(sessionId: $id) {
    id
  }
}
`;

const UPDATE_USER = gql`
mutation UpdateUser($userId: ID!, $user: UserInput!) {
  updateUser(
    userId: $userId
    user: $user
  )
}
`;


export default function SessionSimulator(props: { sessionId: string }) {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const session = useQuery(GET_SESSION, { variables: { id: router.query.id || props.sessionId } });

  const [createUser, createUserHooks] = useMutation(CREATE_USER, { variables: { name: username, sessionId: router.query.id } });

  if (session.loading) return <div>loading</div>;
  return <section>
    {session.loading ? "Loading session" : (session.error ? `Une erreur est survenue lors de la vérification de la session: ${session.error.message}` : (!session.data.getSession ? `Cette session n'existe plus ou a été supprimée` : createUserHooks.loading ? 'Création...' : (!createUserHooks.called ? <>
      < p > Entrez votre nom pour acceder à la session.</p >
      <input type="text" placeholder="Jean Dupond" value={username} onChange={ev => setUsername(ev.target.value as string)} />
      <button onClick={() => username.length > 2 && createUser()} disabled={username.length < 3}>Commencer</button>
    </> : <SimulatorWrapper user={createUserHooks.data.createUser} />)))}
  </section >
}

export function getServerSideProps(context: any) {
  return { props: { sessionId: context.query.id } }
}

function SimulatorWrapper(props: { user: { id: string, name: string, stats: any } }) {

  console.log(props.user);

  const [stats, setStats] = useState(props.user.stats);
  const [updateUser, mutation] = useMutation(UPDATE_USER, { variables: { userId: props.user.id, user: { name: props.user.name, stats: stats } } });

  const startTimeout = useTimer(() => {
    console.log('Send to server');
    updateUser();
  }, 1000);

  mutation.error && console.log(JSON.parse(JSON.stringify(mutation.error)))

  return <Simulator stats={stats} onUpdateStats={updatedStats => {
    setStats(updatedStats);
    startTimeout();
  }} />
}

function useTimer(onUpdate: () => void, time: number) {
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  return () => {
    window.clearTimeout(timeoutId);
    setTimeoutId(window.setTimeout(onUpdate, time))
  };
}
