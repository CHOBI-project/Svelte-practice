<script lang="ts">
  let num = $state(0);
</script>

<div>
    <h3>&#123;#if&#125;...&#123;:else if&#125;...&#123;/if&#125;</h3>

    <button type="button" onclick={() => num++}>up</button>
    <button type="button" onclick={() => num--}>down</button>
    {#if num < 5}
        <p>{num}: 5より小さい</p>
    {:else if num < 10}
        <p>{num}:10より小さい</p>
    {:else}
        <p>{num}:10以上</p>
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
            padding: 0 0.25rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }
</style>