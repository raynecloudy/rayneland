<script lang="ts">
	import { browser } from "$app/environment";
  import FeaturedProjects from "$lib/components/FeaturedProjects.svelte";
  import { onMount } from "svelte";

  let presence: "online" | "idle" | "dnd" | "offline" = $state("offline");
  let feed: Document | null = $state(null);

  const heartbeat = async () => {
    presence = await (await fetch("/api/presence")).text() as typeof presence;
  }

  onMount(async () => {
    feed = new DOMParser().parseFromString(await (await fetch("/feed.rss")).text(), "text/xml");
    await heartbeat();
    setInterval(heartbeat, 30_000);
  });
</script>

<svelte:head>
  <title>rayne.page</title>
</svelte:head>

<style>
  @font-face {
    font-family: "monitor";
    src: url("/fonts/Web437_NEC_APC3_8x16.woff");
  }

  #me > img {
    width: 7rem;
    height: 7rem;
  }

  #me > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #presence {
    background-color: var(--presence-color-background);
    color: var(--presence-color);
    padding: 0.6rem;
    width: fit-content;
    line-height: 0rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  #presence.offline {
    --presence-color: #8f809c;
    --presence-color-background: #8f809c1c;
  }

  #presence.online {
    --presence-color: #89d8aa;
    --presence-color-background: #89d8aa1c;
  }

  #presence div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--presence-color);
  }
</style>

<section>
  <div id="me" class="flex">
    <img src="/media/heads/rayne.gif" alt="rayne">
    <div>
      <h1>rayne <span class="grey">d.</span></h1>
      <div class="flex">
        <div id="presence" title="this is based on my discord status (i'm on there a LOT)" class={presence === "offline" ? "offline" : "online"}><div></div>{presence === "offline" ? "offline" : "online!"}</div>
      </div>
    </div>
  </div>
  <p>hey, my name is rayne! this is my funny little spot on the internet.</p>
  <p>i'm non-binary, and use any pronouns! i'm also a high school sophomore, a digital artist, and a web developer. i spend most of my time talking on my <a href="https://discord.gg/mD6metDHNE">discord server</a> or working on <a href="/projects">software projects</a>.</p>
</section>
<!-- svelte-ignore a11y_distracting_elements -->
<marquee>i love my supporters: <a class="rainbow" href="https://playfulmathematician.com">bringupyourpost</a>, <a class="rainbow" href="https://dumorando.com">dumorando</a>, <a href="https://milosantos.com">Milo</a>, <a href="https://samv.me">shock59</a></marquee>
<section>
  <h2>blog</h2>
  <ul>
    {#each feed?.querySelectorAll("item") as post}
      <li><a href="/feed/{post.querySelector("guid")?.innerHTML}">{post.querySelector("title")?.innerHTML}</a> - {post.querySelector("pubDate")?.innerHTML}</li>
    {/each}
  </ul>
</section>
<section>
  <h2>what i'm working on</h2>
  <ul>
    <li><a href="https://github.com/nekomide">Nekomide</a> is my web development IDE that i've been working on since april 2024. it truly is my passion project and i love it more than anything else i've ever created</li>
    <li>i've become a developer for <a href="https://nitrobolt.org">NitroBolt</a> in the past few months which is so cool because i've admired the project from afar for quite some time now</li>
  </ul>
  <p>for a full list of projects i've created, check out <a href="/projects">this page</a>!</p>
  <FeaturedProjects />
</section>
