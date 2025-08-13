<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import DropdownClose from "./DropdownClose.svelte";

  let { children } = $props();

  let birthdayDropdown: HTMLElement;
  let profileCreditDropdown: HTMLElement;

  let today = $state(new Date());

  const birthdate = 1251010800000;
  const birthday = 1755932400000;

  let age: number = $state(0);
  let distanceToBirthday: number = $state(0);
  
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

  onMount(() => {
    setInterval(upDate, 1000);
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
    font-family: "JetBrains Mono";
    src: url("/fonts/jetbrainsmono/font.ttf");
  }

  :root {
    /* cursor: url("/cursors/default.png"), auto; */
    --disabled: #929292;
    --outline: 0.0625rem solid #ffffff;
  }

  :global(body) {
    background-color: #000000;
    color: #ffffff;
    color-scheme: dark;
    font-family: "Commissioner";
    margin: 2rem;
    display: flex;
    justify-content: center;
  }

  :global(::selection) {
    background-color: #6a92ff94;
    color: #ffffff;
  }

  :global(a, button) {
    color: inherit;
    font: inherit;
    background-color: inherit;
    border: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    /* cursor: url("/cursors/interact.png"), auto; */
  }

  :global(:is(a, button):not(:disabled)) {
    cursor: pointer;
  }

  :global(:is(a, button).action) {
    text-decoration: none;
    padding: 0.4rem 0.6rem;
    line-height: 1;
    outline: var(--outline) !important;
    color: #ffffff;
    user-select: none;
    display: inline-block;
  }

  :global(.action-bar) {
    display: flex;
    gap: 0.6rem;
  }

  :global(:is(a, button):is(:focus-visible, :hover):not(:has(img))):not(:disabled) {
    background-color: #ffffff;
    color: #000000;
    outline: none;
    text-decoration: none;
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
  }

  :global(code) {
    font-family: "JetBrains Mono";
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
    max-width: 50rem;
    width: 100%;
  }

  header {
    margin-bottom: 1rem;
  }

  #banner {
    border-radius: 2rem;
    width: 100%;
    height: 13rem;
    object-fit: cover;
    display: block;
    box-shadow: 0 2rem 7rem #f9c2d95e;
  }

  header info {
    display: flex;
    gap: 2rem;
    margin: 0 2rem;
  }

  #pfp {
    border-radius: 2rem;
    width: 10rem;
    height: 10rem;
    aspect-ratio: 1;
    display: block;
    position: relative;
    top: -2rem;
    flex-shrink: 0;
  }

  #pfp :where(:not(dropdown) > img, button:has(> img)) {
    display: block;
    border-radius: 2rem;
    background-color: unset;
    outline: none;
  }

  #pfp:has(button:focus-visible) {
    outline: 0.125rem solid #ffffff;
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

  header info aside table td a {
    text-decoration: solid;
  }

  :global(th) {
    font-style: italic;
    font-weight: unset;
  }

  #social_bar {
    display: flex;
    border-radius: 1rem;
    overflow: hidden;
  }

  #social_bar a {
    display: block;
    user-select: none;
    line-height: 0rem;
    padding: 0.8rem;
    flex: 1 1;
    text-align: center;
    background-color: #000000;
  }

  #social_bar img:not(.new) {
    height: 1.4rem;
  }

  #social_bar a:is(:hover, :focus-visible) {
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
    background-color: #000000;
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
    background-color: #000000;
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
    color: #ffa4eb;
  }

  :global(pre code a) {
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

  :global(.grey, th) {
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
</style>

<svelte:head>
  <meta name="og:locale" content="en_US">
  <meta name="og:site_name" content="rayne cloudy's website (raynecloudy)">
</svelte:head>

<app in:fly={{ y: 20 }}>
  <span class="skip_to">skip to....<button aria-label="skip to" onclick={() => tabTo("main :is(a, button):not(nav a):first-of-type", "main :is(a, button):first-of-type")}>main content</button><button aria-label="skip to" onclick={() => tabTo("main :is(a, button):first-of-type")}>navigation</button></span>
  <header>
    <img src="/banner.png" alt="sunset" id="banner">
    <info>
      <div id="pfp">
        <button onclick={() => {
          profileCreditDropdown.classList.toggle("show");
        }}>
          <img src="/profile.png" alt="rayne cloudy">
        </button>
        <dropdown bind:this={profileCreditDropdown}>
          <p>this art of my character <a href="https://toyhou.se/34189208">rayne</a> was made by my cousin, finny! here's her socials that you should check out!!:</p>
          <ul>
            <li><a href="https://artfight.net/~Finnywinnny">art fight</a> (Finnywinnny)</li>
            <li><a href="https://youtube.com/@Bluebirdbuttercup">youtube</a> (Bluebirdbuttercup)</li>
          </ul>
          <p>here's the full art piece as well!!</p>
          <img src="/finny_art.png" alt="full art piece">
          <DropdownClose />
        </dropdown>
      </div>
      <div>
        <h1>rayne cloudy</h1>
        <p>ambitious teenage web developer{today.getDate() == 23 && today.getMonth() == 7 ? " (and the birthday girl!)" : "."}</p>
      </div>
      <aside>
        <table>
          <thead>
            <tr><th>pronouns</th><th>age</th></tr>
          </thead>
          <tbody>
            <tr><td><a href="/gender">she/they/xe</a></td><td><button onclick={() => {
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
    <div id="social_bar">
      <a href="https://artfight.net/~raynecloudy" title="art fight"><img src="/socials/Art Fight.svg" alt="art fight"></a>
      <a href="https://bsky.app/profile/raynec.dev" title="bluesky"><img src="/socials/bsky-white.svg" alt="bluesky"></a>
      <a href="https://discord.gg/mD6metDHNE" title="discord server"><img src="/socials/Discord-Symbol-White.svg" alt="discord"></a>
      <a href="https://github.com/raynecloudy" title="github"><img src="/socials/GitHub_Invertocat_Light.svg" alt="github"></a>
      <a href="https://patreon.com/raynecloudy" title="patreon"><img src="/socials/PATREON_SYMBOL_1_WHITE_RGB.svg" alt="patreon"></a>
      <a href="https://toyhou.se/raynecloudy" title="toyhouse"><img src="/socials/Toyhouse.svg" alt="toyhouse"><img src="/new.gif" alt="new" class="new"></a>
      <a href="https://youtube.com/@raynecloudy" title="youtube"><img src="/socials/YouTube.svg" alt="youtube"></a>
    </div>
  </header>
  <main>
    <div>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/animations">animations</a></li>
          <li><a href="/art">art</a></li>
          <li><a href="/commissions">commissions</a></li>
          <li><a href="/contact">contact</a></li>
          <li><a href="/donators">donators</a></li>
          <li><a href="/feed">feed</a></li>
          <li><a href="/gender">gender</a></li>
          <li><a href="/guestbook">guestbook</a></li>
          <li><a href="/things">things</a></li>
          <li><a href="/writing">writing</a></li>
        </ul>
      </nav>
    </div>
    {@render children?.()}
    <p><span class="skip_to"><button aria-label="skip to" onclick={() => tabTo("a, button")}>back to top</button></span></p>
  </main>
</app>
