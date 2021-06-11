import React from 'react';
import { Session } from '../types';

type Method = 'GET' | 'POST' | 'PUT';

export class ApiError extends Error {
	constructor(message: string, name: string) {
		super(message);
		this.name = name;
	}
}

const handleError = async (res: Response) => {
	if (res.ok) return res;

	const err = (await res.json()) as { error: string, message: string };
	throw new ApiError(err.message, err.error);
}

export const fetcher = async <T, R = any>(url: string, method: Method = 'GET', body?: R): Promise<T> => {
	return fetch(url, {
		method,
		body: body ? (String(typeof body === 'object' ? JSON.stringify(body) : body)) : undefined,
	})
		.then(handleError)
		.then(r => r.json());
}

export const useFetch = <T extends any>(url?: string | null, method: Method = 'GET', body?: any) => {
	const [data, setData] = React.useState<T | undefined>(undefined);
	const [error, setError] = React.useState<Error | undefined>(undefined);

	React.useEffect(() => {
		if (url) {
			fetcher<T>(url)
				.then(r => setData(r))
				.catch(err => setError(err));
		}
	}, [url, method, body]);

	return {
		data,
		isLoading: !error && !data,
		error
	};
}

/* ----- hooks ----- */

export const useFetchSession = (sessionId?: string | null) => {
	return useFetch<Session>(sessionId ? `/api/sessions/${sessionId}` : null);
}
