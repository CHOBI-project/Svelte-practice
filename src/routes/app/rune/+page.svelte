<script>
    import State from "./State.svelte";
    import Derived from "./Derived.svelte";
    import Effect from "./Effect.svelte";
    import Props from "./Props.svelte";
    import Bindable from "./Bindable.svelte";
    import Inspect from "./Inspect.svelte";
</script>

<svelte:head>
  <title>Rune</title>
  <meta name="description" content="Rune(ルーン)についての勉強"/>
</svelte:head>

<div class="wrapper">
  <h2>Rune(ルーン)</h2>
  <p>Runeは「.svelteファイル」や「.svelte.js/.svelte.tsファイル」で使用するシンボルで、Svelteコンパイラをコントロールします。</p>

  <div class="runes">
    <ul>
      <li>
        <p class="rune">$state</p>
        <p class="desc">reactのuseStateみたいなもの</p>
      </li>
      <li>
        <p class="rune">$derived</p>
        <p class="desc">useStateからの導出(derive)</p>
      </li>
      <li>
        <p class="rune">$effect</p>
        <p class="desc">reactのuseEffectみたいなもの</p>
      </li>
      <li>
        <p class="rune">$props</p>
        <p class="desc">reactのpropsと一緒</p>
      </li>
      <li>
        <p class="rune">$bindable</p>
        <p class="desc">propsを子から親に渡せる(※乱用しない)</p>
      </li>
      <li>
        <p class="rune">$inspect</p>
        <p class="desc">stateの変更時にconsole.logが発火</p>
      </li>
      <li>
        <p class="rune">$host</p>
        <p class="desc"></p>
      </li>
    </ul>
  </div>

  <State/>
  <Derived/>
  <Effect/>
  <Props/>
  <Bindable/>
  <Inspect/>
</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    h2 {
        color: #ff3f00;
    }

    .runes {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;
    }

    .runes ul li {
        display: flex;
        list-style: none;
        padding: 0.1rem 0;
    }

    .runes ul li:hover .rune {
        color: #ff4400;
    }

    .rune {
        width: 150px;
    }
</style>
