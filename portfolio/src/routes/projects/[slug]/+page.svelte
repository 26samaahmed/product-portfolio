<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#F5F3ED] p-4 pt-1 text-[#292B27]"
>
  <Header />

  <div class="mx-auto w-full max-w-3xl flex-1 pt-14 pb-20">
    <div class="page-reveal">
      <p class="mb-3 text-sm tracking-wide text-[#725747]">
        Project / Case Study
      </p>

      <h1
        class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
      >
        Project

        <span
          class="inline-flex text-lg text-[#783D46] md:text-xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <p class="mt-2 text-sm italic text-[#725747] md:text-base">
        case study coming soon
      </p>
    </div>

    <div
      class="page-reveal delay-1 mt-10 h-px w-full bg-[#DEDDD4]"
    ></div>

    <div
      class="page-reveal delay-2 mt-10 space-y-6 text-base leading-relaxed text-[#4F504A] md:text-lg"
    >
      <p>
        This page is currently a work in progress. I’m in the process of
        writing up the full case study for this project.
      </p>

      <p>
        Check back soon
        <span class="ml-1 text-[#783D46]">✷</span>
      </p>
    </div>
  </div>

  <Footer />
</main>

<style>
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .page-reveal {
    opacity: 0;
    animation: fade-up 0.6s ease-out forwards;
  }

  .delay-1 {
    animation-delay: 0.1s;
  }

  .delay-2 {
    animation-delay: 0.2s;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-reveal {
      opacity: 1;
      animation: none;
    }
  }
</style>