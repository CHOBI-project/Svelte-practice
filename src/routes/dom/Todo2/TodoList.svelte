<script lang="ts">
  import Todo from "./Todo.svelte";
  import Edit from "./Edit.svelte";

  let { todoList, editTextHandler, saveTextHandler, removeTextHandler } = $props();
</script>

{#each todoList as todo (todo.id)}
  <div>
    {#if !todo.edit}
      <Todo {editTextHandler} {removeTextHandler} {todo} />
    {:else}
      <Edit {saveTextHandler} {todo} />
    {/if}
  </div>
{/each}

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }
</style>