import { ObjectId } from 'mongodb';

export type Stats = {
	searches: number,
	emailsSent: number,
	emailsReceived: number,
	instagramMinutes: number,
	snapchatMinutes: number,
	tiktokMinutes: number,
	facebookMinutes: number,
	onlineGamesMinutes: number,
	cloudGamesMinutes: number,
	youtubeMinutes: number,
	netflixMinutes: number,
	musicMinutes: number,
};

export type Session = {
	_id?: ObjectId,
	stats: Stats,
	createdAt: Date,
	updatedAt: Date,
	email?: string,
	emailDate?: Date,
	from?: string,
};

export type Group = {
	_id?: ObjectId,
	name: string,
	slug: string,
	members: Member[],
	createdAt: Date,
	updatedAt: Date,
};

export type Member = {
	id: string,
	stats: Stats,
	name?: string,
}
