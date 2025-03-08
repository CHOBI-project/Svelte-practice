<script lang="ts">
  type TextArray = {
    id: number,
    text: string,
  }

  let textArray: TextArray[] = $state([]);
  let input = $state("");
  let inputRef!: HTMLInputElement;

  function addTextHandler() {
    if (!input.trim()) return;

    textArray.push({
      id: textArray.length + 1,
      text: input
    })
    input = "";
    inputRef.focus();
  }

  function deleteTextHandler(id: number) {
    textArray = textArray.filter((text) => text.id !== id);
  }
</script>

<div>
    <h3>Add・Remove</h3>

    <div class="container">
        <input
                type="text"
                bind:value={input}
                bind:this={inputRef}
        >
        <button
                class="add"
                type="button"
                onclick={addTextHandler}
        >
            追加
        </button>

        {#each textArray as text (text.id)}
            <div class="textContainer">
                <p>{text.id}: {text.text}</p>
                <button
                        class="remove"
                        type="button"
                        onclick={() => deleteTextHandler(text.id)}
                >
                    削除
                </button>
            </div>
        {/each}
    </div>
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

        .container {
            width: 100%;
            overflow: hidden;

            .add {
                border: 1px solid gray;
                border-radius: 3px;
                padding: 0.2rem 1.2rem;
            }

            .add:hover {
                background: #ff4400;
                color: white;
            }

            input {
                border: 1px solid gray;
                border-radius: 3px;
                padding: 0.2rem;
            }

            .textContainer {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    padding: 0.2rem 1.2rem;
                }

                .remove {
                    margin-left: 5rem;
                    border: 1px solid gray;
                    border-radius: 3px;
                    padding: 0 1.2rem;
                }

                .remove:hover {
                    background: red;
                    color: white;
                }
            }
        }
    }
</style>
