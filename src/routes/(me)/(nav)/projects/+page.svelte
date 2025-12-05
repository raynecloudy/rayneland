<style>
  pages.featured > .block {
    background: linear-gradient(var(--feature), transparent);
    outline-color: var(--feature);
  }
</style>

<svelte:head>
  <title>projects</title>
  <meta name="og:description" content="a list of software projects i've created over the years">
  <meta name="og:title" content="projects">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://rayne.page/projects">
</svelte:head>

<h1>Projects</h1>
<p>a list of software projects i've created over my time on the internet.</p>
<h2>Featured</h2>
<pages class="featured">
  <div class="block" style:--feature="#8cffd144">
    <h2>os</h2>
    <sub>2026</sub>
    <p>an operating system built from the ground up by the one and only rayne. not clickbait</p>
  </div>
  <div class="block" style:--feature="#fe86a244">
    <img src="/nekomide.png" alt="Nekomide">
    <h2>Nekomide</h2>
    <sub>2026</sub>
    <p>an IDE for web developers.</p>
    <div class="action-bar">
      <a href="https://nekomide.rayne.page" class="action">home page</a>
      <a href="https://github.com/nekomide" class="action">github</a>
    </div>
    <p>Svelte, Rust, TypeScript</p>
  </div>
  <div class="block" style:--feature="#9c91ff44">
    <img src="/lots-o-nekos.png" alt="lots-o-nekos">
    <h2>lots-o-nekos</h2>
    <sub>2025</sub>
    <p>cat follow mouse real! now an npm package with additionyal features for an elevated oneko experience ≽^•⩊•^≼</p>
    <div class="action-bar">
      <a href="https://npmjs.com/lots-o-nekos" class="action">npm</a>
      <a href="https://github.com/raynecloudy/lots-o-nekos" class="action">github</a>
    </div>
    <p>JavaScript, TypeScript</p>
  </div>
</pages>
<h2>All</h2>
<pages>
  <div class="block">
    <h2>Rainier</h2>
    <sub>2025</sub>
    <p>a video player made with svelte</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/rainier" class="action">github</a>
    </div>
    <p>Svelte</p>
  </div>
  <div class="block">
    <h2><span class="grey">@raynecloudy/</span>fs</h2>
    <sub>2025</sub>
    <p>a node:fs wrapper</p>
    <div class="action-bar">
      <a href="https://npmjs.com/@raynecloudy/fs" class="action">npm</a>
      <a href="https://github.com/raynecloudy/fs" class="action">github</a>
    </div>
    <p>JavaScript, TypeScript</p>
  </div>
</pages>
<pages>
  <div class="block">
    <h2>explore</h2>
    <sub>2025</sub>
    <p>a minimal file explorer for the web. not good</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/explore" class="action">github</a>
    </div>
    <p>TypeScript, EJS</p>
  </div>
  <div class="block">
    <h2>rAIne</h2>
    <sub>2025</sub>
    <p>funny ai trained off my discord messages</p>
    <div class="action-bar">
      <a href="https://ai.rayne.page" class="action">home page</a>
      <a href="https://github.com/raynecloudy/rAIne" class="action">github</a>
    </div>
    <p>TypeScript</p>
  </div>
</pages>
<pages>
  <div class="block">
    <h2>floodfill</h2>
    <sub>2025</sub>
    <p>finds how far away a point in a maze is from another point in the maze</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/floodfill" class="action">github</a>
    </div>
    <p>C++</p>
  </div>
  <div class="block">
    <h2>-w-</h2>
    <sub>2025</sub>
    <p>operate a local bash console from a discord bot</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/-w-" class="action">github</a>
    </div>
    <p>JavaScript</p>
  </div>
</pages>
<pages>
  <div class="block">
    <h2>happy birthday</h2>
    <sub>2025</sub>
    <p>happy birthday program made for a friend in my computer science class</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/happy_birthday" class="action">github</a>
    </div>
    <p>Java</p>
  </div>
  <div class="block">
    <h2>calc</h2>
    <sub>2025</sub>
    <p>funny computer science project</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/calculator" class="action">github</a>
    </div>
    <p>Java</p>
  </div>
</pages>
<pages>
  <div class="block">
    <h2>sinewaves</h2>
    <sub>2024</sub>
    <p>a terminal-based sine wave visualizer</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/sinewaves" class="action">github</a>
    </div>
    <p>Rust</p>
  </div>
  <div class="block">
    <h2>namebook</h2>
    <sub>2024</sub>
    <p>rocket.rs backend testing</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/namebook" class="action">github</a>
    </div>
    <p>Rust, JavaScript</p>
  </div>
</pages>
<pages>
  <div class="block">
    <h2>rainbow staircase</h2>
    <sub>2024</sub>
    <p>i was messing around with ANSI</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/rainbow-staircase" class="action">github</a>
    </div>
    <p>Rust</p>
  </div>
  <div class="block">
    <h2>ascii-based graphics format (abg)</h2>
    <sub>2024</sub>
    <p>bad project</p>
    <div class="action-bar">
      <a href="https://github.com/raynecloudy/.abg" class="action">github</a>
    </div>
    <p>Rust</p>
  </div>
</pages>
