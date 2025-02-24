<!-- js -->
<script lang="ts">
  import Props1 from "./Props1.svelte";

  let num = $state(0);
</script>

<!-- html -->
<div>
    <h3>$Props</h3>

    <button type="button" onclick={() => num++}>increment</button>
    <span>親: {num}</span>

    <Props1 answer={"50"}/>
    <Props1 answer={num.toString()}/>
    <Props1/>
</div>

<!-- css -->
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