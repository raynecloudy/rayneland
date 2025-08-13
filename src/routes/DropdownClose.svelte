<script lang="ts"></script>

<div>
  <span class="skip_to"><button aria-label="close button" onclick={(event) => {
    event.currentTarget.parentElement?.parentElement?.parentElement?.classList.remove("show");
  }} onkeydown={(event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const element = event.currentTarget.parentElement?.parentElement?.parentElement?.querySelector("a, button") as HTMLButtonElement;
      element?.focus();
    }
  }}>close</button></span>
</div>
