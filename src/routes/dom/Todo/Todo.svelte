<script lang="ts">
  import type {TextArray} from "./types";

  type TodoProps = {
    textArray: TextArray[];
    text: TextArray;
  }

  let { textArray, text }: TodoProps = $props();

  function editTextHandler(id: number) {
    for (const text of textArray) {
      if (text.id === id) {
        [...textArray, {id: text.id, text: text.text, flag: text.flag = true}]
      } else {
        text
      }
    }
  }

  //これはだめ
  // function removeTextHandler(id: number) {
  //   textArray = textArray.filter((text) => text.id !== id);
  // }

  //これはOK
  function removeTextHandler(id: number) {
    const index = textArray.findIndex((text) => text.id === id);
    if (index !== -1) {
      textArray.splice(index, 1); // 配列から要素を削除
      textArray = [...textArray]; // Svelteの reactivity を発火させる
    }
    console.log(textArray); // 削除後の配列を確認
  }

</script>

<p>{text.id}: {text.text}</p>
<div>
  <button type="button" onclick={() => editTextHandler(text.id)}>編集</button>
  <button type="button" onclick={() => removeTextHandler(text.id)}>削除</button>
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