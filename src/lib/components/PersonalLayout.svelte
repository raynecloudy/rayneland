<script lang="ts">
	import { censorGore, censorNudity } from "$lib";
	import DropdownSection from "$lib/components/DropdownSection.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/state";

  const { children } = $props();

  let now = $state(new Date());
  setInterval(() => now = new Date(), 1000);

  let currentlyPlaying: any = $state(null);

  const heartbeat = async () => {
    const song = await (await fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song")).json();
    currentlyPlaying = song.track["@attr"].nowplaying === "true" ? song.track : null;
  }
  
  onMount(async () => {
    const fromLocalStorageGore = localStorage.getItem("censor-gore");
    if (fromLocalStorageGore) censorGore.set(fromLocalStorageGore === "true");
    else censorGore.set(false);
    const fromLocalStorageNudity = localStorage.getItem("censor-nudity");
    if (fromLocalStorageNudity) censorNudity.set(fromLocalStorageNudity === "true");
    else censorNudity.set(false);

    await heartbeat();
    setInterval(heartbeat, 15_000);
  });

  $effect(() => localStorage.setItem("censor-gore", `${$censorGore}`));
  $effect(() => localStorage.setItem("censor-nudity", `${$censorNudity}`));
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/personal.css">
</svelte:head>

<main>
  {#if page.url.searchParams.get("raynec.dev") === ""}
    <section class="warning">
      <p>hey, it looks like you found a link pointing to <strong>raynec.dev</strong>. that URL is deprecated. if you could do me a favor, contact the owner of the place you got this link from, and tell them to update it to <strong>rayne.page</strong>!</p>
    </section>
  {/if}
  {@render children?.()}
</main>
<aside>
  <section>
    <ul>
      <li class:highlighted={page.url.pathname === "/"}><a href="/">home</a></li>
      <li class:highlighted={page.url.pathname === "/art"}><a href="/art">art</a></li>
      <li class:highlighted={page.url.pathname === "/commissions"}><a href="/commissions">commissions</a></li>
      <li class:highlighted={page.url.pathname === "/characters" || page.url.pathname.startsWith("/characters/")}><a href="/characters">characters</a></li>
      <li class:highlighted={page.url.pathname === "/contact"}><a href="/contact">contact</a></li>
      <li class:highlighted={page.url.pathname === "/projects"}><a href="/projects">projects</a></li>
      <li><a href="//ai.rayne.page">rAIne</a></li>
      <li class:highlighted={page.url.pathname === "/writing"}><a href="/writing">writing</a></li>
    </ul>
    <ul>
      <li><a href="//rws.samv.me">RWS SMP stats</a></li>
    </ul>
    <p>local time: {now.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles"
    })}</p>
  </section>
  {#if currentlyPlaying}
  <section id="music" style:--image="url({currentlyPlaying.image[3]["#text"]})">
      <div>
        <i class="grey">listening to</i>
        <table>
          <tbody>
            <tr>
              <td><img src={currentlyPlaying.image[1]["#text"]} alt={currentlyPlaying.album["#text"]} style:width="3rem"></td>
              <td><a href={currentlyPlaying.url}><strong>{currentlyPlaying.name}</strong></a><br><span>by {currentlyPlaying.artist["#text"]}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  {/if}
  <DropdownSection title="web rating" id="nav-web-rating">
    <p>this website is rated <strong>14+</strong>. adult themes, gory drawings, and drawings featuring censored nudity are present on this site.</p>
    <a href="https://www.mabsland.com/Adoption.html"><img src="/media/adopt_a_censor_14.gif" alt="Web 14"></a>
    <!-- <p>
      <input type="checkbox" bind:checked={$censorGore} id="censor-gore"><label for="censor-gore">censor gore</label><br>
      <input type="checkbox" bind:checked={$censorNudity} id="censor-nudity"><label for="censor-nudity">censor nudity</label>
    </p> -->
  </DropdownSection>
  <DropdownSection closed title="socials" id="nav-socials">
    <ul>
      <li><a href="https://artfight.net/~raynecloudy">art fight</a></li>
      <li><a href="https://github.com/raynecloudy">github</a></li>
      <li><a href="https://discord.com/users/1336737164691505246">discord (account)</a></li>
      <li><a href="https://discord.gg/mD6metDHNE">discord (server)</a></li>
      <li><a href="https://patreon.com/cw/raynecloudy">patreon</a></li>
      <li><a href="https://toyhou.se/raynecloudy">toyhouse</a></li>
    </ul>
  </DropdownSection>
  <table style:margin="auto">
    <tbody>
      <tr>
        <td><a href="https://steve0greatness.github.io/webring/sites/breakfast/prev.xhtml">Prev</a></td>
        <td><a href="https://steve0greatness.github.io/webring"><img src="/media/0greatness_webring.webp" width="100" height="42" alt="0Greatness Webring"></a></td>
        <td><a href="https://steve0greatness.github.io/webring/sites/breakfast/next.xhtml">Next</a></td>
      </tr>
    </tbody>
  </table>
</aside>
