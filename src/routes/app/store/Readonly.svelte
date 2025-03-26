<script lang="ts">
import { readonly, writable } from "svelte/store";

//countは編集、readOnlyは表示で使う
const count = writable(0);
const readOnlyCount = readonly(count);
</script>

<div>
    <h3>readonly</h3>
    <button type="button" onclick={() => count.update((n) => n - 1)}>-</button>
    <span>{$readOnlyCount}</span>
    <button type="button" onclick={() => count.update((n) => n + 1)}>+</button>
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
