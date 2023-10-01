import { z } from 'zod';

export const soundBoardItemSchema = z.object({
	imgSrc: z
		.string()
		.url()
		.regex(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico|heic|heif)$/, 'Link should link to an image'),
	soundSrc: z.string().url().endsWith('.mp3', 'Only MP3 files are supported'),
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
