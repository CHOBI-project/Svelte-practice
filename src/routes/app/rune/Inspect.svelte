<script lang="ts">
const count = $state(0);
const text = $state("テキスト");

$inspect(count, text);
</script>

<div>
    <h3>$Inspect</h3>
    <p>
        <button type="button" onclick={() => count++}>up</button>
        <span>{count}</span>
    </p>

    <p>
        <input type="text" bind:value={text}/>
        <span>{text}</span>
    </p>
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

        p {
            margin: 0.5rem 0;
        }

        button {
            padding: 0 0.25rem;
            border: 1px solid gray;
            border-radius: 5px;
        }

        input {
            border: 1px solid gray;
            border-radius: 3px;
            padding: 0.2rem;
        }
    }
</style>

