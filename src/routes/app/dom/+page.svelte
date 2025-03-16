<script>
    import TodoScreen from "./todo2/TodoScreen.svelte";
    import TodoDisplay from "./todo1/TodoDisplay.svelte";
</script>

<svelte:head>
  <title>Dom</title>
  <meta name="description" content="Animation作成"/>
</svelte:head>

<div class="wrapper">
  <h2>Dom操作</h2>
  <p>svelteのdom操作はbooleanで行うことを推奨している</p>

  <TodoDisplay/>
  <TodoScreen/>
</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    h2 {
        color: #ff3f00;
    }
</style>