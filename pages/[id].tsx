import { useState } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import { gql, useMutation, useQuery } from '@apollo/client';

import Simulator from '../components/simulator';
import Loader from '../components/Loader';
import Error from '../components/Error';

const GET_SESSION = gql`
query GetSession($id: ID!) {
  getSession(sessionId: $id) {
    id,
    name
  }
}
`;

const GET_USER = gql`
query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    name
  }
}
`

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
mutation AddUserToSession($sessionId: ID!, $userId: ID!) {
  addUserToSession(sessionId: $sessionId, userId: $userId) {
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

  const [createUser, createUserHooks] = useMutation(CREATE_USER, {
    variables: { name: username, sessionId: router.query.id }, onCompleted: data => {
      localStorage.setItem('userId', data.createUser.id);
    }
  });

  const [addUser, addUserHooks] = useMutation(ADD_USER_TO_SESSION, { variables: { sessionId: router.query.id, userId: localStorage.getItem('userId') } });

  let savedUser: any;
  if (localStorage.getItem('userId')) {
    savedUser = useQuery(GET_USER, { variables: { userId: localStorage.getItem('userId') } });
  }

  savedUser.error && console.log(JSON.parse(JSON.stringify(savedUser.error)))

  return <>
    <Head>
      <title>Rejoindre une session | Pollution numérique</title>
    </Head>

    {(createUserHooks.data || addUserHooks.data) ? <SimulatorWrapper user={createUserHooks.data && createUserHooks.data.createUser || addUserHooks.data && addUserHooks.data.addUserToSession} /> :
      <section className="session-portal">
        {session.loading ? <Loader>Chargement de la session...</Loader> : (session.error ? <Error details={session.error.message}>Impossible de vérifier la session</Error> : (!session.data.getSession ? <Error>Cette session n'existe plus ou a été supprimée</Error> : createUserHooks.loading ? <Loader>Création...</Loader> : (!createUserHooks.called ? <>
          <div className="portal">
            <div className="session-title">{session.data.getSession.name}</div>
            {localStorage.getItem('userId') && !savedUser.error && (savedUser.loading ? <Loader>Vérification de l'utilisateur...</Loader> : <>
              <div className="text">Continuer en temps que {savedUser.data.getUser.name}</div>
              <button className="btn" onClick={() => addUser()}>Continuer</button>

              <div className="separator">OU</div>
            </>)}
            <div>{localStorage.getItem('userId') && !savedUser.error ? 'Créez un nouveau profil' : 'Entrez votre nom pour acceder à la session.'}</div>
            <div className="form">
              <input type="text" placeholder="Jean Dupond" value={username} onChange={ev => setUsername(ev.target.value as string)} />
              <button className="btn" onClick={() => username.length > 2 && createUser()} disabled={username.length < 3}>Commencer</button>
            </div>

          </div>
        </> : null)))}
      </section>}
  </>;
}

export function getServerSideProps(context: any) {
  return { props: { sessionId: context.query.id } }
}

function SimulatorWrapper(props: { user: { id: string, name: string, stats: any } }) {

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
