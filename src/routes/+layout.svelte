<script lang="ts">
  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png?v={Math.random()}" />
  <meta name="robots" content="noai, noimageai">
</svelte:head>

{@render children?.()}
