<script lang="ts">
	import { onMount } from "svelte";

  let diagnostics: string = $state("");

  const d = (line?: string) => diagnostics += (line ?? "") + "\n";

  onMount(async () => {
    {
      let online = 1;
      let offline = 0;
      let error = 0;
      d("rayne service diagnostics (https://rayne.page/diagnostics)");
      d(`  @ ${new Date().toISOString()}`);
      d();
      d("=============== SERVICES ===============");
      d();
      d("  [x] rayne.page");
      {
        try {
          const res = await fetch("https://ai.rayne.page");
          if (res.ok) {
            d("  [x] ai.rayne.page");
            online++;
          } else {
            d("  [ ] ai.rayne.page");
            offline++;
          }
        } catch (err: any) {
          d("  [!] ai.rayne.page");
          d(`    ${err.message}`);
          error++;
        }
      }
      {
        try {
          const res = await fetch("https://files.rayne.page");
          if (res.ok) {
            d("  [x] files.rayne.page");
            online++;
          } else {
            d("  [ ] files.rayne.page");
            offline++;
          }
        } catch (err: any) {
          d("  [!] files.rayne.page");
          d(`    ${err.message}`);
          error++;
        }
      }
      d();
      d(`${online} online`);
      d(`${offline} offline`);
      d(`${error} error${error === 1 ? "" : "s"}`);
    }
    d();
    {
      let healthy = 0;
      let down = 0;
      d("=============== CLOUDFLARE TUNNELS ===============");
      d();
      const res = await fetch("/api/tunnels");
      if (res.ok) {
        const json = await res.json();
        for (const tunnel of json.result) {
          if (tunnel.status === "down") {
            d(`  DOWN     ${tunnel.name}`);
            d(`    @ ${tunnel.conns_inactive_at}`);
            down++;
          } else {
            d(`  HEALTHY  ${tunnel.name}`);
            d(`    @ ${tunnel.conns_active_at}`);
            healthy++;
          }
        }
        d();
        d(`${healthy} healthy`);
        d(`${down} down`);
      } else {
        d("There was an error fetching the API endpoint (/api/tunnels)")
      }
    }
  });
</script>

<svelte:head>
  <title>diagnostics</title>
</svelte:head>

<style>
  @font-face {
    font-family: "monitor";
    src: url("/fonts/Web437_NEC_APC3_8x16.woff");
  }

  :global(body) {
    background-color: #000000;
    color: #ffffff;
    font-family: "monitor";
    line-height: 1rem;
    font-size: 1rem;
    margin: 4rem;
  }

  pre, pre code {
    font-family: inherit;
  }
</style>

<pre><code>{diagnostics}</code></pre>
