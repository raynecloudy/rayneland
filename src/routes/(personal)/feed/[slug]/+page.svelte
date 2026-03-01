<script lang="ts">
	import { page } from "$app/state";
	import { onMount } from "svelte";

  let feed: Document | null = null;

  onMount(async () => {
    feed = new DOMParser().parseFromString(await (await fetch("/feed.rss")).text(), "text/xml");
  });
</script>

<svelte:head>
  <title>blog post</title>
</svelte:head>

{#each feed?.querySelectorAll("item") as post}
  {#if post.querySelector("guid")?.innerHTML === page.params.slug}
    <section>
      <h1>{post.querySelector("title")?.innerHTML}</h1>
      <p>{post.querySelector("pubDate")?.innerHTML}</p>
      {@html post.querySelector("description")?.innerHTML}
    </section>
  {/if}
{/each}
