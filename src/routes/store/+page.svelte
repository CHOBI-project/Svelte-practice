<script>
    import Header from "../parts/Header.svelte";
    import Footer from "../parts/Footer.svelte";
    import Store from "./Writable.svelte";
    import Readable from "./Readable.svelte";
    import Readonly from "./Readonly.svelte";
    import Derived from "./Derived.svelte";
</script>

<svelte:head>
    <title>store</title>
    <meta name="description" content="storeについての勉強"/>
</svelte:head>

<Header/>
<div class="contents">
    <div class="wrapper">
        <h2>svelte/store</h2>
        <p>svelteで使用可能なストア</p>

        <div class="store">
            <ul>
                <li>
                    <p class="property">writable</p>
                    <p class="desc">書き込み可能なストア。</p>
                </li>
                <li>
                    <p class="property">readable</p>
                    <p class="desc">読み取り専用ストア（サーバーから値を取得して外部から変更されたくない時に有効）</p>
                </li>
                <li>
                    <p class="property">readonly</p>
                    <p class="desc">writableストアを読み取り専用にする(変更は元のwritableを変更する)</p>
                </li>
                <li>
                    <p class="property">derived</p>
                    <p class="desc">他のストアを元に新しいストアを作成</p>
                </li>
            </ul>
        </div>

        <Store />
        <Readable />
        <Readonly />
        <Derived />
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

        .store {
            margin: 1rem 0;
            padding: 1rem;
            box-shadow: 1px 2px 3px lightgray,
            1px 2px 3px lightgray inset;
            border-radius: 10px;
        }

        .store ul li {
            display: flex;
            list-style: none;
            padding: 0.1rem 0;
        }

        .store ul li:hover .property {
            color: #ff4400;
        }

        .property {
            width: 150px;
        }
    }
</style>