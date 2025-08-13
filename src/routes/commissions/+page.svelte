<script lang="ts">
  import DropdownClose from "../DropdownClose.svelte";

  const open = false;

  type Item = {
    name: string,
    price: number,
    group?: 0 | 1 | 2;
  };

  let bust: HTMLElement;
  let halfBody: HTMLElement;
  let fullBody: HTMLElement;
  let basicShading: HTMLElement;
  let advancedShading: HTMLElement;
  let simpleBackground: HTMLElement;
  let scene: HTMLElement;

  let availableOptions: Item[] = $state([
    {
      name: "bust",
      price: 15,
      group: 0
    },
    {
      name: "half body",
      price: 20,
      group: 0
    },
    {
      name: "full body",
      price: 25,
      group: 0
    },
    {
      name: "basic shading",
      price: 5,
      removable: true,
      group: 1
    },
    {
      name: "advanced shading",
      price: 10,
      removable: true,
      group: 1
    },
    {
      name: "simple background",
      price: 5,
      removable: true,
      group: 2
    },
    {
      name: "scene",
      price: 10,
      removable: true,
      group: 2
    }
  ]);

  let chosenOptions: Item[] = $state([]);
</script>

<style>
  dropdown:has(img) {
    width: 40rem;
  }
</style>

<svelte:head>
  <title>commissions</title>
  <meta name="og:description" content="art commission info!!">
  <meta name="og:title" content="commissions">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://raynec.dev/commissions">
</svelte:head>

{#if !open}
  <div class="block">
    commissions are currently closed. check back later!
  </div>
{/if}
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
<h2>process</h2>
<p>through email or discord (both linked on my <a href="/contact">contact page</a>), you'll tell me what you want to buy. i charge full price up front. payment is done through paypal. after this is paid, i'll draw a sketch of your request and show it to you and ask for feedback. if you have any feedback, i will modify the sketch according to your feedback and ask you for feedback again. this cycle repeats until you are satisfied. after you are satisfied, the purchase becomes non-refundable and i will begin coloring and drawing your chosen add-ons, if any. i will then send you the completed artwork.</p>
<h2>prices</h2>
<p>all prices are in USD. click on an option to view a sample artwork.</p>
<h3>portrait type</h3>
<p>
  <span>
    <button onclick={() => {
      bust.classList.toggle("show");
    }}>
      <b>$15/character</b> - bust (head to shoulders)<br>
    </button>
    <dropdown bind:this={bust}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103986011_2KeDrHGylSk0fWd.png" alt="rayne">
      <DropdownClose />
    </dropdown>
  </span><br>
  <span>
    <button onclick={() => {
      halfBody.classList.toggle("show");
    }}>
      <b>$20/character</b> - half body (head to waist)<br>
    </button>
    <dropdown bind:this={halfBody}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103986421_vUcPZL85k79VWTX.png" alt="rayneglasses">
      <DropdownClose />
    </dropdown>
  </span><br>
  <span>
    <button onclick={() => {
      fullBody.classList.toggle("show");
    }}>
      <b>$25/character</b> - full body (head to toes)
    </button>
    <dropdown bind:this={fullBody}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103959641_wIrmVrxYyAA1wDd.png" alt="rayne remastered">
      <DropdownClose />
    </dropdown>
  </span>
</p>
<h3>optional add-ons</h3>
<p>
  <span>
    <button onclick={() => {
      basicShading.classList.toggle("show");
    }}>
      <b>+$5</b> - basic shading
    </button>
    <dropdown bind:this={basicShading}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/104096101_ud2MyBEoMhR3ApJ.png" alt="cassie">
      <DropdownClose />
    </dropdown>
  </span><br>
  <span>
    <button onclick={() => {
      advancedShading.classList.toggle("show");
    }}>
      <b>+$10</b> - advanced shading
    </button>
    <dropdown bind:this={advancedShading}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103986699_5L7PjUG5NFnarKQ.png" alt="rayne heist">
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103986177_oOl36Cgz5rRXOZh.png" alt="raynebow">
      <DropdownClose />
    </dropdown>
  </span><br>
</p>
<p>
  <span>
    <button onclick={() => {
      simpleBackground.classList.toggle("show");
    }}>
      <b>+$5</b> - simple background
    </button>
    <dropdown bind:this={simpleBackground}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103986385_FYKQHd4BLhaGvBh.png" alt="ankle biter">
      <DropdownClose />
    </dropdown>
  </span><br>
  <span>
    <button onclick={() => {
      scene.classList.toggle("show");
    }}>
      <b>+$10</b> - scene
    </button>
    <dropdown bind:this={scene}>
      <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/103986208_5Lhwq8rStNVRBPU.png" alt="april showers">
      <DropdownClose />
    </dropdown>
  </span>
</p>
<h2>price calculator</h2>
<div class="block">
  <pages>
    <div>
      <ul>
        {#each availableOptions as item}
          <li><button onclick={() => {
            chosenOptions.push(item);
          }} disabled={chosenOptions.some((chosenOption) => item.group === chosenOption.group && item.group !== 0)}><b>${item.price}</b> - {item.name}</button></li>
        {/each}
      </ul>
      <a href="https://mail.google.com/mail/u/0/?tf=cm&body={encodeURIComponent(`I'm interested in purchasing a commission from you.\n\nMy order:\n${(() => {
        let list = "";
        const chosen = chosenOptions.toSorted((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        console.log(chosen);
        for (let i = 0; i < chosen.length; i++) {
          list += `- ${chosen[i].name.charAt(0).toUpperCase()}${chosen[i].name.slice(1)}\n`;
        }
        return list;
      })()}`)}" class="action" inert={chosenOptions.length === 0 || !chosenOptions.some((item) => item.group === 0)}>order via email</a>
    </div>
    <div>
      <h2>${chosenOptions.reduce((accumulated, item) => accumulated + item.price, 0)}</h2>
      <ul>
        {#each chosenOptions as item}
          <li><button onclick={() => {
            chosenOptions = chosenOptions.filter((option) => option.name !== item.name);
          }}><b>${item.price}</b> - {item.name}</button></li>
        {/each}
      </ul>
    </div>
  </pages>
</div>
<pages>
  <div>
    <img src="/milo.png" alt="milo">
  </div>
  <div>
    <img src="/luna.png" alt="luna">
  </div>
</pages>
