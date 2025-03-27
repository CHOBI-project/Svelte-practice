<script lang="ts">
import Bindable1 from "$appRoutes/rune/Bindable1.svelte";

let message = $state("Hello");
</script>

<div>
    <h3>$Bindable</h3>

    <p>message: {message}</p>
    <Bindable1 bind:value={message}/>
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
    }
</style>