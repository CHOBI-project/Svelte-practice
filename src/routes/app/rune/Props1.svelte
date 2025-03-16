<script lang="ts">
    let { answer = "デフォルトの値" } = $props();
</script>

<div>{answer !== "デフォルトの値" ? "値あり" : "値なし"}: {answer}</div>