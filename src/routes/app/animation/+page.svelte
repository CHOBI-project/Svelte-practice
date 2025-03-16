<script>
    import Button1 from "$appRoutes/animation/Button1.svelte";
    import Loading from "$appRoutes/animation/Loading.svelte";
    import Cursor from "$appRoutes/animation/Cursor.svelte";
</script>

<svelte:head>
  <title>Animation</title>
  <meta name="description" content="Animation作成"/>
</svelte:head>

<div class="wrapper">
  <h2>Animation</h2>
  <p>svelteを使ったanimationを自作</p>

  <Button1/>
  <Loading/>
  <Cursor/>

</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    h2 {
        color: #ff3f00;
    }
</style>