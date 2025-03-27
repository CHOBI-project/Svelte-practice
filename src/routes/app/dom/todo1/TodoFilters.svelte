<script lang="ts">
let { setFilter } = $props();
</script>

<div class="filters">
  <button onclick={() => setFilter('all')}>all</button>
  <button onclick={() => setFilter('active')}>active</button>
  <button onclick={() => setFilter('completed')}>completed</button>
</div>

<style>
    button {
        padding: 0 0.25rem;
        border: 1px solid gray;
        border-radius: 5px;
        background: #444444;
        color: #fff;
    }
</style>