<script lang="ts">
let tag = "";
</script>

<div>
    <h3>&lt;svelte:element&gt;</h3>

    <select bind:value={tag}>
        <option value="" selected>選択してください</option>
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="p">P</option>
    </select>

    <svelte:element this={tag}>
        これは {tag} 要素です！
    </svelte:element>
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

        select {
            border: 1px solid gray;
            border-radius: 5px;
            padding: 0.2rem;
        }
    }
</style>