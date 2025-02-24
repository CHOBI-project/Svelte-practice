<script lang="ts">
  type Menu = {
    id: number,
    name: string,
    price: number,
  };

  let menus: Menu[] = [
    { id: 1, name: "ラーメン", price: 1000 },
    { id: 2, name: "カレー", price: 0 },
    { id: 3, name: "寿司", price: 200 },
    { id: 4, name: "焼肉", price: 0 },
  ];
</script>

<div>
    <h3>&#123;#snippet name(引数)&#125;...&#123;/snippet&#125; → &#123;@render name(引数)&#125;</h3>

    {#snippet information(item: Menu)}
        <p>id : {item.id}</p>
        <p>name: {item.name}</p>
    {/snippet}

    {#each menus as menu}
        {#if menu.price !== 0}
            <div>
                {@render information(menu)}
                <p>price: {menu.price}</p>
                <p>時価なため価格が変動する可能性があります。</p>
            </div>
        {:else}
            <div>
                {@render information(menu)}
                <p>価格が決まっていません。</p>
            </div>
        {/if}
    {/each}
</div>

<!-- css -->
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