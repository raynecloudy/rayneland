<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<style>
  @font-face {
    font-family: "Commissioner";
    src: url("/fonts/commissioner/font.ttf");
  }

  @font-face {
    font-family: "Abhaya Libre";
    src: url("/fonts/abhayalibre/extrabold.ttf");
  }

  @font-face {
    font-family: "Maple Mono";
    src: url("/fonts/maplemono/font.ttf");
  }

  :root {
    --bg: url("/background.png") var(--bg-color);
    --bg-color: #0b0911;
    --disabled: #897b96;
    --primary: #a4d4bc;
    --text: #ece4ff;
    --outline: 0.0625rem solid #5d4b6d;
  }
  
  :global(body) {
    background: url("/background.png") var(--bg-color) !important;
    color: var(--text) !important;
    color-scheme: dark;
    font-family: "Commissioner";
    margin: 0;
  }

  :global(::selection) {
    background-color: #71a3ffbb;
    color: var(--text);
  }

  main {
    margin: 30vh 10rem 10rem 10rem;
  }

  :global(a) {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
  }

  :global(a[href=""]) {
    color: var(--disabled);
  }

  :global(a.action, button) {
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

  :global(.block) {
    padding: 2rem;
    border-radius: 1rem;
    outline: var(--outline);
    margin: 1rem 0;
  }

  :global(aside ul) {
    margin: 2rem;
    list-style: none;
    padding-left: 0rem;
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
    color: var(--bg-color);
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
    padding: 0.1rem 0.3rem;
  }

  :global(code) {
    font-family: "Maple Mono";
  }

  :global(sub) {
    font-size: 0.8rem;
  }

  :global(p, li) {
    line-height: 1.5rem;
  }

  :global(pre) {
    overflow: auto;
  }

  :global(:has(> dropdown)) {
    position: relative;
  }

  :global(dropdown) {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--bg);
    color: var(--text);
    padding: 2rem;
    border-radius: 1rem;
    outline: var(--outline);
    min-width: 18rem;
    max-width: 25rem;
    text-align: initial;
    z-index: 2;
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

  :global(.skip_to:not(:has(:active, :focus-visible))) {
    font-size: 0;
    line-height: 0;
  }

  :global(.skip_to button) {
    margin: 0 0.5rem;
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
</style>

<main>
  {@render children?.()}
</main>
