<script lang="ts">
  import { onMount } from "svelte";
  import DropdownClose from "$lib/components/DropdownClose.svelte";
  import { pronouns } from "$lib";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();

  let birthdayDropdown: HTMLElement;

  let today = $state(new Date());

  const birthdate = 1251010800000;
  const birthday = 1787468400000;

  let age: number = $state(0);
  let distanceToBirthday: number = $state(0);

  let barrelRoll = $state(false);
  let lightMode = $state(false);

  const upDate = () => {
    today = new Date();
    age = new Date(Date.now() - birthdate).getFullYear() - 1970;
    distanceToBirthday = (birthday - today.getTime());
  }

  const tabTo = (selector: string, fallback?: string) => {
    let element = (document.querySelector(selector) ?? document.querySelector(fallback ?? "a, button")) as HTMLButtonElement;
    element.focus();
  }

  upDate();

  onMount(async () => {
    setInterval(upDate, 1000);

    const params = new URLSearchParams(location.search);
    barrelRoll = params.get("barrel_roll") === "" || !!params.get("barrel_roll");

    document.addEventListener("keydown", (event) => {
      if (event.key === "l") {
        event.preventDefault();
        lightMode = !lightMode;
        if (lightMode === true) new Audio("/light_mode.wav").play();
      }
    });
  });
</script>

