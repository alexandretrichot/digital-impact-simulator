import ApiError from './ApiError';

export default class NotFoundError extends ApiError {
	constructor(message = 'Not Found') {
		super(message, 404);

		this.name = 'NotFoundError';
	}
}