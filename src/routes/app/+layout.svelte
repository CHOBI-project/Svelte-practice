<script lang="ts">
const { children } = $props();
</script>

<div>
  {@render children()}
</div>

<footer>
  <small>© 2025 chobi All Rights Reserved.</small>
</footer>

<style>
    div {
        position: absolute;
        top: 8%;
        width: 100%;
        height: 88%;
        overflow-y: scroll;
    }

    footer {
        position: absolute;
        top: 96%;
        left: 0;
        width: 100%;
        height: 4%;
        text-align: center;
        background: #ff5a1e;
        box-shadow: 0 -2px 3px lightgray;
    }
</style>