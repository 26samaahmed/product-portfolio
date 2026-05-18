<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const phrases = [
    'Building thoughtful digital experiences.',
    'Research × design × engineering.',
    'Creating products centered around people.',
  ];

  let displayedText = '';
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  onMount(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = phrases[phraseIndex];

      if (!deleting) {
        if (charIndex < current.length) {
          displayedText = current.slice(0, charIndex + 1);
          charIndex++;

          timeout = setTimeout(type, 55);
        } else {
          timeout = setTimeout(() => {
            deleting = true;
            type();
          }, 1200);
        }
      } else {
        if (charIndex > 0) {
          displayedText = current.slice(0, charIndex - 1);
          charIndex--;

          timeout = setTimeout(type, 35);
        } else {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;

          timeout = setTimeout(type, 400);
        }
      }
    };

    type();

    return () => clearTimeout(timeout);
  });
</script>

<svelte:head>
  <title>Sama Ahmed's Portfolio</title>

  <meta
    name="description"
    content="Sama Ahmed — UX researcher and builder creating thoughtful digital experiences."
  />

  <meta name="author" content="Sama Ahmed" />
</svelte:head>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />

  <section
    class="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-start gap-12 pt-20 pb-20 md:flex-row md:items-center md:justify-between md:pt-28"
  >
    <div class="max-w-3xl flex-1">
      <h1 class="text-3xl leading-tight tracking-tight md:text-5xl">
        Hi, I'm
        <span class="relative inline-block px-2">
          <span class="relative z-10">Sama Ahmed</span>

          <span
            class="absolute top-1/2 -right-3 -left-3 -z-0 h-10 -translate-y-1/2 rotate-[-2deg] rounded-[60%_40%_55%_45%/50%_60%_40%_60%] bg-[#CDE8DF]/80"
          ></span>
        </span>
      </h1>

      <div class="mt-8 space-y-3">
        <p class="text-xl md:text-2xl">
          Incoming UX Researcher at LPL Financial.
        </p>

        <p class="min-h-[2rem] text-lg opacity-75 md:text-xl">
          {displayedText}
          <span class="animate-pulse">|</span>
        </p>
      </div>

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
