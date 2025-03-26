<script lang="ts">
import { count } from "$lib/store";
import { readable } from "svelte/store";

const time = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => clearInterval(interval);
});
</script>

<div>
    <h3>readable</h3>
    <button onclick={() => count.update((n) => n - 1)}>-</button>
    <span>{$count}</span>
    <button onclick={() => count.update((n) => n + 1)}>+</button>
    <p>現在時刻: {$time.toLocaleTimeString()}</p>
</div>

<style>
    div {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;

        h3 {
            margin-bottom: 0.5rem;
            color: #ff3c00;
            border-bottom: 2px dotted lightgray;
        }

        button {
            padding: 0 0.25rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }
</style>
