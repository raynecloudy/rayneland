<script lang="ts">
  const getFeed = async () => {
    return new DOMParser().parseFromString(await (await fetch("/feed.rss")).text(), "text/xml");
  }
</script>

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
