<script lang="ts">
  import DropdownClose from "$lib/components/DropdownClose.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import { onMount } from "svelte";
  import { pronouns } from "$lib";

  const getSong = async () => await (await fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song")).json();

  let birthdayDropdown: HTMLElement;

  let today = $state(new Date());

  const birthdate = 1251010800000;
  const birthday = 1787468400000;

  let age: number = $state(0);
  let distanceToBirthday: number = $state(0);

  const upDate = () => {
    today = new Date();
    age = new Date(Date.now() - birthdate).getFullYear() - 1970;
    distanceToBirthday = (birthday - today.getTime());
  }

  upDate();

  onMount(async () => {
    setInterval(upDate, 1000);
  });
</script>

<style>
  .primary {
    color: var(--primary);
  }

  div:has(> main) {
    display: flex;
    gap: 4rem;
  }

  aside {
    width: 15rem;
    flex-shrink: 0;
  }

  img[src="/profile.png"] {
    width: 100%;
    border-radius: 20%;
  }

  #name {
    color: var(--primary);
    font-family: "Abhaya Libre";
    font-size: 5rem;
    margin: 0;
    font-weight: normal;
  }

  #name-sub {
    font-size: inherit;
    color: var(--disabled);
  }
</style>

<svelte:head>
  <title>rayne</title>
  <meta name="og:description" content="hey, i'm rayne! welcome to my website! i'm a teenage software engineer and a sophomore in high school.">
  <meta name="og:title" content="rayne's website">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://rayne.page">
</svelte:head>

<div>
  <aside>
    <img src="/profile.png" alt="rayne">
    <Navigation />
    <ul>
      <li><a href="/af">art fight</a></li>
      <li><a href="/bsky">bluesky</a></li>
      <li><a href="//discord.rayne.page">discord server</a></li>
      <li><a href="/gh">github</a></li>
      <li><a href="//shop.rayne.page">patreon</a></li>
      <li><a href="/th">toyhouse</a></li>
    </ul>
  </aside>
  <main>
    <h1 id="name">rayne</h1>
    <sub id="name-sub">{pronouns} <button onclick={() => {
      birthdayDropdown.classList.toggle("show");
    }}>{age}</button><dropdown bind:this={birthdayDropdown}>
      <h2>birthday tracker</h2>
      <sub>birthdate: 23rd of august, 2009</sub>
      <h3>{Math.floor(distanceToBirthday / (1000 * 60 * 60 * 24))}d {Math.floor((distanceToBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h {Math.floor((distanceToBirthday % (1000 * 60 * 60)) / (1000 * 60))}m {Math.floor((distanceToBirthday % (1000 * 60)) / 1000)}s</h3>
      <DropdownClose />
    </dropdown></sub>
    <p>hey, i'm rayne! welcome to my website! i'm a teenage software engineer and a sophomore in high school.</p>
    <p>i've been drawing for 11 years and have been programming for 9. over all these years i've refined my skills, experimented with new hobbies and tools, expressed my creativity through my work, and ended up with a history i'm pretty proud of!</p>
    <p>my hobbies are:</p>
    <ul>
      <li>computer programming</li>
      <li>drawing</li>
      <li>writing</li>
    </ul>
    <p>the first programming language i learned was python. then, i learned javascript, and now i know rust and C++ too! i work with web development the most because i love it so much, so i'm most familiar with javascript and typescript.</p>
    <pre style:text-align="center"><code class="primary">
                  -`                 
                 .o+`                
                `ooo/                
               `+oooo:               
              `+oooooo:              
              -+oooooo+:             
            `/:-:++oooo+:            
           `/++++/+++++++:           
          `/++++++++++++++:          
         `/+++ooooooooooooo/`        
        ./ooosssso++osssssso+`       
       .oossssso-````/ossssss+`      
      -osssssso.      :ssssssso.     
     :osssssss/        osssso+++.    
    /ossssssss/        +ssssooo/-    
  `/ossssso+/:-        -:/+osssso+-  
 `+sso+:-`                 `.-/+oso: 
`++:.                           `-/+/
.`                                 `/
</code></pre>
<pre><code>
<span class="primary">rayne</span>@<span class="primary">raynespc</span>
--------------
<span class="primary">OS</span>: Arch Linux x86_64
<span class="primary">Host</span>: Inspiron 15 3535 (1.20.0)
<span class="primary">Kernel</span>: Linux 6.16.3-arch1-1
<span class="primary">Packages</span>: 882 (pacman)
<span class="primary">Shell</span>: bash 5.3.3
<span class="primary">Display (HP VH240a)</span>: 1920x1080 @ 60 Hz in 24" [External]
<span class="primary">Display (BOE09E6)</span>: 1920x1080 @ 60 Hz in 16" [Built-in] *
<span class="primary">DE</span>: KDE Plasma 6.4.4
<span class="primary">Terminal</span>: konsole 25.8.0
<span class="primary">CPU</span>: AMD Ryzen 7 7730U (16) @ 4.55 GHz
<span class="primary">GPU</span>: AMD Barcelo [Integrated]
<span class="primary">Memory</span>: 4.35 GiB / 14.97 GiB (29%)
<span class="primary">Swap</span>: 0 B / 4.00 GiB (0%)
<span class="primary">Disk (/)</span>: 23.94 GiB / 467.40 GiB (5%) - ext4
</code></pre>
    <p>though our names have striking similarity, i bear no relation to raynecloudy on instagram, the music artist "cloudy rayne", or anybody that goes by "rayne cloud." i'm rayne cloud<strong>y</strong>, with a y.</p>
    {#await getSong()}
      <!--  -->
    {:then data}
      <div class="block">
        <pages>
          <div>
            <span>{data.track["@attr"]?.nowplaying ? "currently listening to" : "last listened to"}</span>
            <h3>{data.track.name} by {data.track.artist["#text"]}</h3>
            <p>on {data.track.album["#text"]}</p>
            <a href={data.track.url} class="action">view on last.fm</a>
          </div>
          <div>
            <img style:float="right" src="{data.track.image[3]["#text"]}" alt="art for {data.track.name}">
          </div>
        </pages>
      </div>
    {:catch err: Error}
      <p>{err.message}</p>
    {/await}
  </main>
</div>
