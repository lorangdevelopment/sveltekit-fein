import { writable } from 'svelte/store';

export type ScrollValues = {
	scroll: number;
	limit: number;
	velocity: number;
	direction: number;
	progress: number;
};

export const $scroll = writable<ScrollValues>({
	scroll: 0,
	limit: 0,
	velocity: 0,
	direction: 0,
	progress: 0
});
