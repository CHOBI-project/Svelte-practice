<script lang="ts">
let count = $state(0);
</script>

<div>
    <h3>$State</h3>

    <button type="button" onclick={() => count--}>-</button>
    <span>{count}</span>
    <button type="button" onclick={() => count++}>+</button>
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