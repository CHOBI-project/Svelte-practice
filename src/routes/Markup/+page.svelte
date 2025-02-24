<script>
    import Header from "../parts/Header.svelte";
    import Footer from "../parts/Footer.svelte";
    import If from "./If.svelte";
    import Each from "./Each.svelte";
    import Key from "./Key.svelte";
    import Await from "./Await.svelte";
    import Snippet from "./Snippet.svelte";
</script>

<svelte:head>
    <title>Markup</title>
    <meta name="description" content="Markupについての勉強"/>
</svelte:head>

<Header/>
<div class="contents">
    <div class="wrapper">
        <h2>Markup</h2>
        <p>Svelteの構文の記述の仕方</p>

        <div class="base">
            <ul>
                <li>
                    <p class="basic">&#123;#if&#125;</p>
                    <p class="desc">if文</p>
                </li>
                <li>
                    <p class="basic">&#123;#each&#125;</p>
                    <p class="desc">for文（表示するだけ）</p>
                </li>
                <li>
                    <p class="basic">&#123;#key value&#125;</p>
                    <p class="desc">指定の値が変更されたらリマウント</p>
                </li>
                <li>
                    <p class="basic">&#123;#await&#125;...</p>
                    <p class="desc">非同期処理</p>
                </li>
                <li>
                    <p class="basic">&#123;#snippet&#125;...</p>
                    <p class="desc">reactの再利用コンポーネントのような感じ</p>
                </li>        <li>
                    <p class="basic">&#123;@render&#125;...</p>
                    <p class="desc">snippetをレンダリングするためのタグ</p>
                </li>
            </ul>
        </div>

        <If />
        <Each />
        <Key />
        <Await />
        <Snippet />
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

        .base {
            margin: 1rem 0;
            padding: 1rem;
            box-shadow: 1px 2px 3px lightgray,
            1px 2px 3px lightgray inset;
            border-radius: 10px;
        }

        .base ul li {
            display: flex;
            list-style: none;
            padding: 0.1rem 0;
        }

        .base ul li:hover .basic {
            color: #ff4400;
        }

        .basic {
            width: 150px;
        }
    }
</style>