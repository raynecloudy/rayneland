<script lang="ts">
  import type { LayoutProps } from "../$types";
  import Navigation from "$lib/components/Navigation.svelte";

  let { children }: LayoutProps = $props();
</script>

<style>

  div:has(> main) {
    display: flex;
    gap: 4rem;
  }

  aside {
    width: 15rem;
    flex-shrink: 0;
  }
</style>

<div>
  <aside>
    <Navigation />
  </aside>
  <main>
    {@render children?.()}
  </main>
</div>

