<script lang="ts">
let text = $state("初期テキスト");
</script>

<div>
    <h3>bind:property</h3>

    <p>入力内容: {text}</p>
    <input bind:value={text} />
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

        input {
            border: 1px solid gray;
            border-radius: 5px;
            padding: 0.2rem;
        }
    }
</style>

