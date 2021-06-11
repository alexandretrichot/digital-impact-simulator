import { CategorizedStats, Stats } from './types';
import value from './values';

export function getGesStats(stats: Stats): CategorizedStats {
	return {
		searches: Number(stats.searches) * value.ges.search,
		emails: (Number(stats.emailsSent) + Number(stats.emailsReceived)) * value.ges.email,
		socials: Number(stats.instagramMinutes) * value.ges.instagram + Number(stats.snapchatMinutes) * value.ges.snapchat + Number(stats.tiktokMinutes) * value.ges.tiktok + Number(stats.facebookMinutes) * value.ges.facebook,
		games: Number(stats.onlineGamesMinutes) * value.ges.onlineGame + Number(stats.cloudGamesMinutes) * value.ges.cloudGaming,
		streaming: Number(stats.musicMinutes) * value.ges.music + Number(stats.youtubeMinutes) * value.ges.youtube + Number(stats.netflixMinutes) * value.ges.netflix,
	}
}

export function getKWhStats(stats: Stats): CategorizedStats {
	return {
		searches: Number(stats.searches) * value.kwh.search,
		emails: (Number(stats.emailsSent) + Number(stats.emailsReceived)) * value.kwh.email,
		socials: Number(stats.instagramMinutes) * value.kwh.instagram + Number(stats.snapchatMinutes) * value.kwh.snapchat + Number(stats.tiktokMinutes) * value.kwh.tiktok + Number(stats.facebookMinutes) * value.kwh.facebook,
		games: Number(stats.onlineGamesMinutes) * value.kwh.onlineGame + Number(stats.cloudGamesMinutes) * value.kwh.cloudGaming,
		streaming: Number(stats.musicMinutes) * value.kwh.music + Number(stats.youtubeMinutes) * value.kwh.youtube + Number(stats.netflixMinutes) * value.kwh.netflix,
	}
}
