<script lang="ts">
  let numbers = $state([1, 2, 3]);
  let total = $derived(numbers.reduce((a, c) => a + c, 0));

  const addNumber = () => numbers.push(numbers.length + 1);
</script>

<div>
    <h3>$Derived</h3>

    <button type="button" onclick={addNumber}>addNumber</button>
    <span>{numbers}</span>
    <p>{numbers.join(" + ")} = {total}</p>
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