<script lang="ts">
  import TodoList from "./TodoList.svelte";
  import {todos} from "./store.svelte.js"

  let id = $state(1)

  function addTodo(event: KeyboardEvent) {
    if (event.key !== 'Enter') return

    const eventEl = event.target as HTMLInputElement
    if (!eventEl.value.trim()) return

    todos.push(
        {
          id: id.toString(),
          title: eventEl.value,
          done: false
        }
    )
    eventEl.value = ""
    id++
  }
</script>

<div class="section">
  <h3>Todo</h3>

  <div class="container">
    <input type="text" onkeydown={addTodo}>
    <TodoList/>
  </div>
</div>

<style>
    .section {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }

    h3 {
        margin-bottom: 0.5rem;
        color: #ff3c00;
        border-bottom: 2px dotted lightgray;
    }

    .container {
        width: 100%;
        overflow: hidden;
    }

    input {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0.2rem;
    }
</style>