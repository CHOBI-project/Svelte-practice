<script lang="ts">
import mainImg from "../assets/svelte-horizontal.svg";
</script>

<svelte:head>
  <title>Svelte</title>
  <meta name="description" content="svelteについての勉強"/>
</svelte:head>

<div>
  <img src={mainImg} alt="Svelte" width="600">
</div>

<style>
    div {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
    }
</style>
