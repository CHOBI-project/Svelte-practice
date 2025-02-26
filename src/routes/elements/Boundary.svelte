<script lang="ts">
  let count = 0;
  let hasError = false;
  let errorMessage = "";

  function handleClick() {
    try {
      if (count >= 5) {
        throw new Error("カウントの上限を超えました！");
      }
      count += 1;
    } catch (error) {
      hasError = true;
      errorMessage = (error as Error).message;
    }
  }
</script>

<div>
    <h3>&lt;svelte:boundary&gt;</h3>

    <svelte:boundary>
        {#if hasError}
            <p style="color: red;">⚠️ {errorMessage}</p>
        {:else}
            <button onclick={handleClick}>カウント: {count}</button>
        {/if}
    </svelte:boundary>
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

        button {
            border: 1px solid gray;
            border-radius: 5px;
            padding: 0.2rem;
        }
    }
</style>