<style>
  @font-face {
    font-family: "Commissioner";
    src: url("/fonts/commissioner/font.ttf");
  }

  @font-face {
    font-family: "DM Serif Text";
    src: url("/fonts/dmseriftext/font.ttf");
  }

  @font-face {
    font-family: "Maple Mono";
    src: url("/fonts/maplemono/font.ttf");
  }

  :root {
    --bg: #0a0211;
    --disabled: #897b96;
    --link: #bf9dff;
    --text: #e4d8ff;
    --outline: 0.0625rem solid #5f4774;
  }

  :root:has(app.light) {
    --bg: #ffffff;
    --text: #1d1d1d;
    --link: #b169a1;
    --disabled: #585858;
  }

  :global(body) {
    background-color: var(--bg) !important;
    color: var(--text);
    color-scheme: dark;
    font-family: "Commissioner";
    margin: 2rem;
    display: flex;
    justify-content: center;
  }

  :global(app.barrel-roll) {
    transform: rotate(-88deg) scale(0.4) translateX(10rem) translateY(-37rem);
    height: calc(100vh - 4rem);
    z-index: 1;
  }

  :global(::selection) {
    background-color: #9771ffbb;
    color: var(--text);
  }

  :global(a, button) {
    color: inherit;
    font: inherit;
    background-color: inherit;
    border: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    position: relative;
    border-radius: 0.2rem;
  }

  :global(:is(a, button):not(:disabled)) {
    cursor: pointer;
  }

  :global(:is(a, button).action) {
    text-decoration: none;
    padding: 0.4rem 0.6rem;
    line-height: 1;
    outline: var(--outline) !important;
    color: var(--text);
    user-select: none;
    display: inline-block;
  }

  :global(.action-bar) {
    display: flex;
    gap: 0.6rem;
  }

  :global(.action:is(:focus-visible, :hover):not(:has(img))):not(:disabled) {
    color: var(--bg);
    outline: none;
    text-decoration: none;
  }

  :global(.action:not(:has(img))):not(:disabled)::before {
    content: "";
    height: 100%;
    width: 0%;
    background-color: var(--text);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 0.2s;
    border-radius: 0.2rem;
  }
  
  :global(.action:is(:focus-visible, :hover):not(:has(img))):not(:disabled)::before {
    width: 100%;
  }

  :global(:is(a, button):not(.action):is(:hover, :focus-visible)) {
    outline: 0;
    text-decoration: underline;
  }

  :global(:is(a, button):is(:disabled, [inert=""])) {
    color: var(--disabled);
    outline-color: var(--disabled) !important;
  }

  :global(img, video) {
    max-width: 100%;
    user-select: none;
  }

  :global(:is(td, th):not(header *)) {
    outline: var(--outline);
    z-index: 1;
  }

  :global(code) {
    font-family: "Maple Mono";
  }

  :global(sub) {
    font-size: 0.8rem;
    line-height: 0.8rem;
  }

  :global(p, li) {
    line-height: 1.5rem;
  }

  :global(pre) {
    overflow: auto;
  }

  app {
    max-width: 55rem;
    width: 100%;
  }

  @keyframes light {
    0% {
      filter: blur(0.5rem) brightness(1.5) contrast(3);
    }

    100% {
      filter: blur(0rem) brightness(1) contrast(3);
    }
  }

  app.light {
    animation: light linear 10s 1;
    filter: blur(0rem) brightness(1) contrast(3);
  }

  header {
    margin-bottom: 1rem;
  }

  #banner {
    border-radius: 2rem;
    width: 100%;
    height: 14rem;
    object-fit: cover;
    display: block;
    box-shadow: 0 2rem 7rem #f9c2d95e;
  }

  header info {
    display: flex;
    gap: 2rem;
    margin: 2rem;
  }

  #pfp {
    border-radius: 25%;
    width: 12rem;
    aspect-ratio: 1;
    display: block;
    flex-shrink: 0;
  }

  #pfp :where(:not(dropdown) > img, button:has(> img)) {
    display: block;
    border-radius: 25%;
    background-color: unset;
    outline: none;
  }

  #pfp:has(button:focus-visible) {
    outline: 0.125rem solid var(--text);
  }

  header info aside {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  header info aside table {
    height: fit-content;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  header info aside table :is(td, th) {
    padding: 0.5rem 0.8rem;
    text-align: center;
  }

  :global(th) {
    font-style: italic;
    font-weight: unset;
  }

  #socials_bar {
    display: flex;
    border-radius: 1rem;
    overflow: hidden;
  }

  #socials_bar a {
    display: block;
    user-select: none;
    line-height: 0rem;
    padding: 0.8rem;
    flex: 1 1;
    text-align: center;
    background-color: var(--bg);
  }

  #socials_bar img:not(.new) {
    height: 1.4rem;
  }

  #socials_bar a:is(:hover, :focus-visible) {
    outline: none;
    filter: invert();
  }

  :global(:has(> dropdown)) {
    position: relative;
  }

  :global(dropdown) {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--bg);
    padding: 2rem;
    border-radius: 1rem;
    outline: var(--outline);
    min-width: 18rem;
    max-width: 25rem;
    text-align: initial;
    z-index: 2;
  }

  :global(:is(nav, aside) dropdown) {
    right: 0;
    left: unset;
  }

  :global(dropdown:not(.show)) {
    display: none;
  }

  :global(dropdown:has(pages)) {
    width: 25rem;
  }

  :global(dropdown h2) {
    margin: 0;
    text-wrap: nowrap;
  }

  :global(:has(> dropdown) :is(a, button)) {
    cursor: help;
    user-select: initial;
  }

  :global(pages) {
    display: flex;
    gap: 2rem;
  }

  :global(pages > *) {
    flex: 1 1;
  }

  :global(.new) {
    position: relative;
    top: 50%;
  }

  main {
    width: calc(100% - 8rem);
    max-width: calc(100vw - 20rem);
    position: relative;
    display: flow-root;
  }

  main > div:has(nav) {
    position: absolute;
    top: 0;
    right: -14rem;
    width: 12rem;
    min-height: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
  }
  
  main nav {
    width: 8rem;
    position: sticky;
    top: 2rem;
    background-color: var(--bg);
    z-index: 1;
  }
  
  :global(main > div:has(nav) > .block) {
    position: sticky;
    top: 2.2rem;
  }

  :global(main nav, .block) {
    padding: 2rem;
    border-radius: 1rem;
    outline: var(--outline);
    margin: 1rem 0;
  }

  :global(:is(:is(main > :not(:has(nav)), dropdown) a, main > a):not(pre code a)) {
    color: var(--link);
    font-weight: 650;
  }

  :global(a, button) {
    text-decoration: none;
  }

  :global(.skip_to:not(:has(:active, :focus-visible))) {
    font-size: 0;
    line-height: 0;
  }

  :global(.skip_to button) {
    margin: 0 0.5rem;
  }

  nav ul {
    list-style: ">  ";
    padding: 0;
  }

  :global(.rainbow_donator) {
    animation: rainbow 4s infinite linear forwards;
  }

  :global(.rainbow_donator::marker) {
    color: #ff8080;
  }

  :global(.rainbow_donator a:not(:focus-visible, :hover)) {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg, #ff8080, #ffdf87);
    color: #ff9a73;
    text-shadow: none;
  }

  :global(.grey, th, footer) {
    color: var(--disabled);
  }

  @keyframes rainbow {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }

  video[src="/barrel_roll.webm"] {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
</style>

<svelte:head>
  <meta name="og:locale" content="en_US">
  <meta name="og:site_name" content="rayne cloudy's website">
</svelte:head>

{#if barrelRoll}
  <video src="/barrel_roll.webm" onended={() => barrelRoll = false} autoplay><track kind="captions"></video>
{/if}
<app class:light={lightMode} class:barrel-roll={barrelRoll}>
  <span class="skip_to">skip to....<button aria-label="skip to" onclick={() => tabTo("main :is(a, button):not(nav a):first-of-type", "main :is(a, button):first-of-type")}>main content</button><button aria-label="skip to" onclick={() => tabTo("main :is(a, button):first-of-type")}>navigation</button></span>
  <header>
    <img src="/banner.png" alt="sunset" id="banner">
    <info>
      <div id="pfp">
        <button>
          <img src="/profile.png" alt="Raynecloudy">
        </button>
      </div>
      <div>
        <h1>Rayne</h1>
        <p>ambitious teenage web developer{today.getDate() == 23 && today.getMonth() == 7 ? " (and the birthday star!)" : "."}</p>
      </div>
      <aside>
        <table>
          <thead>
            <tr><th>pronouns</th><th>age</th></tr>
          </thead>
          <tbody>
            <tr><td><a href="/gender">{pronouns}</a></td><td><button onclick={() => {
              birthdayDropdown.classList.toggle("show");
            }}>{age}</button><dropdown bind:this={birthdayDropdown}>
              <h2>birthday tracker</h2>
              <sub>birthdate: 23rd of august, 2009</sub>
              <h3>{Math.floor(distanceToBirthday / (1000 * 60 * 60 * 24))}d {Math.floor((distanceToBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h {Math.floor((distanceToBirthday % (1000 * 60 * 60)) / (1000 * 60))}m {Math.floor((distanceToBirthday % (1000 * 60)) / 1000)}s</h3>
              <DropdownClose />
            </dropdown></td></tr>
          </tbody>
        </table>
      </aside>
    </info>
    <div id="socials_bar">
      <a href="https://artfight.net/~raynecloudy" title="art fight"><img src="/socials/Art Fight.svg" alt="art fight"></a>
      <a href="https://bsky.app/profile/raynec.dev" title="bluesky"><img src="/socials/bsky-white.svg" alt="bluesky"></a>
      <a href="https://discord.gg/mD6metDHNE" title="discord server"><img src="/socials/Discord-Symbol-White.svg" alt="discord"></a>
      <a href="https://github.com/raynecloudy" title="github"><img src="/socials/GitHub_Invertocat_Light.svg" alt="github"></a>
      <a href="https://instagram.com/raynecloudyart" title="instagram"><img src="/socials/Instagram_Glyph_White.svg" alt="instagram"></a>
      <a href="https://patreon.com/cw/raynecloudy" title="patreon"><img src="/socials/PATREON_SYMBOL_1_WHITE_RGB.svg" alt="patreon"></a>
      <a href="https://toyhou.se/raynecloudy" title="toyhouse"><img src="/socials/Toyhouse.svg" alt="toyhouse"></a>
      <a href="https://youtube.com/@raynecloudy" title="youtube"><img src="/socials/YouTube.svg" alt="youtube"></a>
    </div>
  </header>
  <main>
    <div>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/animations">animations</a></li>
          <li><a href="/art">art</a> ↗</li>
          <li><a href="https://toyhou.se/raynecloudy/characters">characters</a> ↗</li>
          <li><a href="/commissions">commissions</a></li>
          <li><a href="/contact">contact</a></li>
          <li><a href="/donators">donators</a></li>
          <li><a href="/feed">feed</a></li>
          <li><a href="/guestbook">guestbook</a></li>
          <li><a href="https://hatch.raynec.dev/">hatch.lol editor</a> ↗</li>
          <li><a href="/gender">queer identity</a></li>
          <li><a href="https://ai.raynec.dev/">rAIne</a> ↗</li>
          <li><a href="/things">things</a></li>
          <li><a href="/writing">writing</a></li>
        </ul>
      </nav>
    </div>
    {@render children?.()}
    <p><span class="skip_to"><button aria-label="skip to" onclick={() => tabTo("a, button")}>back to top</button></span></p>
  </main>
</app>
