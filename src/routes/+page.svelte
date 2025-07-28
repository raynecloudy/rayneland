<script lang="ts">
  const getSong = async () => await (await fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song")).json()
</script>

<style>
  .blue {
    color: #88ddff;
  }

  .pink {
    color: #ff87d7;
  }
</style>

<svelte:head>
  <title>rayne cloudy</title>
  <meta name="og:description" content="hii i'm rayne cloudy (raynecloudy)! this is my personal website! yayyay!!!!!">
  <meta name="og:title" content="rayne cloudy's website!">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://raynec.dev">
</svelte:head>

<h1>hey!!</h1>
<p>i'm <strong>rayne cloudy</strong> (raynecloudy)! welcome to my website!! i'm a teenage software engineer and high school sophomore who likes the color pink a lot. i'm going to major in computer science when i go to college, but that's not for another few years, haha....</p>
<p>i've been drawing for 11 years and have been programming for 9. over all these years i've refined my skills, experimented with new hobbies and tools, expressed my creativity through my work, and ended up with a history i'm really proud of!! and i'm still going.... the rayne train isn't stopping for a looooong time :D</p>
<p>my hobbies are:</p>
<ul>
  <li>computer programming</li>
  <li>drawing</li>
  <li>listening to music</li>
  <li>making music (rarely)</li>
</ul>
<p>the first programming language i learned was python. then i learned javascript and now i know rust and C++ too! i work with web development the most because i love it so much, so i'm most familiar with javascript and typescript.</p>
<pre><code>
<span class="grey">rayne@raynetop ~/ $ <a href="https://github.com/netthier/owofetch-rs">owofetch</a></span>

  <span class="blue">      /\          </span><span class="pink">wayne</span>@<span class="pink">waynetop</span>
  <span class="blue">     /  \         </span><span class="pink">os:</span> awch winux
  <span class="blue">    /\   \        </span><span class="pink">kewnew</span> 6.15.8-awch1-1
  <span class="blue">   /  ^w^ \       </span><span class="pink">memowy:</span> 7256.69 megabytes / 14561.48 megabytes
  <span class="blue">  /   ,,   \      </span><span class="pink">cpu:</span>  amd athwon siwvew 3050u with wadeon gwaphics
  <span class="blue"> /   |  |  -\     </span><span class="pink">sheww:</span> /usw/bin/bash
  <span class="blue">/_-''    ''-_\    </span><span class="pink">tewminaw:</span>  konsowe
                    <span class="pink">disk:</span> 67.80 gibibytes / 118.24 gibibytes

</code></pre>
<p>disclaimer: though our names have striking similarity, i bear no relation to raynecloudy on instagram, the music artist "cloudy rayne", or anybody that goes by "rayne cloud." i'm rayne cloudY.</p>
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
        <img src="{data.track.image[3]["#text"]}" alt="art for {data.track.name}">
      </div>
    </pages>
    <sub><a href="https://github.com/biancarosa/lastfm-last-played">@biancarosa/lastfm-last-played</a></sub>
  </div>
{:catch err: Error}
  <p>{err.message}</p>
{/await}
