<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<style>
  :global(body) {
    background-color: #000000;
    color: #ffffff;
    margin: 0;
  }
</style>

{@render children?.()}
