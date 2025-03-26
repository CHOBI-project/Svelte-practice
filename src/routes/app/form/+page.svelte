<script lang="ts">
import { enhance } from "$app/forms";
import { slide } from "svelte/transition";

const { data, form } = $props();
const creating = $state(false);
const deleting = $state(false);
</script>

<svelte:head>
  <title>form</title>
  <meta name="description" content="formについての勉強"/>
</svelte:head>

<div class="wrapper">
  <h2>form</h2>
  <p>svelteでのformの使い方</p>

  <div class="form">
    <h3>todos(cookies)</h3>

    {#if form?.error}
      <p class="error">{form.error}</p>
    {/if}

    <form
      method="post"
      action="?/create"
      use:enhance={() => {
          creating = true;

          return async ({ update }) => {
              await update();
              creating = false;
          }
      }}
    >
      <label>
        todo:
        <input
          type="text"
          name="desc"
          autocomplete="off"
          value={form?.description ?? ""}
          required
          disabled={creating}
        />
        {#if creating}
          <span class="save">saving...</span>
        {/if}
      </label>
    </form>

    <ul>
      {#if data.todos}
        {#each data.todos as todo (todo.id)}
          <li transition:slide>
            <form
              method="post"
              action="?/delete"
              use:enhance={() => {
                  deleting = true;

                  return async ({update}) => {
                      await update();
                      deleting = false;
                  }
              }}
            >
              <input type="hidden" name="id" value={todo.id}/>
              <span>・{todo.desc}</span>
              <button type="submit" aria-label="Mark as complete">削除</button>
            </form>
          </li>
        {/each}
      {/if}
    </ul>


    {#if deleting}
      <div class="delete">deleting...</div>
    {/if}
  </div>
</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    h2 {
        color: #ff3f00;
    }

    h3 {
        margin-bottom: 0.5rem;
        color: #ff3c00;
        border-bottom: 2px dotted lightgray;
    }

    .form {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }

    input {
        padding: 0.25rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 5px;
    }

    ul {
        width: 100%;
        padding: 1rem;
    }

    li {
        padding: 0.25rem;
        list-style: none;
        border-bottom: 1px solid #b6b6b6;
    }

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        padding: 0.25rem 0.5rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray;
        border-radius: 5px;
    }

    button:hover {
        background: #ff4400;
    }

    .error {
        color: red;
    }

    .save {
        padding: 0 1rem;
        color: #48ff00;
    }

    .delete {
        padding: 0 1rem;
        color: red;
        text-align: right;
    }
</style>