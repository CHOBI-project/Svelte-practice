<script lang="ts">
  import { fade, blur, fly, slide, scale } from 'svelte/transition';

  let fadeFlag = false;
  let blurFlag = false;
  let flyFlag = false;
  let slideFlag = false;
  let scaleFlag = false;
</script>

<div>
    <h3>transition:property</h3>
    <button on:click={() => fadeFlag = !fadeFlag}>fade</button>
    <button on:click={() => blurFlag = !blurFlag}>blur</button>
    <button on:click={() => flyFlag = !flyFlag}>fly</button>
    <button on:click={() => slideFlag = !slideFlag}>slide</button>
    <button on:click={() => scaleFlag = !scaleFlag}>scale</button>

    {#if fadeFlag}
        <div transition:fade>fade</div>
    {/if}
    {#if blurFlag}
        <div transition:blur>blur</div>
    {/if}
    {#if flyFlag}
        <div transition:fly={{ y: 20, duration: 500 }}>fly</div>
    {/if}
    {#if slideFlag}
        <div transition:slide>slide</div>
    {/if}
    {#if scaleFlag}
        <div transition:scale={{ start: 0.5, duration: 400 }}>scale</div>
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
