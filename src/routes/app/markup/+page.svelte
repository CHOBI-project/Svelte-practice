<script>
    import If from "$appRoutes/markup/syntax/If.svelte";
    import Each from "$appRoutes/markup/syntax/Each.svelte";
    import Key from "$appRoutes/markup/syntax/Key.svelte";
    import Await from "$appRoutes/markup/syntax/Await.svelte";
    import Snippet from "$appRoutes/markup/syntax/Snippet.svelte";
    import Html from "$appRoutes/markup/syntax/Html.svelte";
    import Const from "$appRoutes/markup/syntax/Const.svelte";
    import Debug from "$appRoutes/markup/syntax/Debug.svelte";
    import Bind from "$appRoutes/markup/directive/Bind.svelte";
    import Use from "$appRoutes/markup/directive/Use.svelte";
    import Transition from "$appRoutes/markup/directive/Transition.svelte";
    import InOut from "$appRoutes/markup/directive/InOut.svelte";
    import Animate from "$appRoutes/markup/directive/Animate.svelte";
</script>

<svelte:head>
  <title>Markup</title>
  <meta name="description" content="Markupについての勉強"/>
</svelte:head>

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
      </li>
      <li>
        <p class="basic">&#123;@render&#125;...</p>
        <p class="desc">snippetをレンダリングするためのタグ</p>
      </li>
      <li>
        <p class="basic">&#123;@html&#125;...</p>
        <p class="desc">文字列のHTMLタグを有効にする</p>
      </li>
      <li>
        <p class="basic">&#123;@const&#125;...</p>
        <p class="desc">&#123; &#125;ブロック内で使用するローカル定数</p>
      </li>
      <li>
        <p class="basic">&#123;@debug&#125;...</p>
        <p class="desc">console.log()の役割</p>
      </li>
      <li>
        <p class="basic">bind:</p>
        <p class="desc">バインドされた値を更新する</p>
      </li>
      <li>
        <p class="basic">use:</p>
        <p class="desc">要素マウント時に呼び出される関数</p>
      </li>
      <li>
        <p class="basic">transition:</p>
        <p class="desc">DOMに要素が出入りする際に指定したアニメーションがトリガーされる</p>
      </li>
      <li>
        <p class="basic">in:, out:</p>
        <p class="desc">transition:のアニメーションのinとoutのアニメーションを指定する</p>
      </li>
      <li>
        <p class="basic">animate:</p>
        <p class="desc">eachブロック内でのアニメーション</p>
      </li>
    </ul>
  </div>

  <If/>
  <Each/>
  <Key/>
  <Await/>
  <Snippet/>
  <Html/>
  <Const/>
  <Debug/>
  <Bind/>
  <Use/>
  <Transition/>
  <InOut/>
  <Animate/>
</div>

<style>
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
</style>