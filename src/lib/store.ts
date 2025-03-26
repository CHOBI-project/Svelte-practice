import { writable } from "svelte/store";

//rune/Writable.svelte
export const count = writable(0);
count.subscribe((value) => {
	if (value > 5) {
		console.log(`count: ${value}`);
	}
});
