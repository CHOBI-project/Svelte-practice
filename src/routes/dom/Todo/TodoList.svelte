<script lang="ts">
  import Todo from "./Todo.svelte";
  import Edit from "./Edit.svelte";
  import type {TextArray} from "./types";

  type TodoListProps = {
    textArray: TextArray[];
  }

  let { textArray }: TodoListProps = $props();
</script>

{#each textArray as text (text.id)}
  <div>
    {#if text.flag}
      <Edit textArray={textArray} text={text} />
    {:else}
      <Todo textArray={textArray} text={text} />
    {/if}
  </div>
{/each}

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }
</style>