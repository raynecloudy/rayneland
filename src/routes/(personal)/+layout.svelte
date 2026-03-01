<script lang="ts">
  import PersonalLayout from "$lib/components/PersonalLayout.svelte";
  let { data, children } = $props();
</script>

<PersonalLayout {...data}>
  {@render children()}
</PersonalLayout>
