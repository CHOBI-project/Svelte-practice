<script lang="ts">
  let { children } = $props()
</script>

<header>
  <a href="/"><img src="/src/assets/svelte-horizontal.png" alt="Svelte" width=150></a>

  <nav>
    <ul>
      <li><a href="/app/rune">Rune</a></li>
      <li><a href="/app/markup">Markup</a></li>
      <li><a href="/app/elements">Elements</a></li>
      <li><a href="/app/style">Style</a></li>
      <li><a href="/app/store">Store</a></li>
      <li><a href="/app/animation">Animation</a></li>
      <li><a href="/app/dom">Dom操作</a></li>
      <li><a href="/app/routing">routing</a></li>
      <li><a href="/app/form">form</a></li>
      <li><a href="/app/crud">crud</a></li>
      <li><a href="/app/redirect">redirect</a></li>
    </ul>
  </nav>
</header>

{@render children()}

<style>
    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8%;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        box-shadow: 0 2px 3px lightgray;
        z-index: 100;
        background: white;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        nav {
            width: 90%;
            padding: 0 2rem;

            ul {
                display: flex;

                li {
                    list-style: none;
                    margin: 0.75rem;

                    a {
                        color: gray;
                        text-decoration: none;
                    }

                    a:hover {
                        color: #ff4400;
                    }
                }
            }
        }
    }
</style>