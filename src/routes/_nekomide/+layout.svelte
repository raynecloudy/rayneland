<script lang="ts">
  // import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <!-- <link rel="icon" href={favicon} /> -->
  <link rel="stylesheet" href="/styles/nekomide.css">
</svelte:head>

<header>
  <a href="/nekomide"><img src="/media/nekomide" alt="Nekomide"></a>
  <a href="/nekomide/team"><span>Team</span></a>
  <hr>
  <a href="/nekomide/discord"><span>Discord</span></a>
  <a href="https://github.com/nekomide"><span>GitHub</span></a>
</header>
{@render children?.()}
