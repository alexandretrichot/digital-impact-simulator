import { VercelRequest } from '@vercel/node';
import ArgsError from '../errors/ArgsError';

export const getBody = (req: VercelRequest) => {
	if (typeof req.body === 'object') {
		return req.body;
	} else if (typeof req.body === 'string') {
		return JSON.parse(req.body);
	} else {
		throw new ArgsError('Invalid body');
	}
};
