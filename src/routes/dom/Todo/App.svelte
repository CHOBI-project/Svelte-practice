<script lang="ts">
  import TodoList from "./TodoList.svelte";
  import type { TextArray } from "./types";

  let textArray: TextArray[] = $state([]);
  let input = $state("");

  function addTextHandler() {
    if (!input.trim()) return;

    textArray.push({
      id: textArray.length + 1,
      text: input,
      flag: false,
    })

    input = "";
  }
</script>

<div class="section">
  <h3>Add・Remove</h3>

  <div class="container">
    <input type="text" bind:value={input}>
    <button type="button" onclick={addTextHandler}>追加</button>

    <TodoList textArray={textArray} />
  </div>
</div>

<style>
    .section {
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

        .container {
            width: 100%;
            overflow: hidden;

            input {
                border: 1px solid gray;
                border-radius: 3px;
                padding: 0.2rem;
            }

            button {
                border: 1px solid gray;
                border-radius: 3px;
                padding: 0.2rem 1.2rem;
            }

            button:hover {
                background: #ff4400;
                color: white;
            }
        }
    }
</style>