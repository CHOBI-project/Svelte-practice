<script lang="ts">
  let { children } = $props()
</script>

{@render children()}

<footer>
  <small>© 2025 chobi All Rights Reserved.</small>
</footer>

<style>
    footer {
        padding: 0.5rem 0;
        text-align: center;
        background: #ff5a1e;
        box-shadow: 0 -2px 3px lightgray;
    }
</style>