<script lang="ts">
  import '../app.css';
  import CustomCursor from '$lib/components/CustomCursor.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Anaheim:wght@400..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<CustomCursor />
{@render children?.()}
