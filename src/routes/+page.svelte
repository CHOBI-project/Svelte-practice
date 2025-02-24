<script>
    import Header from "./parts/Header.svelte";
</script>

<svelte:head>
    <title>Svelte</title>
</svelte:head>

<Header/>
<div>
    <img src="/src/assets/svelte-horizontal.svg" alt="Svelte" width="600">
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
