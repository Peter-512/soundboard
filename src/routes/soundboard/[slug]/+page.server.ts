import { PUBLIC_BASE_URL } from '$env/static/public';
import { soundBoardItemSchema, type Category, type SoundBoardItem } from '$lib/types';
import { error, fail, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const itemsRes = await fetch(`${PUBLIC_BASE_URL}/${params.slug}`);
	const items: Promise<SoundBoardItem[]> = itemsRes.json();

	const categoryRes = await fetch(`${PUBLIC_BASE_URL}/categories`);
	const categories: Category[] = await categoryRes.json();

	const category = categories.find((cat) => cat.name === params.slug);

	if (!category) throw error(404, 'Category not found');

	return {
		items,
		category,
		form: superValidate(soundBoardItemSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, soundBoardItemSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const { category, ...rest } = form.data;

		await event.fetch(`${PUBLIC_BASE_URL}/${category}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(rest)
		});

		return {
			form
		};
	}
};
