<script lang="ts">
  const open = true;
</script>

<svelte:head>
  <title>art commissions</title>
</svelte:head>

{#if !open}
  <section>
    commissions are currently closed. check back later!
  </section>
{/if}
<section>
  <h1>art commission info</h1>
  <h2>terms of service</h2>
  <p>by commissioning me, you confirm that you have read and agree to these terms.</p>
  <ul>
    <li>you must be nice!!</li>
    <li>i still hold copyright of the commissioned artwork.</li>
    <li>refunds are not available after you've fully paid for the commissioned artwork.</li>
    <li>you are not allowed to resell the commissioned artwork or use it for commercial purposes.</li>
    <li>i reserve the right to refuse service to anyone for any reason.</li>
  </ul>
</section>
<section>
  <h2>what i won't draw</h2>
  <ul>
    <li>nudity</li>
    <li>toplessness</li>
    <li>fetishes</li>
    <li>suggestive poses/faces/etc.</li>
    <li>revealing clothing</li>
    <li>discrimination</li>
    <li>muscles (i just can't, sorry)</li>
    <li>extremely dark art</li>
    <li>anthro</li>
    <li>romance without consent of OC owners</li>
    <li>OCs without owner consent</li>
    <li>otherwise NSFW content</li>
  </ul>
</section>
<section>
  <h2>process</h2>
  <p>through email or discord (both linked on my <a href="/contact">contact page</a>), you'll tell me what you want to buy. i charge full price up front. payment is done through stripe. after this is paid, i'll draw a sketch of your request and show it to you and ask for feedback. if you have any feedback, i will modify the sketch according to your feedback and ask you for feedback again. this cycle repeats until you are satisfied. after you are satisfied, the purchase becomes non-refundable and i will begin coloring and drawing your chosen add-ons, if any. i will then send you the completed artwork.</p>
</section>
<section>
  <h2>prices</h2>
  <p>all prices are in USD.</p>
  <h3>portrait type</h3>
  <p>
    <strong>$15/character</strong> - bust (head to shoulders)<br>
    <strong>$20/character</strong> - half body (head to waist/hips)<br>
    <strong>$25/character</strong> - full body (head to toes)
  </p>
  <h3>optional add-ons</h3>
  <p>
    <strong>+$5</strong> - basic shading<br>
    <strong>+$10</strong> - advanced shading
  </p>
  <p>
    <strong>+$5</strong> - simple background<br>
    <strong>+$10</strong> - scene
  </p>
</section>
