<script lang="ts">
  let { todo, editTextHandler, removeTextHandler} = $props();
</script>

<p>{todo.id}: {todo.text}</p>
<div>
  <button data-index onclick={editTextHandler}>編集</button>
  <button data-index onclick={removeTextHandler}>削除</button>
</div>

<style>
    p {
        padding: 0.2rem 1.2rem;
    }

    button {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0 1.2rem;
    }

    button:nth-child(1):hover {
        background: #00bbff;
        color: white;
    }

    button:nth-child(2):hover {
        background: #ff0000;
        color: white;
    }
</style>