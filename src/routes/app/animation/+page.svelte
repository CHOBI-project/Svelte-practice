<script>
    import Button1 from "./Button1.svelte";
    import Loading from "./Loading.svelte";
    import Cursor from "./Cursor.svelte";
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