<script>
    import Header from "../parts/Header.svelte";
    import Footer from "../parts/Footer.svelte";
    import Global from "./Global.svelte";
    import Custom from "./Custom.svelte";
    import Class from "./Class.svelte";
</script>

<svelte:head>
    <title>class</title>
    <meta name="description" content="classについての勉強"/>
</svelte:head>

<Header/>
<div class="contents">
    <div class="wrapper">
        <h2>Styling</h2>
        <p>svelteにおけるレイアウトの仕方</p>

        <div class="style">
            <ul>
                <li>
                    <p class="property">:global </p>
                    <p class="desc">全体適用style</p>
                </li>
                <li>
                    <p class="property">--property="値", var(--property)</p>
                    <p class="desc">styleをコンポーネントにそれぞれ適用する方法</p>
                </li>
                <li>
                    <p class="property">class=&#123; &#91; "クラス名1", &#123; クラス名2 : stateClass &#125; &#93; &#125;</p>
                    <p class="desc">既存のクラスと、状態に合わせクラスをtoggleする記述</p>
                </li>
            </ul>
        </div>

        <Global />
        <Custom />
        <Class />
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

        .style {
            margin: 1rem 0;
            padding: 1rem;
            box-shadow: 1px 2px 3px lightgray,
            1px 2px 3px lightgray inset;
            border-radius: 10px;
        }

        .style ul li {
            display: flex;
            list-style: none;
            padding: 0.1rem 0;
        }

        .style ul li:hover .property {
            color: #ff4400;
        }

        .property {
            width: 400px;
        }
    }
</style>