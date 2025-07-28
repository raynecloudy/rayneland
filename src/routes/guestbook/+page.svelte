<script lang="ts">
  let width = $state(0);
</script>

<div bind:clientWidth={width}>
  <iframe src="https://raynecloudy.atabook.org" frameborder="0" title="rayne's guestbook" width={width} height="600"></iframe>
</div>
