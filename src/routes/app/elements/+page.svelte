<script>
import Boundary from "$appRoutes/elements/Boundary.svelte";
import Window from "$appRoutes/elements/Window.svelte";
import Document from "$appRoutes/elements/Document.svelte";
import Body from "$appRoutes/elements/Body.svelte";
import Head from "$appRoutes/elements/Head.svelte";
import Element from "$appRoutes/elements/Element.svelte";
</script>

<svelte:head>
  <title>Elements</title>
  <meta name="description" content="Special Elementsについての勉強"/>
</svelte:head>

<div class="wrapper">
  <h2>Special Elements</h2>
  <p>通常のHTMLタグとは異なる特殊な動作を持つSvelteコンパイラによって特別に解釈される要素。</p>

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

  <Boundary/>
  <Window/>
  <Document/>
  <Body/>
  <Head/>
  <Element/>
</div>

<style>
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
</style>