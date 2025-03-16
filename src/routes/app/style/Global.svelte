<div>
  <h3>:global(セレクタ)</h3>
  <p class="global">:globalでスタイリングされています</p>
</div>

<style>
    :global(.global) {
        color: white;
        text-shadow: 2px 2px 5px #ff4400;
    }

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
