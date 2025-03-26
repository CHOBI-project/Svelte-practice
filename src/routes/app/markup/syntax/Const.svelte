<script lang="ts">
type Menu = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

const menus: Menu[] = [
	{ id: 1, name: "ラーメン", price: 1000, quantity: 2 },
	{ id: 2, name: "カレー", price: 0, quantity: 0 },
	{ id: 3, name: "寿司", price: 200, quantity: 4 },
	{ id: 4, name: "焼肉", price: 0, quantity: 0 },
];
</script>

<div>
  <h3>&#123;@const&#125;</h3>
  {#each menus as menu (menu.id)}
    {@const total = menu.price * menu.quantity }
    <p>{menu.name}の合計価格: {total}円</p>
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