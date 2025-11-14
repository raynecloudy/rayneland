<script lang="ts">
  const getSong = async () => await (await fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song")).json()
</script>

<style>
  .blue {
    color: var(--link);
  }
</style>

<svelte:head>
  <title>rayne cloudy</title>
  <meta name="og:description" content="hey, i'm rayne! welcome to my website! i'm a teenage software engineer and a sophomore in high school.">
  <meta name="og:title" content="rayne's website!">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://raynec.dev">
</svelte:head>

<p>hey, i'm rayne! welcome to my website! i'm a teenage software engineer and a sophomore in high school.</p>
<p>i've been drawing for 11 years and have been programming for 9. over all these years i've refined my skills, experimented with new hobbies and tools, expressed my creativity through my work, and ended up with a history i'm pretty proud of!</p>
<p>my hobbies are:</p>
<ul>
  <li>computer programming</li>
  <li>drawing</li>
  <li>writing</li>
</ul>
<p>the first programming language i learned was python. then, i learned javascript, and now i know rust and C++ too! i work with web development the most because i love it so much, so i'm most familiar with javascript and typescript.</p>
<pre style:text-align="center"><code class="blue">
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
<span class="blue">rayne</span>@<span class="blue">raynespc</span>
--------------
<span class="blue">OS</span>: Arch Linux x86_64
<span class="blue">Host</span>: Inspiron 15 3535 (1.20.0)
<span class="blue">Kernel</span>: Linux 6.16.3-arch1-1
<span class="blue">Packages</span>: 882 (pacman)
<span class="blue">Shell</span>: bash 5.3.3
<span class="blue">Display (HP VH240a)</span>: 1920x1080 @ 60 Hz in 24" [External]
<span class="blue">Display (BOE09E6)</span>: 1920x1080 @ 60 Hz in 16" [Built-in] *
<span class="blue">DE</span>: KDE Plasma 6.4.4
<span class="blue">Terminal</span>: konsole 25.8.0
<span class="blue">CPU</span>: AMD Ryzen 7 7730U (16) @ 4.55 GHz
<span class="blue">GPU</span>: AMD Barcelo [Integrated]
<span class="blue">Memory</span>: 4.35 GiB / 14.97 GiB (29%)
<span class="blue">Swap</span>: 0 B / 4.00 GiB (0%)
<span class="blue">Disk (/)</span>: 23.94 GiB / 467.40 GiB (5%) - ext4

</code></pre>
<p><a href="https://github.com/raynecloudy/#js-contribution-activity-description"><img src="https://ghchart.rshah.org/raynecloudy" alt="raynecloudy's github contribution graph" style="filter: invert();"></a></p>
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
