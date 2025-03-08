<script>
    import Header from "../parts/Header.svelte";
    import Footer from "../parts/Footer.svelte";
    import Todo from "./Todo/App.svelte";
</script>

<svelte:head>
    <title>Animation</title>
    <meta name="description" content="Animation作成"/>
</svelte:head>

<Header/>
<div class="contents">
    <div class="wrapper">
        <h2>Dom操作</h2>
        <p>svelteのdom操作はbooleanで行うことを推奨している</p>

        <Todo />
    </div>

    <Footer/>
</div>

<style>
    .contents {
        position: absolute;
        top: 8%;
        left: 0;
        width: 100%;
        height: 92%;
        overflow-y: scroll;

        .wrapper {
            padding: 1rem;
        }

        h2 {
            color: #ff3f00;
        }
    }
</style>