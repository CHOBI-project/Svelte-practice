<script lang="ts">
import { flip } from "svelte/animate";

let items = [
	{ id: 1, text: "🍎 Apple" },
	{ id: 2, text: "🍌 Banana" },
	{ id: 3, text: "🍇 Grape" },
];

function shuffle() {
	items = items.sort(() => Math.random() - 0.5);
}
</script>

<div>
    <h3>transition:property</h3>

    <button on:click={shuffle}>シャッフル</button>
    <ul>
        {#each items as item (item.id)}
            <li animate:flip>{item.text}</li>
        {/each}
    </ul>
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
            margin-right: 10px;
            padding: 5px 10px;
            border: 1px solid gray;
            border-radius: 5px;
        }

        ul {
            list-style: none;
            padding: 0;

            li {
                margin: 5px 0;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid gray;
            }
        }
    }
</style>



