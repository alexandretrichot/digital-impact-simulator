import ApiError from './ApiError';

export default class ArgsError extends ApiError {
	constructor(message = 'Bad Request') {
		super(message, 400);

		this.name = 'ArgsError';
	}
}