<script lang="ts">
import Key1 from "$appRoutes/markup/syntax/Key1.svelte";

const id = 1;
</script>

<div>
    <h3>&#123;#key value&#125;...&#123;/key&#125;</h3>

    <button type="button" onclick={() => id++}>id: {id}</button>
    {#key id}
        <Key1 />
    {/key}
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