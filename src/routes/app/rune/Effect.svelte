<script lang="ts">
let elapsed = $state(0);
let interval = $state(1000);

$effect(() => {
	const id = setInterval(() => {
		elapsed++;
	}, interval);

	return () => {
		clearInterval(id);
	};
});
</script>

<div>
    <h3>$Effect</h3>

    <button type="button" onclick={() => interval /= 2}>speed up</button>
    <button type="button" onclick={() => interval *= 2}>speed down</button>
    <p>elapsed: {elapsed}</p>
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