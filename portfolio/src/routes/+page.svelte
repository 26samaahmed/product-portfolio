<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PrimaryLink from '$lib/components/PrimaryLink.svelte';
</script>

<svelte:head>
  <title>Sama Ahmed's Portfolio</title>

  <meta
    name="description"
    content="Sama Ahmed — UX researcher and builder creating thoughtful digital experiences."
  />
</svelte:head>

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#F5F3ED] p-4 pt-1 text-[#292B27]"
>
  <Header />

  <section
    class="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-12 pt-20 pb-20 md:flex-row md:items-center md:justify-between md:pt-28"
  >
    <!-- LEFT -->
    <div class="max-w-3xl flex-1">
      <!-- Heading -->
      <h1
        class="group reveal delay-1 flex items-center gap-3 text-4xl font-medium leading-tight tracking-tight md:text-5xl"
      >
        <span>Hi, I'm Sama Ahmed</span>

        <span
          class="inline-flex translate-y-[1px] items-center text-xl text-[#783D46] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 md:text-2xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <!-- Bio -->
      <div class="reveal delay-2 mt-9 max-w-2xl">
        <p class="text-lg text-[#4F504A] md:text-xl">
          UX Researcher at
          <span class="font-medium text-[#35483A]">LPL Financial</span>
        </p>

        <p class="mt-1.5 text-base italic text-[#725747] md:text-lg">
          exploring the space between people, products, and technology
        </p>
      </div>

      <!-- Links -->
      <div class="reveal delay-3 mt-10 flex flex-wrap gap-4">
        <PrimaryLink href="/work" label="Selected Work">
          <span
            slot="icon-left"
            class="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
        </PrimaryLink>

        <PrimaryLink href="/about-me" label="About">
          <span
            slot="icon-right"
            class="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </PrimaryLink>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="flex flex-col items-center gap-3 md:ml-auto md:items-end">
      <!-- Photo -->
      <img
        src="/about-me.jpg"
        alt="Sama Ahmed graduation"
        class="reveal-photo delay-photo w-[220px] rounded-2xl object-cover shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-[300px]"
      />

      <!-- Location -->
      <div class="reveal delay-4 flex items-center gap-2">
        <span class="h-px w-5 bg-[#783D46]"></span>

        <p class="text-xs tracking-wide text-[#725747] italic">
          based in irvine + san diego
        </p>

        <span class="text-xs text-[#783D46]">✷</span>
      </div>
    </div>
  </section>

  <Footer />
</main>

<style>
  /* Main entrance animation */
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Softer animation for the photo */
  @keyframes fade-photo {
    from {
      opacity: 0;
      transform: translateY(6px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .reveal {
    opacity: 0;
    animation: fade-up 0.65s ease-out forwards;
  }

  .reveal-photo {
    opacity: 0;
    animation: fade-photo 0.8s ease-out forwards;
  }

  /* Staggered timing */
  .delay-1 {
    animation-delay: 0.05s;
  }

  .delay-2 {
    animation-delay: 0.15s;
  }

  .delay-3 {
    animation-delay: 0.25s;
  }

  .delay-photo {
    animation-delay: 0.18s;
  }

  .delay-4 {
    animation-delay: 0.4s;
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    .reveal,
    .reveal-photo {
      opacity: 1;
      animation: none;
    }
  }
</style>
