<script lang="ts"></script>

<h1>hey!!</h1>
<p>i'm <strong>rayne cloudy</strong>! welcome to my website!! i'm a teenage software engineer and high school sophomore who likes the color pink a lot. i'm going to major in computer science when i go to college, but that's not for another few years, haha....</p>
<p>i've been drawing for 11 years and have been programming for 9. over all these years i've refined my skills, experimented with new hobbies and tools, expressed my creativity through my work, and ended up with a history i'm really proud of!! and i'm still going.... the rayne train isn't stopping for a looooong time :D</p>
<p>my hobbies are:</p>
<ul>
  <li>computer programming</li>
  <li>drawing</li>
  <li>listening to music</li>
  <li>making music (rarely)</li>
</ul>
<div class="block">
  {#await fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song")}
    <span>loading....</span>
  {:then res: Response}
    {#await res.json()}
      <span>loading....</span>
    {:then data}
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
    {/await}
  {:catch err: Error}
    <p>{err.message}</p>
  {/await}
</div>
