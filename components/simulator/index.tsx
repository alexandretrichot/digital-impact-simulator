import { PropsWithChildren } from 'react';

import Head from 'next/head';

import SearchesSection from './Searches';
import EmailsSection from './Emails';
import SocialsSection from './Socials';
import GamesSection from './Games';
import StreamingSection from './Streaming';

import Result from './Result';
import Intro from '../Intro';

import { UserStats } from '../../lib/models/User';
import Wave from './Wave';

type Props = {
  stats: UserStats,
  onUpdateStats: (stats: UserStats) => void,
}

export default function Simulator(props: PropsWithChildren<Props>) {
  return <div className="simulator">
    <Head>
      <title>Pollution Numérique | Simulateur d'impact</title>
    </Head>
    <Intro />
    <Wave />
    <SearchesSection
      searches={props.stats.searches} onUpdateSearches={value => props.onUpdateStats({ ...props.stats, searches: value })} />
    <Wave />
    <EmailsSection
      emailsSent={props.stats.emailsSent} onUpdateSent={value => props.onUpdateStats({ ...props.stats, emailsSent: value })}
      emailsReceived={props.stats.emailsReceived} onUpdateReceived={value => props.onUpdateStats({ ...props.stats, emailsReceived: value })}
      emailsStored={props.stats.emailsStored} onUpdateStored={value => props.onUpdateStats({ ...props.stats, emailsStored: value })} />
    <Wave />
    <SocialsSection
      instagramPics={props.stats.instagramPics} onUpdateInstagram={value => props.onUpdateStats({ ...props.stats, instagramPics: value })}
      snapchatPics={props.stats.snapchatPics} onUpdateSnapchat={value => props.onUpdateStats({ ...props.stats, snapchatPics: value })} />
    <Wave />
    <GamesSection
      onlineGameMinutes={props.stats.gamesMinutes} onUpdateOnlineGame={value => props.onUpdateStats({ ...props.stats, gamesMinutes: value })}
      cloudGamingMinutes={props.stats.cloudGamesMinutes} onUpdateCloudGaming={value => props.onUpdateStats({ ...props.stats, cloudGamesMinutes: value })} />
    <Wave />
    <StreamingSection
      youtubeMinutes={props.stats.youtubeMinutes} onUpdateYoutube={value => props.onUpdateStats({ ...props.stats, youtubeMinutes: value })}
      netflixMinutes={props.stats.netflixMinutes} onUpdateNetflix={value => props.onUpdateStats({ ...props.stats, netflixMinutes: value })}
      spotifyMinutes={props.stats.spotifyMinutes} onUpdateSpotify={value => props.onUpdateStats({ ...props.stats, spotifyMinutes: value })} />
    <Wave />
    <Result stats={props.stats} />
  </div>
}