<!-- js -->
<script lang="ts">
  import Bindable1 from "./Bindable1.svelte";

  let message = $state("Hello");
</script>

<!-- html -->

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

        button {
            padding: 0 0.25rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }
</style>