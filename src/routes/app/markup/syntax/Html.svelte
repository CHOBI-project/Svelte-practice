<script lang="ts">
const message =
	"<div><h1>Hello Svelte</h1><p>javascriptのフレームワークです。</p></div>";
</script>

<div>
    <h3>&#123;@html value&#125;</h3>
    <div>{message}</div>
    <div>{@html message}</div>
</div>

<style>
    div {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;

        h3 {
            margin-bottom: 0.5rem;
            color: #ff3c00;
            border-bottom: 2px dotted lightgray;
        }
    }
</style>