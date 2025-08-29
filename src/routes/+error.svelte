<script lang="ts">
  import { Oneko } from "lots-o-nekos";
  import { onMount } from "svelte";

  let canInitialize: boolean = $state(false);

  onMount(() => {
    canInitialize = Oneko.canInitialize();
  });
</script>

<svelte:head><title>not found</title></svelte:head>

<h1>404</h1>
<p>this page could not be located!</p>
<p><button onclick={() => {
  const oneko = new Oneko({
    speed: 8 + (Math.random() * 10),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  });
  window.addEventListener("mousemove", (e) => {
    oneko.setTarget(e.clientX, e.clientY);
  });
}} class="action" disabled={!canInitialize}>add cat</button></p>
