<script lang="ts">
const { filterdTodos, editTodo, toggleTodo } = $props();
</script>

<div class="todos">
  {#each filterdTodos as todo, i}
    <div class:completed={todo.done} class="todo">
      <input oninput={editTodo} data-index={i} value={todo.text} type="text">
      <input onchange={toggleTodo} data-index={i} checked={todo.done} type="checkbox">
    </div>
  {/each}
</div>

<style>
    .todos {
        margin: 1rem 0;
    }

    .todo {
        position: relative;
        transition: opacity 0.3s;
        margin: 0.5rem 0;
    }

    .completed {
        opacity: 0.4;
    }

    input {
        padding: 0 0.25rem;
        border: 1px solid gray;
        border-radius: 5px;
    }

    input[type="text"] {
        padding: 1rem;
    }

    input[type="checkbox"] {
        position: absolute;
        right: 4%;
        top: 50%;
        translate: 0 -50%;
    }
</style>