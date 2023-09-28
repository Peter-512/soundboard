import type { PageLoad } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';
import type { Category, SoundBoardItem } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const itemsRes = await fetch(`${PUBLIC_BASE_URL}/${params.slug}`);
	const items: SoundBoardItem[] = await itemsRes.json();

	const categoryRes = await fetch(`${PUBLIC_BASE_URL}/categories`);
	const categories: Category[] = await categoryRes.json();

	const category = categories.find((cat) => cat.name === params.slug);

	if (!category) throw error(404, 'Category not found');

	return {
		items,
		category
	};
};
