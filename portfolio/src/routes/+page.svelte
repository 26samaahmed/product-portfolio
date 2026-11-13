<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PrimaryLink from '$lib/components/PrimaryLink.svelte';

  const socials = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/31ctofzgoost2ub5nsufbyuprlwu?si=c710841ff20243b4',
    },
    {
      name: 'Letterboxd',
      url: 'https://boxd.it/iTNx7',
    },
  ];
</script>

<svelte:head>
  <title>Sama Ahmed's Portfolio</title>

  <meta
    name="description"
    content="Sama Ahmed — UX researcher and builder creating thoughtful digital experiences."
  />
</svelte:head>

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#4B302E] p-4 pt-1 text-[#F5F3ED]"
>
  <Header dark />

  <section
    class="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 py-10 md:flex-row md:items-center md:justify-between md:gap-12 md:py-14"
  >
    <!-- LEFT -->
    <div class="max-w-3xl flex-1">
      <!-- Heading -->
      <h1
        class="group reveal delay-1 flex items-center gap-3 text-4xl font-medium leading-tight tracking-tight md:text-5xl"
      >
        <span>Hi, I'm Sama Ahmed</span>

        <span
          class="inline-flex translate-y-[1px] items-center text-xl text-[#C4CBAF] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 md:text-2xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <!-- Bio -->
      <div class="reveal delay-2 mt-9 max-w-2xl">
        <p class="text-lg text-[#E9E3DA] md:text-xl">
          UX Researcher at
          <span class="font-medium text-[#C4CBAF]">
            LPL Financial
          </span>
        </p>

        <p class="mt-1.5 text-base italic text-[#D4C0AD] md:text-lg">
          collecting miffy things & watching way too many k-dramas
        </p>
        
      </div>

      <!-- Main Links -->
      <div class="reveal delay-3 mt-10 flex flex-wrap gap-4">
        <PrimaryLink href="/work" label="Selected Work" dark>
          <span
            slot="icon-left"
            class="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
        </PrimaryLink>

        <PrimaryLink href="/about-me" label="About" dark>
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
    <div class="flex flex-col items-center md:ml-auto md:items-end">
      <!-- Photo -->
      <img
        src="/about-me.jpg"
        alt="Sama Ahmed graduation"
        class="reveal-photo delay-photo w-[220px] rounded-2xl object-cover shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-[300px]"
      />

      <!-- Location -->
      <div class="reveal delay-4 mt-3 flex items-center gap-2">
        <span class="h-px w-5 bg-[#C4CBAF]"></span>

        <p class="text-xs tracking-wide text-[#D4C0AD] italic">
          based in irvine + san diego
        </p>

        <span class="text-xs text-[#C4CBAF]">✷</span>
      </div>


<!-- Personal Links -->
<div class="reveal delay-4 mt-5 w-full max-w-[300px]">
  <!-- Divider -->
  <div class="h-px w-full bg-[#F5F3ED]/15"></div>

  <!-- Social Links -->
  <div class="mt-4 flex items-center justify-center gap-7 md:justify-end">
    {#each socials as social}
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-1.5 text-sm text-[#E9E3DA] transition-colors duration-200 hover:text-[#C4CBAF]"
      >
        {social.name}

        <span
          class="text-[#C4CBAF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          ↗
        </span>
      </a>
    {/each}
  </div>
</div>

    </div>
  </section>

  <Footer dark />
</main>

<style>
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

  @media (prefers-reduced-motion: reduce) {
    .reveal,
    .reveal-photo {
      opacity: 1;
      animation: none;
    }
  }
</style>
