import values, { types } from '../values';

type Props = {
  stats: {
    searches: number,
    emails: number,
    socials: number,
    games: number,
    streaming: number,
  }
}

export default function Graph({ stats }: Props) {
  const total = Object.values(stats).reduce((a, b) => a + b)

  return <div className="graph">
    <div className="segments">
      <div className="segment" style={{ width: stats.searches / total * 100 + "%", backgroundColor: types.searches.color }}></div>
      <div className="segment" style={{ width: stats.emails / total * 100 + "%", backgroundColor: types.emails.color }}></div>
      <div className="segment" style={{ width: stats.socials / total * 100 + "%", backgroundColor: types.social.color }}></div>
      <div className="segment" style={{ width: stats.games / total * 100 + "%", backgroundColor: types.games.color }}></div>
      <div className="segment" style={{ width: stats.streaming / total * 100 + "%", backgroundColor: types.streaming.color }}></div>
    </div>
  </div>
}