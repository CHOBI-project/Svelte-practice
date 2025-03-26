<script lang="ts">
const { value = $bindable() } = $props();
</script>

<input type="text" bind:value={value} />

<style>
    input {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0.2rem;
    }
</style>