<script lang="ts">
  import { page } from '$app/state';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';

  import { projects } from '$lib/projects';
  import { audioSegments } from '$lib/data/audioSegments';

  const slug = $derived(page.params.slug);

  const project = $derived(projects.find((item) => item.slug === slug));

  let activeAudioElement: HTMLAudioElement | null = null;

  function handleAudioPlay(audioElement: HTMLAudioElement) {
    if (activeAudioElement && activeAudioElement !== audioElement) {
      activeAudioElement.pause();
    }

    activeAudioElement = audioElement;
  }
</script>

<svelte:head>
  <title>
    {project ? `${project.title} — Sama Ahmed` : 'Project — Sama Ahmed'}
  </title>

  {#if project}
    <meta name="description" content={project.preview} />
  {/if}
</svelte:head>

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#422D2D] p-4 pt-1 text-[#F5F3ED]"
>
  <Header dark />

  {#if project}
    <div class="mx-auto w-full max-w-5xl flex-1 pt-14 pb-20">
      <!-- Project header -->
      <div class="page-reveal">
        <!-- Back -->
        <a
          href="/work"
          class="group mb-8 inline-flex items-center gap-2 text-sm text-[#D4C0AD] transition-colors duration-200 hover:text-[#C4CBAF]"
        >
          <span
            class="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>

          back to work
        </a>

        <!-- Project title -->
        <h1
          class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
        >
          {project.title}

          <span
            class="inline-flex text-lg text-[#C4CBAF] md:text-xl"
            aria-hidden="true"
          >
            ✷
          </span>
        </h1>

        <!-- Role + duration -->
        <div
          class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#D4C0AD] md:text-base"
        >
          <span>{project.role}</span>

          <span class="text-[#C4CBAF]">•</span>

          <span>{project.duration}</span>
        </div>

        <!-- Description -->
        <p
          class="mt-6 max-w-5xl text-base leading-relaxed text-[#E9E3DA] md:text-lg"
        >
          {project.preview}
        </p>
      </div>

      <!-- AUDIO PROJECT -->
      {#if project.type === 'audio'}
        <div class="page-reveal delay-1 mt-12">
          <div class="mb-8 flex items-end justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-[#C4CBAF]">
                The Feed
              </p>

              <p class="mt-2 text-sm italic text-[#D4C0AD]">
                five conversations from behind the mic ✷
              </p>
            </div>

            <p class="hidden text-xs text-[#D4C0AD] sm:block">Titan Radio</p>
          </div>

          <div>
            {#each audioSegments as segment}
              <AudioPlayer {segment} onPlay={handleAudioPlay} dark />
            {/each}
          </div>

          <div class="border-t border-[#6A5050]"></div>
        </div>

        <!-- FIGMA CASE STUDY -->
      {:else if project.figmaEmbedUrl}
        <div
          class="page-reveal delay-1 mt-12 mb-4 flex items-center justify-between gap-4"
        >
          <p class="text-sm italic text-[#D4C0AD]">the full story ↓</p>

          {#if project.figmaUrl}
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center gap-1 text-sm text-[#D4C0AD] transition-colors duration-200 hover:text-[#C4CBAF]"
            >
              open presentation

              <span
                class="text-[#C4CBAF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          {/if}
        </div>

        <!-- Figma Slides -->
        <div
          class="page-reveal delay-2 overflow-hidden rounded-xl border border-[#6A5050] bg-white shadow-sm"
        >
          <iframe
            src={project.figmaEmbedUrl}
            title={`${project.title} Case Study`}
            class="aspect-video w-full"
            allowfullscreen
          ></iframe>
        </div>

        {#if project.figmaUrl}
          <div class="page-reveal delay-3 mt-8 flex justify-end">
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center gap-1 text-sm text-[#D4C0AD] transition-colors duration-200 hover:text-[#C4CBAF]"
            >
              view fullscreen

              <span
                class="text-[#C4CBAF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        {/if}

        <!-- CASE STUDY COMING SOON -->
      {:else}
        <div class="page-reveal delay-1 mt-12 border-t border-[#6A5050] pt-10">
          <p class="text-sm italic text-[#D4C0AD]">case study coming soon</p>

          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-[#E9E3DA] md:text-lg"
          >
            I’m currently putting together the full story behind this project.
            Check back soon
            <span class="ml-1 text-[#C4CBAF]">✷</span>
          </p>
        </div>
      {/if}
    </div>

    <!-- INVALID SLUG -->
  {:else}
    <div
      class="page-reveal mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center py-20"
    >
      <h1
        class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
      >
        Project not found

        <span class="text-xl text-[#C4CBAF]">✷</span>
      </h1>

      <p class="mt-4 text-[#D4C0AD]">Looks like this project doesn't exist.</p>

      <a
        href="/work"
        class="group mt-8 inline-flex w-fit items-center gap-2 text-[#C4CBAF]"
      >
        <span
          class="transition-transform duration-200 group-hover:-translate-x-1"
        >
          ←
        </span>

        back to work
      </a>
    </div>
  {/if}

  <Footer dark />
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

  .delay-3 {
    animation-delay: 0.3s;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-reveal {
      opacity: 1;
      animation: none;
    }
  }
</style>
