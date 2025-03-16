<script lang="ts">
  import { onMount } from "svelte";

  let spans: { x: number; y: number; rotate: number }[] = [];
  let number = 20;
  let pointerX = 0;
  let pointerY = 0;
  let container: HTMLDivElement | null = null;

  onMount(() => {
    spans = Array.from({ length: number }, () => ({ x: -100, y: -100, rotate: 0 }));
  });

  function handleMouseMove(event: MouseEvent) {
    if (!container) return;

    const rect = container.getBoundingClientRect();
    pointerX = event.clientX - rect.left;
    pointerY = event.clientY - rect.top;

    spans = spans.map((_, index) => ({
      x: pointerX - 30,
      y: pointerY,
      rotate: pointerY + index * 18,
    }));
  }
</script>

<div>
    <h3>Cursor</h3>

    <div class="container" bind:this={container} on:mousemove={handleMouseMove} role="presentation">
        {#each spans as span (span)}
      <span
              style:left={span.x}px
              style:top={span.y}px
              style:rotate={span.rotate}deg
              style:filter=hue-rotate({span.rotate}deg)
      >
      </span>
        {/each}
    </div>
</div>

<style>
    div {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray, 1px 2px 3px lightgray inset;
        border-radius: 10px;
    }

    h3 {
        margin-bottom: 0.5rem;
        color: #ff3c00;
        border-bottom: 2px dotted lightgray;
    }

    .container {
        position: relative;
        width: 100%;
        height: 200px;
        margin: auto;
        background-color: #161616;
        overflow: hidden;
    }

    span {
        position: absolute;
        width: 15px;
        height: 4px;
        border-radius: 4px;
        background: #0ff;
        pointer-events: none;
        transform-origin: 30px;
        box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
        transition: 0.1s;
        animation: animate 5s linear infinite;
    }

    @keyframes animate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>