import { Stats } from '../types';

export const getDefaultStats = (): Stats => ({
	searches: 0,
	emailsReceived: 0,
	emailsSent: 0,
	instagramPics: 0,
	snapchatPics: 0,
	onlineGamesMinutes: 0,
	cloudGamesMinutes: 0,
	youtubeMinutes: 0,
	netflixMinutes: 0,
	musicMinutes: 0,
});