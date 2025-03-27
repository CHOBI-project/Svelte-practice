<script lang="ts">
async function roll() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() < 0.3) {
				reject(new Error("Request failed"));
				return;
			}

			resolve(Math.ceil(Math.random() * 6));
		}, 1000);
	});
}

let promise = $state(roll());
</script>

<div>
  <h3>&#123;#await expression&#125;...&#123;:then name&#125;...&#123;:catch name&#125;...&#123;/await&#125;</h3>
  <button onclick={() => promise = roll()}>
    サイコロ振る
  </button>

  {#await promise}
    <p>Loading...</p>
  {:then number}
    <p>抽選No.{number}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
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

        button {
            padding: 0 0.25rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }
</style>