<script lang="ts">
	import { page } from "$app/state";
  import PersonalLayout from "$lib/components/PersonalLayout.svelte";
	import { Oneko } from "lots-o-nekos";
  let { data } = $props();
</script>

<svelte:head>
  <title>error {page.status}</title>
</svelte:head>

<PersonalLayout {...data}>
  <section>
    <h1>{page.status}</h1>
    {#if page.status === 404}
      <p>the page you're looking for could not be located. :&lpar;</p>
    {:else}
      <p>{page.error?.message}</p>
    {/if}
    <button onclick={() => {
      const oneko = new Oneko({
        speed: 8 + (Math.random() * 10),
        updateSpeed: 60 + (Math.random() * 40),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      });
      window.addEventListener("mousemove", (e) => {
        oneko.setTarget(e.clientX, e.clientY);
      });
    }}>add cat</button>
  </section>
</PersonalLayout>
