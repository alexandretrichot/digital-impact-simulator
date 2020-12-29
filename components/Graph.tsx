import values, { types } from '../values';

type Props = {
  stats: {
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
}

export default function Graph(props: Props) {
  const vals = {
    searches: props.stats.searches * values.gramPerSearch,
    emails: props.stats.emailsReceived * values.gramPerEmail + props.stats.emailsSent + props.stats.emailsStored * values.gramPerEmailSleep,
    social: props.stats.instagramPics * values.gramPerPhoto + props.stats.snapchatPics * values.gramPerPhoto,
    games: props.stats.gamesMinutes * values.gramPerGameMinute,
    streaming: props.stats.netflixMinutes * values.gramPerStreamMinute + props.stats.youtubeMinutes * values.gramPerStreamMinute,
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