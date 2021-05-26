import Joi from 'joi';
import { Stats } from './types';

export type SessionInput = {
	stats: Stats,
	email?: string,
};

export const sessionSchema = Joi.object<SessionInput>({
	stats: Joi.object<Stats>({
		cloudGamesMinutes: Joi.number().positive().max(10000).required(),
		emailsReceived: Joi.number().positive().max(10000).required(),
		emailsSent: Joi.number().positive().max(10000).required(),
		instagramPics: Joi.number().positive().max(10000).required(),
		musicMinutes: Joi.number().positive().max(10000).required(),
		netflixMinutes: Joi.number().positive().max(10000).required(),
		onlineGamesMinutes: Joi.number().positive().max(10000).required(),
		searches: Joi.number().positive().max(10000).required(),
		snapchatPics: Joi.number().positive().max(10000).required(),
		youtubeMinutes: Joi.number().positive().max(10000).required(),
	}).required(),
	email: Joi.string().email(),
});
