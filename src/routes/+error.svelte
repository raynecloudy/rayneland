<script>
  import Oneko from "lots-o-nekos";
</script>

<h1>404</h1>
<p>this page could not be located!</p>
<p><button onclick={() => {
  const oneko = new Oneko({
    speed: 8 + (Math.random() * 10),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  });
  window.addEventListener("mousemove", (e) => {
    oneko.setTarget(e.clientX, e.clientY);
  });
}} class="action">add cat</button></p>
