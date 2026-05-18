<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  const projects = [
    {
      slug: 'titan-radio',
      title: 'Titan Radio',
      content: 'Case study content goes here...',
    },
    {
      slug: 'lpl-financial',
      title: 'LPL Financial',
      content: 'Case study content goes here...',
    },
  ];

  $: slug = $page.params.slug;
  $: project = projects.find((p) => p.slug === slug);
</script>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />
  <div class="w-full max-w-4xl m-auto items-center text-center">
    <p class="text-2xl md:text-3xl font-anaheim font-semibold">
      Project Details Are Under Development (˶˃ ᵕ ˂˶)
    </p>
    <p class="text-2xl md:text-3xl font-anaheim font-semibold">
      Please Check Back Soon!
    </p>
  </div>
  <Footer />
</main>
