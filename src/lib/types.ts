import { z } from 'zod';

export const soundBoardItemSchema = z.object({
	id: z.number().gt(0),
	imgSrc: z.string().url(),
	soundSrc: z.string().url(),
	alt: z.string().nonempty(),
	name: z.string().nonempty()
});

export type SoundBoardItem = z.infer<typeof soundBoardItemSchema>;

export interface Category {
	name: string;
	src: string;
}
