import { ObjectId } from 'mongodb';

export type Stats = {
	searches: number,
	emailsSent: number,
	emailsReceived: number,
	instagramPics: number,
	snapchatPics: number,
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
	email?: string
};


export type Room = {
	_id?: ObjectId,
	name: string,
	slug: string,
	passcode: number,
	sessions: Session[],
};
