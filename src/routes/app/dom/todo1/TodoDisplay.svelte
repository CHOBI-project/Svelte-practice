<script lang="ts">
  import Todos from "$appRoutes/dom/todo1/Todos.svelte";
  import TodoFilters from "$appRoutes/dom/todo1/TodoFilters.svelte";

  type Todo = {
    text: string
    done: boolean
  }

  type Filters = 'all' | 'active' | 'completed'

  let todos = $state<Todo[]>([])
  let filter = $state<Filters>('all')
  let filterdTodos = $derived(filterTodos())

  $effect(() => {
    const savedTodos = localStorage.getItem('todos')
    savedTodos && (todos = JSON.parse(savedTodos))
  })

  $effect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })

  function addTodo(event: KeyboardEvent) {
    if (event.key !== 'Enter') return

    const eventEl = event.target as HTMLInputElement
    if (!eventEl.value.trim()) return;

    todos.push({text: eventEl.value, done: false})
    eventEl.value = ''
  }

  function editTodo(event: Event) {
    const inputEl = event.target as HTMLInputElement
    const index = +inputEl.dataset.index!　//+文字列を数値に変換, !null,undefined出ないと保証する
    todos[index].text = inputEl.value
  }

  function toggleTodo(event: Event) {
    const inputEl = event.target as HTMLInputElement
    const index = +inputEl.dataset.index!
    todos[index].done = !todos[index].done
  }

  function setFilter(newFilters: Filters) {
    filter = newFilters
  }

  function filterTodos() {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter((todo) => !todo.done)
      case 'completed':
        return todos.filter((todo) => todo.done)
    }
  }

  function remaining() {
    return todos.filter((todo) => !todo.done).length
  }

  function storageClear() {
    window.localStorage.clear()
  }
</script>

<div class="section">
  <h3>TodoApp(お手本)</h3>

  <div class="container">
    <input onkeydown={addTodo} placeholder="Add todo" type="text">

    <Todos {filterdTodos} {editTodo} {toggleTodo}/>
    <TodoFilters {setFilter}/>

    <p>{remaining()} remaining</p>
    <button onclick={storageClear}>storage clear</button>
  </div>
</div>


<style>
    h3 {
        margin-bottom: 0.5rem;
        color: #ff3c00;
        border-bottom: 2px dotted lightgray;
    }

    .section {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    input {
        padding: 1rem;
        border: 1px solid gray;
        border-radius: 5px;
    }

    button {
        padding: 0 0.25rem;
        border: 1px solid gray;
        border-radius: 5px;
        background: #444444;
        color: #fff;
    }
</style>