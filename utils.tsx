import value from './values';
import { UserStats } from './lib/models/User';
import { ReactNode } from 'react';

export function getGesStats(stats: UserStats) {
  return {
    searches: stats.searches * value.ges.search,
    emails: (stats.emailsSent + stats.emailsReceived) * value.ges.email,
    socials: stats.instagramPics * value.ges.instagram + stats.snapchatPics * value.ges.snapchat,
    games: stats.gamesMinutes * value.ges.onlineGame + stats.cloudGamesMinutes * value.ges.cloudGaming,
    streaming: stats.spotifyMinutes * value.ges.spotify + stats.youtubeMinutes * value.ges.youtube + stats.netflixMinutes * value.ges.netflix
  }
}

export function getKWhStats(stats: UserStats) {
  return {
    searches: stats.searches * value.kwh.search,
    emails: (stats.emailsSent + stats.emailsReceived) * value.kwh.email,
    socials: stats.instagramPics * value.kwh.instagram + stats.snapchatPics * value.kwh.snapchat,
    games: stats.gamesMinutes * value.kwh.onlineGame + stats.cloudGamesMinutes * value.kwh.cloudGaming,
    streaming: stats.spotifyMinutes * value.kwh.spotify + stats.youtubeMinutes * value.kwh.youtube + stats.netflixMinutes * value.kwh.netflix
  }
}

export function formatKWh(value: number): ReactNode {
  const isWh = value < 1;
  const isGWh = value >= 1000;

  return <>
    <b>{isGWh ? (value / 1000).toLocaleString() : (isWh ? (value * 1000).toLocaleString() : value.toLocaleString())}</b>
    {isGWh ? ' GWh' : (isWh ? ' Wh' : ' kWh')}
  </>;
}

export function formatGES(value: number): ReactNode {
  const isKg = value >= 1000;
  const isTonne = value >= 1000000;

  return <>
    <b>{isTonne ? (value / 1000000).toLocaleString() : (isKg ? (value / 1000).toLocaleString() : value.toLocaleString())}</b>
    {isTonne ? ' tonne' + ((value / 1000000) >= 2 && 's') : (isKg ? ' Kg' : ' g')} de CO<sub>2</sub>
  </>;
}