<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Sama Ahmed's Portfolio</title>

  <meta
    name="description"
    content="Sama Ahmed — UX researcher and builder creating thoughtful digital experiences."
  />
</svelte:head>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />

  <section
    class="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-12 pt-20 pb-20 md:flex-row md:items-center md:justify-between md:pt-28"
  >
    <!-- LEFT -->
    <div class="max-w-3xl flex-1">
      <h1 class="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
        Hi, I'm
        <span class="relative inline-block px-1">
          <span class="relative z-10">Sama Ahmed</span>

          <span
            class="absolute left-0 right-0 bottom-1 h-3 -z-0 rounded-md bg-black/5"
          ></span>
        </span>
      </h1>

      <p class="mt-10 text-lg md:text-xl text-neutral-700">
        UX Researcher at LPL Financial · turning insights into product direction
      </p>

      <!-- links -->
      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="/work"
          class="group flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-sm transition hover:bg-black hover:text-white md:text-base"
        >
          <span class="transition-transform group-hover:-translate-x-1">←</span>
          Selected Work
        </a>

        <a
          href="/about-me"
          class="group flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-sm transition hover:bg-black hover:text-white md:text-base"
        >
          About
          <span class="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>

    <!-- RIGHT -->
    <div
      class="relative flex flex-col items-center gap-3 md:ml-auto md:items-end"
    >
      <div
        class="absolute -inset-4 -z-10 rounded-2xl bg-[#CDE8DF]/25 blur-2xl"
      ></div>

      <img
        src="/about-me.jpg"
        alt="Sama Ahmed graduation"
        class="w-[220px] rounded-2xl object-cover shadow-lg transition hover:scale-[1.02] md:w-[300px]"
      />

      <p class="text-xs tracking-wide text-neutral-500 italic">
        based in irvine + san diego ✷
      </p>
    </div>
  </section>

  <Footer />
</main>
