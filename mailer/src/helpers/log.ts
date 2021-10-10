export const log = (...args: any[]) => {
	const date = new Date();
	console.log(date.toISOString(), ...args);
}

export const err = (...args: any[]) => {
	const date = new Date();
	console.error(date.toISOString(), '[ERROR]', ...args);
}
