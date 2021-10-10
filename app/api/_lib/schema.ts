import Joi from 'joi';
import { Stats } from './types';

export const statsSchema = Joi.object<Stats>({
	searches: Joi.number().min(0).max(10000).required(),
	emailsReceived: Joi.number().min(0).max(10000).required(),
	emailsSent: Joi.number().min(0).max(10000).required(),
	instagramMinutes: Joi.number().min(0).max(10000).required(),
	snapchatMinutes: Joi.number().min(0).max(10000).required(),
	tiktokMinutes: Joi.number().min(0).max(10000).required(),
	facebookMinutes: Joi.number().min(0).max(10000).required(),
	onlineGamesMinutes: Joi.number().min(0).max(10000).required(),
	cloudGamesMinutes: Joi.number().min(0).max(10000).required(),
	youtubeMinutes: Joi.number().min(0).max(10000).required(),
	netflixMinutes: Joi.number().min(0).max(10000).required(),
	musicMinutes: Joi.number().min(0).max(10000).required(),
});

export type SessionInput = {
	age?: string;
	stats: Stats,
	email?: string,
	emailDate?: Date,
	from?: string,
};

export const sessionSchema = Joi.object<SessionInput>({
	age: Joi.string(),
	stats: statsSchema.required(),
	email: Joi.string().email(),
	emailDate: Joi.date(),
	from: Joi.string(),
});

export type GroupInput = {
	name?: string,
	slug: string,
}

export const createGroupSchema = Joi.object<GroupInput>({
	name: Joi.string(),
	slug: Joi.string().lowercase().alphanum().required()
});

export type MemberUpdate = {
	name?: string,
	stats: Stats,
}

export const memberUpdateSchema = Joi.object<MemberUpdate>({
	name: Joi.string(),
	stats: statsSchema.required(),
});