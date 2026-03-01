<script lang="ts">
	import { onMount } from "svelte";

  const { children, closed, id, title, warning }: {
    children: () => any,
    closed?: boolean,
    id?: string,
    title: string,
    warning?: boolean
  } = $props();

  // svelte-ignore state_referenced_locally
  let isClosed = $state(true);

  onMount(() => {
    if (!id) return;
    const fromLocalStorage = localStorage.getItem(`dropdown-${id}`);
    if (fromLocalStorage) isClosed = localStorage.getItem(`dropdown-${id}`) === "true";
    else isClosed = !!closed;
    localStorage.setItem(`dropdown-${id}`, `${isClosed}`);
  });
</script>

<style>
  .dropdown {
    padding: 0;
  }

  .dropdown button::first-letter {
    font-family: "Maple Mono";
  }

  button {
    background-color: transparent;
    cursor: pointer;
    display: block;
    font: inherit;
    display: block;
    color: inherit;
    text-align: inherit;
    border: none;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: inherit;
    outline: none;
  }

  button:is(:hover, :focus-visible) {
    color: var(--primary);
  }

  .dropdown:not(.closed) button {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: 0.0625rem dashed var(--shade1);
  }

  div div {
    padding: 1rem;
  }
</style>

<div class="dropdown" class:closed={isClosed}>
  <button onclick={() => {
    isClosed = !isClosed;
    if (id) localStorage.setItem(`dropdown-${id}`, `${isClosed}`);
  }} class:warning>{isClosed ? ">" : "v"} {title}</button>
  {#if !isClosed}
    <div>
      {@render children()}
    </div>
  {/if}
</div>
