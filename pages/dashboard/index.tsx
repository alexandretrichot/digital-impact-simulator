import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchSession } from '../../lib/fetchers';

export default function dashboard() {
  const router = useRouter();
  const [id, setId] = useState("");

  return <div>
    To do
  </div>
}
