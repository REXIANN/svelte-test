import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await fetch('https://dummyjson.com/products');
	const result = await response.json();

	return result;
}) satisfies PageServerLoad<Record<string, number>>;
