import { data } from '$lib/resource/data';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return json(data.dragons);
};

export const POST: RequestHandler = async ({ request }) => {
	const dragon = await request.json();
	data.dragons.push(dragon);
	return json(
		{ category: 'dragons', ...dragon },
		{
			status: 201
		}
	);
};
