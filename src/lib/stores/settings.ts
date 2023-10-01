import { writable } from 'svelte/store';

export const settings = writable({
	mute: true,
	displayName: false,
	altTextDisplayed: true
});
