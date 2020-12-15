import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetchSession } from '../../lib/fetchers';

export default function sessionDashboard() {
  const router = useRouter();

  const { data, error } = useSWR(router.query.id as string, fetchSession, { refreshInterval: 2000 });

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log('render');
  

  return <div id="dashboard">
    This is the dashboard
      <div>Session: {router.query.id ? router.query.session : 'null'}</div>
  </div>;
}
