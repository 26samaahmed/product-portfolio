<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />

  <div class="mx-auto w-full max-w-3xl flex-1 pt-14 pb-20">
    <h1 class="text-4xl font-medium tracking-tight md:text-5xl mb-6">
      Project
    </h1>

    <p class="text-sm text-neutral-500 mb-10">Case study page</p>

    <div
      class="space-y-6 text-base md:text-lg leading-relaxed text-neutral-700"
    >
      <p>
        This page is currently a work in progress. I’m in the process of writing
        up the full case study for this project.
      </p>

      <p>Check back soon :)</p>
    </div>
  </div>

  <Footer />
</main>
