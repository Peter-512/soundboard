import { writable } from 'svelte/store';
import type { SoundBoardItem } from '$lib/types';

export const soundBoardItems = writable<SoundBoardItem[]>([]);
