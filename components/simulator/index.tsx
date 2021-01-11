import { useState, PropsWithChildren } from 'react';

import Head from 'next/head';

import SearchesSection from './Searches';
import EmailsSection from './Emails';
import SocialsSection from './Socials';
import GamesSection from './Games';
import StreamingSection from './Streaming';

import Result from './Result';
import Intro from '../Intro';

type Props = {
  stats: Stats,
  onUpdateStats: (stats: Stats) => void,
}

type Stats = {
  searches: number,
  emailsSent: number,
  emailsReceived: number,
  emailsStored: number,
  instagramPics: number,
  snapchatPics: number,
  gamesMinutes: number,
  youtubeMinutes: number,
  netflixMinutes: number
}

export default function Simulator(props: PropsWithChildren<Props>) {
  return <div className="simulator">
    <Head>
      <title>Pollution Numérique | Simulateur d'impact</title>
    </Head>
    <Intro />
    <SearchesSection
      searches={props.stats.searches} onUpdateSearches={value => props.onUpdateStats({ ...props.stats, searches: value })} />
    <EmailsSection
      emailsSent={props.stats.emailsSent} onUpdateSent={value => props.onUpdateStats({ ...props.stats, emailsSent: value })}
      emailsReceived={props.stats.emailsReceived} onUpdateReceived={value => props.onUpdateStats({ ...props.stats, emailsReceived: value })}
      emailsStored={props.stats.emailsStored} onUpdateStored={value => props.onUpdateStats({ ...props.stats, emailsStored: value })} />
    <SocialsSection
      instagramPics={props.stats.instagramPics} onUpdateInstagram={value => props.onUpdateStats({ ...props.stats, instagramPics: value })}
      snapchatPics={props.stats.snapchatPics} onUpdateSnapchat={value => props.onUpdateStats({ ...props.stats, snapchatPics: value })} />
    <GamesSection
      gamesMinutes={props.stats.gamesMinutes} onUpdateGame={value => props.onUpdateStats({ ...props.stats, gamesMinutes: value })} />
    <StreamingSection
      youtubeMinutes={props.stats.youtubeMinutes} onUpdateYoutube={value => props.onUpdateStats({ ...props.stats, youtubeMinutes: value })}
      netflixMinutes={props.stats.netflixMinutes} onUpdateNetflix={value => props.onUpdateStats({ ...props.stats, netflixMinutes: value })} />

    <Result />
  </div>
}