import { useState } from 'react';
import Simulator from '../components/simulator';

export default function Home() {
  const [stats, setStats] = useState({
    searches: 0,
    emailsSent: 0,
    emailsReceived: 0,
    emailsStored: 0,
    instagramPics: 0,
    snapchatPics: 0,
    gamesMinutes: 0,
    youtubeMinutes: 0,
    netflixMinutes: 0
  });

  return <Simulator stats={stats} onUpdateStats={setStats} />
}
