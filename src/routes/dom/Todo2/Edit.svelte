<script lang="ts">
  let { todo, saveTextHandler } = $props();
</script>

<input type="text" bind:value={todo.text}>
<button data-index onclick={(event) => saveTextHandler(event, todo.text)}>保存</button>

<style>
    input {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0.2rem 1.2rem;
    }

    button {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0 1.2rem;
    }

    button:hover {
        background: red;
        color: white;
    }
</style>