import { writable } from 'svelte/store';

const isPlaying = writable(false);
const activeId = writable<number | null>(null);

export { isPlaying, activeId };
