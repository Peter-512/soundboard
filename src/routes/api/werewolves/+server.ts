import { data } from '$lib/resource/data';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return json(data.werewolves);
};

export const POST: RequestHandler = async ({ request }) => {
	const werewolf = await request.json();
	data.werewolves.push(werewolf);
	return json(
		{ category: 'werewolves', ...werewolf },
		{
			status: 201
		}
	);
};
