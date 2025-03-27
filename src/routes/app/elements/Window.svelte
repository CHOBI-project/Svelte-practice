<script lang="ts">
let screenWidth = 0;
let screenHeight = 0;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
<div>
    <h3>&lt;svelte:window/&gt;</h3>
    <p>横幅: {screenWidth}px</p>
    <p>縦幅: {screenHeight}px</p>
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