import { z } from 'zod';

export const soundBoardItemSchema = z.object({
	imgSrc: z.string().url(),
	soundSrc: z.string().url(),
	alt: z.string().nonempty(),
	name: z.string().min(5),
	category: z.enum(['dragons', 'werewolves'])
});

export type SoundBoardItemSchema = typeof soundBoardItemSchema;

export type SoundBoardItem = Omit<z.infer<SoundBoardItemSchema>, 'category'> & { id: number };

export interface Category {
	name: string;
	src: string;
}
