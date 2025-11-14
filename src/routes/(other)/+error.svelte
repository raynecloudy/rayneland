<script lang="ts">
    import { page } from "$app/state";
  import { Oneko } from "lots-o-nekos";
  import { onMount } from "svelte";

  let canInitialize: boolean = $state(false);

  onMount(() => {
    canInitialize = Oneko.canInitialize();
  });
</script>

<svelte:head><title>not found</title></svelte:head>

<style>
  @font-face {
    font-family: "Maple Mono";
    src: url("/fonts/maplemono/font.ttf");
  }

  :global(body) {
    margin: 4rem;
    background-color: #000000;
    color: #ffffff;
    font-family: "Maple Mono";
  }

  ::selection {
    background-color: #ffffff;
    color: #000000;
  }
  
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: #ffffff;
  }
</style>

<h1>{page.status}</h1>
{#if page.status === 404}
  <p>this page could not be located. make sure you typed the url correctly.</p>
  <p>path: {page.url.pathname}</p>
{:else if page.status === 500}
  <p>uh oh, there was an internal server error. consider <a href="https://github.com/raynecloudy/rayneland/issues">reporting this error</a>.</p>
{/if}
<p><button onclick={() => {
  const oneko = new Oneko({
    speed: 8 + (Math.random() * 10),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  });
  window.addEventListener("mousemove", (e) => {
    oneko.setTarget(e.clientX, e.clientY);
  });
}} class="action" disabled={!canInitialize}>[add cat]</button></p>
