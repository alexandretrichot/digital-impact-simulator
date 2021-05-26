import React from 'react';

type Method = 'GET' | 'POST' | 'PUT';

export const useFetch = <T extends any>(url: string, method: Method = 'GET', body?: any) => {
	const [data, setData] = React.useState<T | undefined>(undefined);
	const [error, setError] = React.useState<Error | undefined>(undefined);

	React.useEffect(() => {
		fetch(url, {
			method,
			body: body ? (String(typeof body === 'object' ? JSON.stringify(body) : body)) : undefined,
		})
			.then(r => r.json())
			.then(r => setData(r))
			.catch(err => setError(err));
	}, []);

	return {
		data,
		isLoading: !error && !data,
		error
	};
}
