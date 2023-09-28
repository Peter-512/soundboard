import { writable } from 'svelte/store';

export const settings = writable({
	mute: false,
	displayName: false,
	altTextDisplayed: true
});
