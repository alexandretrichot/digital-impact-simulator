import Joi from 'joi';
import { Stats } from './types';

export type SessionInput = {
	stats: Stats,
	email?: string,
};

export const sessionSchema = Joi.object<SessionInput>({
	stats: Joi.object<Stats>({
		searches: Joi.number().min(0).max(10000).required(),
		emailsReceived: Joi.number().min(0).max(10000).required(),
		emailsSent: Joi.number().min(0).max(10000).required(),
		instagramPics: Joi.number().min(0).max(10000).required(),
		snapchatPics: Joi.number().min(0).max(10000).required(),
		onlineGamesMinutes: Joi.number().min(0).max(10000).required(),
		cloudGamesMinutes: Joi.number().min(0).max(10000).required(),
		youtubeMinutes: Joi.number().min(0).max(10000).required(),
		netflixMinutes: Joi.number().min(0).max(10000).required(),
		musicMinutes: Joi.number().min(0).max(10000).required(),
	}).required(),
	email: Joi.string().email(),
});
