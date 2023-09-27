import type { PageLoad } from './$types';
import type { SoundBoardItem } from '$lib/types';
// import { PUBLIC_VITE_BACKEND_URL } from '$env/static/public';
import { baseURL } from '$lib/backend';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${baseURL}/items`);
	const items: SoundBoardItem[] = await res.json();

	return {
		soundBoardItems: items
	};
};
