import value from './values';
import { UserStats } from './lib/models/User';

export function getGesStats(stats: UserStats) {
  return {
    searches: stats.searches * value.ges.search,
    emails: (stats.emailsSent + stats.emailsReceived) * value.ges.email,
    socials: stats.instagramPics * value.ges.instagram + stats.snapchatPics * stats.snapchatPics,
    games: stats.gamesMinutes * value.ges.onlineGame + stats.cloudGamesMinutes * value.ges.cloudGaming,
    streaming: stats.spotifyMinutes * value.ges.spotify + stats.youtubeMinutes * value.ges.youtube + stats.netflixMinutes * value.ges.netflix
  }
}

export function getKWhStats(stats: UserStats) {
  return {
    searches: stats.searches * value.kwh.search,
    emails: (stats.emailsSent + stats.emailsReceived) * value.kwh.email,
    socials: stats.instagramPics * value.kwh.instagram + stats.snapchatPics * stats.snapchatPics,
    games: stats.gamesMinutes * value.kwh.onlineGame + stats.cloudGamesMinutes * value.kwh.cloudGaming,
    streaming: stats.spotifyMinutes * value.kwh.spotify + stats.youtubeMinutes * value.kwh.youtube + stats.netflixMinutes * value.kwh.netflix
  }
}