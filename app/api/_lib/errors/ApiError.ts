export default class ApiError extends Error {
	constructor(message: string, public statusCode = 500) {
		super(message);

		this.name = 'ApiError';
	}
}