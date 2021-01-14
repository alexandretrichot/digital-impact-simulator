import values, { types } from '../values';

import { UserStats } from '../lib/models/User';

type Props = {
  stats: UserStats
}

export default function Graph(props: Props) {
  const vals = {
    searches: props.stats.searches * values.search,
    emails: props.stats.emailsReceived * values.email + props.stats.emailsSent + props.stats.emailsStored * 0, // /!\
    social: props.stats.instagramPics * values.instagram + props.stats.snapchatPics * values.snapchat,
    games: props.stats.gamesMinutes * values.onlineGame + props.stats.cloudGamesMinutes * values.cloudGaming,
    streaming: props.stats.netflixMinutes * values.netflix + props.stats.youtubeMinutes * values.youtube + props.stats.spotifyMinutes * values.spotify,
  }

  const total = Object.values(vals).reduce((a, b) => (a || 0) + b)

  return <div className="graph">
    <div className="segments">
      <div className="segment" style={{height: vals.searches / total * 100 + "%", backgroundColor: types.searches.color}}></div>
      <div className="segment" style={{height: vals.emails / total * 100 + "%", backgroundColor: types.emails.color}}></div>
      <div className="segment" style={{height: vals.social / total * 100 + "%", backgroundColor: types.social.color}}></div>
      <div className="segment" style={{height: vals.games / total * 100 + "%", backgroundColor: types.games.color}}></div>
      <div className="segment" style={{height: vals.streaming / total * 100 + "%", backgroundColor: types.streaming.color}}></div>
    </div>
  </div>
}