<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const designs = [
    {
      src: '/design-gallery/image1.png',
      alt: 'Design 1',
      title: 'Design 01',
      type: 'web concept',
    },
    {
      src: '/design-gallery/image2.png',
      alt: 'Design 2',
      title: 'Design 02',
      type: 'web concept',
    },
    {
      src: '/design-gallery/image3.png',
      alt: 'Design 3',
      title: 'Design 03',
      type: 'landing page',
    },
    {
      src: '/design-gallery/image4.png',
      alt: 'Design 4',
      title: 'Design 04',
      type: 'interface concept',
    },
    {
      src: '/design-gallery/image5.png',
      alt: 'Design 5',
      title: 'Design 05',
      type: 'interface concept',
    },
    {
      src: '/design-gallery/image6.png',
      alt: 'Design 6',
      title: 'Design 06',
      type: 'web concept',
    },
    {
      src: '/design-gallery/image7.png',
      alt: 'Design 7',
      title: 'Design 07',
      type: 'visual concept',
    },
    {
      src: '/design-gallery/image8.png',
      alt: 'Design 8',
      title: 'Design 08',
      type: 'web concept',
    },
  ];

  let selectedDesign: (typeof designs)[number] | null = null;

  function openDesign(design: (typeof designs)[number]) {
    selectedDesign = design;
  }

  function closeDesign() {
    selectedDesign = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeDesign();
    }
  }
</script>

<svelte:head>
  <title>Design Gallery — Sama Ahmed</title>

  <meta
    name="description"
    content="A collection of visual experiments, interfaces, and concepts I've made in Figma over the years."
  />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#4B302E] p-4 pt-1 text-[#F5F3ED]"
>
  <Header dark />

  <div class="mx-auto w-full max-w-6xl flex-1 pt-14 pb-20">
    <!-- Intro -->
    <section class="page-reveal">
      <p class="mb-3 text-sm italic text-[#D7C3B8]">
        a little corner for things I make for fun
      </p>

      <h1
        class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
      >
        Design Gallery

        <span
          class="inline-flex text-lg text-[#C4CBAF] md:text-xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <p
        class="mt-5 max-w-4xl text-base leading-relaxed text-[#E7E1DA] md:text-lg"
      >
        A collection of visual experiments, interfaces, and concepts I've made
        in Figma over the years.
      </p>
    </section>

    <!-- Gallery -->
    <section
      class="page-reveal delay-1 mt-14 grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2"
      aria-label="Design gallery"
    >
      {#each designs as design}
        <button
          type="button"
          class="group block w-full cursor-pointer text-left"
          on:click={() => openDesign(design)}
          aria-label={`View ${design.title}`}
        >
          <!-- Image -->
          <div class="overflow-hidden rounded-xl">
            <img
              src={design.src}
              alt={design.alt}
              class="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          <!-- Caption -->
          <div class="mt-2.5 flex items-center justify-between gap-4">
            <p
              class="text-sm text-[#E7E1DA] transition-colors duration-200 group-hover:text-[#F5F3ED]"
            >
              {design.title}
            </p>

            <p class="text-xs italic text-[#D7C3B8]">
              {design.type}
            </p>
          </div>
        </button>
      {/each}
    </section>
  </div>

  <Footer dark />
</main>

<!-- Lightbox -->
{#if selectedDesign}
  <div
    class="lightbox fixed inset-0 z-50 flex items-center justify-center bg-[#241817]/95 p-5 md:p-10"
    role="presentation"
    on:click={closeDesign}
  >
    <div
      class="lightbox-content relative flex max-h-full w-full max-w-6xl flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={selectedDesign.title}
      on:click|stopPropagation
    >
      <!-- Close -->
      <div class="mb-4 flex justify-end">
        <button
          type="button"
          on:click={closeDesign}
          class="group flex items-center gap-2 text-sm text-[#D7C3B8] transition-colors duration-200 hover:text-[#F5F3ED]"
          aria-label="Close design"
        >
          close

          <span
            class="text-lg text-[#C4CBAF] transition-transform duration-200 group-hover:rotate-90"
          >
            ×
          </span>
        </button>
      </div>

      <!-- Full design -->
      <div class="min-h-0 flex-1 overflow-auto">
        <img
          src={selectedDesign.src}
          alt={selectedDesign.alt}
          class="mx-auto max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
        />
      </div>

      <!-- Lightbox caption -->
      <div
        class="mx-auto mt-4 flex w-full max-w-full items-center justify-between gap-4"
      >
        <p class="text-sm text-[#F5F3ED]">
          {selectedDesign.title}
        </p>

        <p class="text-xs italic text-[#D7C3B8]">
          {selectedDesign.type}
        </p>
      </div>
    </div>
  </div>
{/if}

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

  @keyframes lightbox-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes lightbox-content-in {
    from {
      opacity: 0;
      transform: translateY(6px);
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

  .lightbox {
    animation: lightbox-in 0.2s ease-out;
  }

  .lightbox-content {
    animation: lightbox-content-in 0.25s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-reveal {
      opacity: 1;
      animation: none;
    }

    .lightbox,
    .lightbox-content {
      animation: none;
    }
  }
</style>
