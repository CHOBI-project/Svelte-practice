<script>
    import Style from "$appRoutes/style/Style.svelte";
    import Global from "$appRoutes/style/Global.svelte";
    import Custom from "$appRoutes/style/Custom.svelte";
    import Class from "$appRoutes/style/Class.svelte";
</script>

<svelte:head>
  <title>Style</title>
  <meta name="description" content="classについての勉強"/>
</svelte:head>

<div class="wrapper">
  <h2>Styling</h2>
  <p>svelteにおけるレイアウトの仕方</p>

  <div class="style">
    <ul>
      <li>
        <p class="property">style:</p>
        <p class="desc">今までのstyle属性は複数かけるが見にくかったが1ずつ記述できる</p>
      </li>
      <li>
        <p class="property">:global</p>
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

  <Style/>
  <Global/>
  <Custom/>
  <Class/>
</div>

<style>
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
</style>