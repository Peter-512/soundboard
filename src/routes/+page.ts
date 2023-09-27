import type { PageLoad } from './$types';
import type { SoundBoardItem } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_BASE_URL}/items`);
	const items: SoundBoardItem[] = await res.json();

	return {
		soundBoardItems: items
	};
};
