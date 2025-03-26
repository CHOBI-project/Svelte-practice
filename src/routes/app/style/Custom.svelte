<script>
import CustomProperty from "$appRoutes/style/CustomProperty.svelte";
</script>

<div>
  <h3>--property="値", var(--property)</h3>

  <CustomProperty --color="red"/>
  <CustomProperty --color="green"/>
  <CustomProperty --color="blue"/>

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
    }
</style>
