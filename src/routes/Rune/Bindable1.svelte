<!-- js -->
<script lang="ts">
    let { value = $bindable() } = $props();
</script>

<!-- html -->
<input type="text" bind:value={value} />

<style>
    input {
        border: 1px solid gray;
        border-radius: 3px;
        padding: 0.2rem;
    }
</style>