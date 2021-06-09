import { CategorizedStats, Stats } from './types';
import value from './values';

export function getGesStats(stats: Stats): CategorizedStats {
	return {
		searches: Number(stats.searches) * value.ges.search,
		emails: (Number(stats.emailsSent) + Number(stats.emailsReceived)) * value.ges.email,
		socials: Number(stats.instagramPics) * value.ges.instagram + Number(stats.snapchatPics) * value.ges.snapchat,
		games: Number(stats.onlineGamesMinutes) * value.ges.onlineGame + Number(stats.cloudGamesMinutes) * value.ges.cloudGaming,
		streaming: Number(stats.musicMinutes) * value.ges.music + Number(stats.youtubeMinutes) * value.ges.youtube + Number(stats.netflixMinutes) * value.ges.netflix,
	}
}

export function getKWhStats(stats: Stats): CategorizedStats {
	return {
		searches: Number(stats.searches) * value.kwh.search,
		emails: (Number(stats.emailsSent) + Number(stats.emailsReceived)) * value.kwh.email,
		socials: Number(stats.instagramPics) * value.kwh.instagram + Number(stats.snapchatPics) * value.kwh.snapchat,
		games: Number(stats.onlineGamesMinutes) * value.kwh.onlineGame + Number(stats.cloudGamesMinutes) * value.kwh.cloudGaming,
		streaming: Number(stats.musicMinutes) * value.kwh.music + Number(stats.youtubeMinutes) * value.kwh.youtube + Number(stats.netflixMinutes) * value.kwh.netflix,
	}
}
