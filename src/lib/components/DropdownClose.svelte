<script lang="ts"></script>

<div>
  <button class="action" onclick={(event) => {
    event.currentTarget.parentElement?.parentElement?.classList.remove("show");
  }} onkeydown={(event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const element = event.currentTarget.parentElement?.parentElement?.querySelector("a, button") as HTMLButtonElement;
      element?.focus();
    }
  }}>close</button>
</div>
