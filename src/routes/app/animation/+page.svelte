<script>
    import Footer from "../parts/Footer.svelte";
    import Button1 from "./Button1.svelte";
    import Loading from "./Loading.svelte";
    import Cursor from "./Cursor.svelte";
</script>

<svelte:head>
    <title>Animation</title>
    <meta name="description" content="Animation作成"/>
</svelte:head>

<div class="contents">
    <div class="wrapper">
        <h2>Animation</h2>
        <p>svelteを使ったanimationを自作</p>

        <Button1 />
        <Loading />
        <Cursor />

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