import { useState, PropsWithChildren } from 'react';

import Lottie from "lottie-react";

import SearchesSection from './Searches';
import EmailsSection from './Emails';
import SocialsSection from './Socials';
import GamesSection from './Games';
import StreamingSection from './Streaming';

import Result from './Result';

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
    <header id="intro">
      <h1>Simulateur d'impact carbone</h1>
      <div style={{ float: 'right', width: '40%' }}>
        <Lottie animationData={require('../../assets/animations/booking.json')} />
      </div>
      <p style={{ maxWidth: "500px" }}>Vous êtes-vous déjà demandés si votre consomation d’internet avait un impact sur l’environnement ? Et si vous vous êtes posé la question, avez-vous une idée de ce que cela représente ?</p>
      <p>On vous propose d'y jeter un oeil !</p>
      <a className="btn" href="#search">Faire le test !</a>
      {props.children}
    </header>
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