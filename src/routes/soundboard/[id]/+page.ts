import type { PageLoad } from './$types';
import type { SoundBoardItem } from '$lib/types';
import { baseURL } from '$lib/backend';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`${baseURL}/items`);
	const items = await res.json();
	const item: SoundBoardItem = items.find((i: SoundBoardItem) => i.id === +params.id);

	return {
		soundBoardItem: item
	};
};
