<script lang="ts">
let isOpen = true;

function handleKeydown(event: KeyboardEvent) {
	if (event.key === "Escape") {
		isOpen = false;
	} else if (event.key === "Enter") {
		isOpen = true;
	}
}
</script>

<svelte:document onkeydown={handleKeydown} />
<div>
    <h3>&lt;svelte:document/&gt;</h3>
    <p>『Esc』で閉じる、『Enter』で開く</p>
    {#if isOpen}
        <div class="modal">
            <p>モーダルウィンドウ</p>
        </div>
    {/if}
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