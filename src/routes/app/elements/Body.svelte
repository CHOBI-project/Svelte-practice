<script lang="ts">
const bgColors = ["#fff", "#2c2c2c"];
const textColors = ["#000", "#fff"];
let index = 0;

function changeBackground() {
	document.body.style.backgroundColor = bgColors[index];
	document.body.style.color = textColors[index];
	index = (index + 1) % bgColors.length;
}
</script>

<svelte:body onclick={changeBackground} />
<div>
    <h3>&lt;svelte:body/&gt;</h3>
    <p>画面をクリックすると昼夜モード切り替えられます。</p>
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
