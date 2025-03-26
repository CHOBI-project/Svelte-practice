<script lang="ts">
const count = $state(0);
</script>


<div>
    <h3>class=&#123; &#91; "クラス名1", &#123; クラス名2 : stateClass &#125; &#93; &#125;</h3>
    <div class={["default", { over: count > 5, down: 0 > count }]}>
        count: {count}は
        {#if count > 5}
            <span>5より大きいです</span>
        {:else if 0 > count}
            <span>0より小さいです</span>
        {:else}
            <span>5以下です</span>
        {/if}
    </div>
    <button type="button" onclick={() => count--}>down</button>
    <button type="button" onclick={() => count++}>up</button>

    <p class="global">:globalでスタイリングされています</p>
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

        button {
            padding: 0 0.25rem;
            border: 1px solid gray;
            border-radius: 5px;
        }

        .default {
            color: black;
        }

        .over {
            color: #fdf104;
            background: #ff4400;
        }

        .down {
            color: aqua;
            background: #00227c;
        }
    }
</style>
