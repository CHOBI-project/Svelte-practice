<!-- js -->
<script lang="ts">
  let menus = $state(
      [
        { id: 1, name: "ラーメン", price: 800 },
        { id: 2, name: "寿司", price: 1200 },
        { id: 3, name: "カレー", price: 600 },
      ]
  );
</script>

<!-- html -->
<div>
    <h3>&#123;#each&#125;...&#123;/each&#125;</h3>
    {#each menus as menu (menu.id)}
        <div>
            <p>商品: {menu.name}</p>
            <p>価格: {menu.price}円</p>
        </div>
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