<script lang="ts">
  import TodoList from "./TodoList.svelte";

  type TodoListModel = {
    id: string,
    text: string,
    edit: boolean,
  }

  let todoList = $state<TodoListModel[]>([])

  function addTextHandler(event: KeyboardEvent) {
    if (event.key !== 'Enter') return

    const eventEl = event.target as HTMLInputElement
    const id = window.crypto.randomUUID()
    const text = eventEl.value
    const edit = false

    todoList = [...todoList, { id, text, edit}]

    eventEl.value = ""
  }

  function editTextHandler(event: Event) {
    const eventEl = event.target as HTMLButtonElement
    const index = +eventEl.dataset.index!
    todoList[index].edit = true
  }

  function saveTextHandler(event: Event, updateText: string) {
    const eventEl = event.target as HTMLButtonElement
    const index = +eventEl.dataset.index!
    todoList[index].text = updateText
    todoList[index].edit = false
  }

  function removeTextHandler(event: Event) {
    const eventEl = event.target as HTMLButtonElement
    const index = +eventEl.dataset.index!
    todoList = todoList.filter((todo) => todo.id !== todoList[index].id)
  }
</script>

<div class="section">
  <h3>Add・Remove</h3>

  <div class="container">
    <input type="text" onkeydown={addTextHandler}>
    <TodoList {todoList} {editTextHandler} {saveTextHandler} {removeTextHandler} />
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