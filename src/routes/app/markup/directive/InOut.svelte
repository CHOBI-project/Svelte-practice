<script lang="ts">
import { blur, fade, fly, slide } from "svelte/transition";

let anime1 = false;
let anime2 = false;
</script>

<div>
    <h3>in:property, out:property</h3>
    <button on:click={() => anime1 = !anime1}>fade</button>
    <button on:click={() => anime2 = !anime2}>scale</button>

    {#if anime1}
        <div in:fade out:blur>fade</div>
    {/if}
    {#if anime2}
        <div in:fly out:slide>blur</div>
    {/if}
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
            cursor: pointer;
        }
    }
</style>
