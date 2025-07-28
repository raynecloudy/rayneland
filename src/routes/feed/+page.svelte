<script lang="ts">
  const getFeed = async () => {
    return new DOMParser().parseFromString(await (await fetch("/feed.rss")).text(), "text/xml");
  }
</script>

<svelte:head>
  <title>feed</title>
  <meta name="og:description" content="my RSS feed">
  <meta name="og:title" content="feed">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://raynec.dev/feed">
</svelte:head>

<h1>feed</h1>
{#await getFeed()}
  <p>loading....</p>
{:then data} 
  {#each data.querySelectorAll("item") as post}
    <div class="block">
      <h2>{post.querySelector("title")?.innerHTML}</h2>
      <sub>{post.querySelector("pubDate")?.innerHTML}</sub>
      <p>{post.querySelector("description")?.innerHTML}</p>
      <p><a href={post.querySelector("link")?.innerHTML}>{post.querySelector("link")?.innerHTML}</a></p>
    </div>
  {/each}
{/await}
