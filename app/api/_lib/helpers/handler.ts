import { VercelRequest, VercelResponse } from '@vercel/node';
import ApiError from '../errors/ApiError';

export default (handler: (req: VercelRequest, res: VercelResponse) => Promise<any>) => {
	return (req: VercelRequest, res: VercelResponse) => {
		handler(req, res).then(r => {
			if (!res.writableEnded) {
				if (typeof r === 'object') {
					res.json(r);
				} else {
					res.end(r);
				}
			}
		}).catch(err => {
			if (err instanceof ApiError) {
				res.statusCode = err.statusCode;
				res.json({
					error: err.name,
					message: err.message
				});
			} else {
				console.error(err);

				res.statusCode = 500;
				res.json({
					error: 'Server Error',
					message: 'An unknown error has occurred'
				});
			}
		});
	};
}
