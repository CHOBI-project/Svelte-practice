<script lang="ts">
  import {todos} from "$appRoutes/dom/todo2/store.svelte";

  function editTodoToggle(index: number) {
    todos[index].done = true
  }

  function updateTodo(index: number, updateText: string) {
    todos[index].title = updateText
    todos[index].done = false
  }

  function removeTodo(index: number) {
    todos.splice(index, 1)
  }
</script>

{#each todos as todo, index (todo.id)}
  <div class="todo">
    {#if !todo.done}
      <p>{todo.id}: {todo.title}</p>
      <div>
        <button onclick={() => editTodoToggle(index)}>編集</button>
        <button onclick={() => removeTodo(index)}>削除</button>
      </div>
    {:else}
      <input type="text" bind:value={todo.title}>
      <button onclick={() => updateTodo(index, todo.title)}>保存</button>
    {/if}
  </div>
{/each}

<style>
    .todo {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    input {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0.2rem 1.2rem;
    }

    button {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0 1rem;
    }
</style>