<!-- js -->
<script lang="ts">
    let { answer = "デフォルトの値" } = $props();
</script>

<!-- html -->
<div>{answer !== "デフォルトの値" ? "値あり" : "値なし"}: {answer}</div>