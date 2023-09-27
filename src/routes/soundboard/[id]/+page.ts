import type { PageLoad } from './$types';
import type { SoundBoardItem } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`${PUBLIC_BASE_URL}/items`);
	const items: SoundBoardItem[] = await res.json();
	const item = items.find((i) => i.id === +params.id);

	if (!item) throw error(404);

	return {
		soundBoardItem: item
	};
};
