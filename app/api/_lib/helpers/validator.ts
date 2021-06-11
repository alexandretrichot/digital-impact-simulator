import { Schema, ValidationError } from 'joi';
import ArgsError from '../errors/ArgsError';

async function validator<T extends unknown>(schema: Schema<T>, body: unknown): Promise<T> {
	try {
		return (await schema.validateAsync(body)) as T;
	} catch (err) {
		if (err instanceof ValidationError) {
			throw new ArgsError(err.message);
		} else {
			throw err;
		}
	}
}

export default validator;
