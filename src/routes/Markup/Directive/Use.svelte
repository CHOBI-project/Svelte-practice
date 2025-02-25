<script lang="ts">
  let bgColor: string = "#ffcc00";
  let flag: boolean = true;

  const myAction = (node: HTMLElement, bgColor: string) => {
    // 初回適用
    node.style.backgroundColor = bgColor;

    return {
      //更新時に適用
      update(newBgColor: string) {
        node.style.backgroundColor = newBgColor;
        node.style.color = "#fff";
        node.style.borderRadius = "5px";
        node.style.boxShadow = "3px 3px 5px gray"
      },

      //削除時に適用(クリーンアップ)
      destroy() {
        console.log("myActionが削除されました！");
        node.style.backgroundColor = "";
      }
    };
  }
</script>

<div>
    <h3>use:method</h3>

    {#if flag}
        <lable>
            color: <input type="color" bind:value={bgColor} />
        </lable>
        <div use:myAction={bgColor}>背景色を変更</div>
    {/if}

    <button onclick={() => flag = !flag}>
        {flag ? "背景色ボックスを削除" : "背景色ボックスを表示"}
    </button>
</div>

<style>
    div {
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

        input {
            border: 1px solid gray;
            border-radius: 5px;
            padding: 0.2rem;
        }

        button {
            padding: 0.2rem;
            border: 1px solid gray;
            border-radius: 5px;
        }

        button:hover {
            background: #ff4400;
        }
    }
</style>