<script>
import Header from "../parts/Header.svelte";
import Footer from "../parts/Footer.svelte";
import Boundary from "./Boundary.svelte";
import Window from "./Window.svelte";
import Document from "./Document.svelte";
import Body from "./Body.svelte";
import Head from "./Head.svelte";
import Element from "./Element.svelte";
</script>

<svelte:head>
    <title>Elements</title>
    <meta name="description" content="Special Elementsについての勉強"/>
</svelte:head>

<Header/>
<div class="contents">
    <div class="wrapper">
        <h2>Special Elements</h2>
        <p></p>

        <div class="elements">
            <ul>
                <li>
                    <p class="element">&lt;svelte:boundary&gt;</p>
                    <p class="desc">エラーが発生しても、アプリ全体がクラッシュせずにエラーメッセージを表示する</p>
                </li>
                <li>
                    <p class="element">&lt;svelte:window&gt;</p>
                    <p class="desc">ブラウザのwindowオブジェクトのイベントを監視する。(componentのトップレベルに配置)</p>
                </li>
                <li>
                    <p class="element">&lt;svelte:document&gt;</p>
                    <p class="desc">documentオブジェクトのイベントを監視する。(componentのトップレベルに配置)</p>
                </li>
                <li>
                    <p class="element">&lt;svelte:body&gt;</p>
                    <p class="desc">body要素に直接イベントをバインドしたいときに使用します。(componentのトップレベルに配置)</p>
                </li>
                <li>
                    <p class="element">&lt;svelte:head&gt;</p>
                    <p class="desc">head内に要素を挿入できる。(componentのトップレベルに配置)</p>
                </li>
                <li>
                    <p class="element">&lt;svelte:element&gt;</p>
                    <p class="desc">動的にHTML要素を変更したいときに使用。</p>
                </li>
            </ul>
        </div>

        <Boundary />
        <Window />
        <Document />
        <Body />
        <Head />
        <Element />
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

        .elements {
            margin: 1rem 0;
            padding: 1rem;
            box-shadow: 1px 2px 3px lightgray,
            1px 2px 3px lightgray inset;
            border-radius: 10px;
        }

        .elements ul li {
            display: flex;
            list-style: none;
            padding: 0.1rem 0;
        }

        .elements ul li:hover .element {
            color: #ff4400;
        }

        .element {
            width: 250px;
        }
    }
</style>