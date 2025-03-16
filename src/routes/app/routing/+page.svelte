<script lang="ts">
  let {data} = $props()
</script>

<svelte:head>
  <title>Routing</title>
  <meta name="description" content="routingについての勉強"/>
</svelte:head>

<div class="wrapper">
  <h2>routing</h2>
  <p>svelteのルーティングの仕方</p>

  {#each data.summaries as item}
    <a href="/app/routing/{item.directory}">
      <div class="item">
        <div>id: {item.id}</div>
        <div>title: {item.title}</div>
      </div>
    </a>
  {/each}
</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    h2 {
        color: #ff3f00;
    }

    a {
        color: gray;
        text-decoration: none;
    }

    .item {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }

    .item:hover {
        background: #ffe0d1;
    }
</style>