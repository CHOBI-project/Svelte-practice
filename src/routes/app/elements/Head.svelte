<script lang="ts">
const title = "Elements";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div>
    <h3>&lt;svelte:head&gt;</h3>
    <p>タイトル変更</p>
    <input type="text" bind:value={title}>
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

        input {
            border: 1px solid gray;
            border-radius: 5px;
            padding: 0.2rem;
        }
    }
</style>