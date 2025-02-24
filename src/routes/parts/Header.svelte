<!-- js -->
<script>
</script>

<!-- html -->
<header>
    <a href="/"><img src="/src/assets/svelte-horizontal.png" alt="Svelte" width=150></a>

    <nav>
        <ul>
            <li><a href="../Rune">Rune</a></li>
            <li><a href="../Markup">Markup</a></li>
        </ul>
    </nav>
</header>

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