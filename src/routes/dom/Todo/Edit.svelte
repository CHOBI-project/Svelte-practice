<script lang="ts">
  import type { TextArray } from "./types";

  type EditProps = {
    textArray: TextArray[];
    text: TextArray;
  }

  let { textArray, text }: EditProps = $props();

  function saveTextHandler(id: number, updateText: string) {
    for (const text of textArray) {
      if (text.id === id) {
        [...textArray, {id: text.id, text: updateText, flag: text.flag = false}]
      } else {
        text
      }
    }
  }
</script>

<input type="text" bind:value={text.text}>
<button type="button" onclick={() => saveTextHandler(text.id, text.text)}>保存</button>

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