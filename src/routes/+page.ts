import type { PageLoad } from './$types';
import type { Category } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_BASE_URL}/categories`);
	const items: Category[] = await res.json();

	return {
		categories: items
	};
};
