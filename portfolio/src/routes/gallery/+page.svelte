<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Tab from '$lib/components/Tab.svelte';

  const designs = [
    {
      src: '',
      alt: '',
      week: '',
      title: '',
      date: '',
    },
  ];

  const photos = [
    {
      src: '/photo-gallery/image1.jpg',
      alt: 'Photo 1',
    },
    {
      src: '/photo-gallery/image2.jpg',
      alt: 'Photo 2',
    },
    {
      src: '/photo-gallery/image3.jpg',
      alt: 'Photo 3',
    },
    {
      src: '/photo-gallery/image4.jpg',
      alt: 'Photo 4',
    },
    {
      src: '/photo-gallery/image5.jpg',
      alt: 'Photo 5',
    },
    {
      src: '/photo-gallery/image6.jpg',
      alt: 'Photo 6',
    },
    {
      src: '/photo-gallery/image7.jpg',
      alt: 'Photo 7',
    },
    {
      src: '/photo-gallery/image8.jpg',
      alt: 'Photo 8',
    },
    {
      src: '/photo-gallery/image9.jpg',
      alt: 'Photo 9',
    },
    {
      src: '/photo-gallery/image10.jpg',
      alt: 'Photo 10',
    },
    {
      src: '/photo-gallery/image11.jpg',
      alt: 'Photo 11',
    },
    {
      src: '/photo-gallery/image12.jpg',
      alt: 'Photo 12',
    },
    {
      src: '/photo-gallery/image13.jpg',
      alt: 'Photo 13',
    },
    {
      src: '/photo-gallery/image14.jpg',
      alt: 'Photo 14',
    },
  ];

  type Design = (typeof designs)[number];
  type Photo = (typeof photos)[number];

  let activeGallery = 'photos';

  let selectedDesign: Design | null = null;
  let selectedPhoto: Photo | null = null;

  function openDesign(design: Design) {
    selectedDesign = design;
  }

  function openPhoto(photo: Photo) {
    selectedPhoto = photo;
  }

  function closeLightbox() {
    selectedDesign = null;
    selectedPhoto = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }
</script>

<svelte:head>
  <title>Gallery — Sama Ahmed</title>

  <meta
    name="description"
    content="A collection of art, photography, design, and other things I've created along the way."
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
        a little corner for things I capture + create
      </p>

      <h1
        class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
      >
        Gallery

        <span
          class="inline-flex text-lg text-[#C4CBAF] md:text-xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <!-- Tabs -->
      <div class="mt-8 flex gap-8">
        <Tab
          label="photos"
          active={activeGallery === 'photos'}
          onClick={() => (activeGallery = 'photos')}
          dark
        />

        <Tab
          label="design"
          active={activeGallery === 'design'}
          onClick={() => (activeGallery = 'design')}
          dark
        />
      </div>
    </section>

    {#key activeGallery}
      <!-- PHOTO GALLERY -->
      {#if activeGallery === 'photos'}
        <section class="gallery-reveal mt-10">
          <p
            class="mb-10 max-w-3xl text-base leading-relaxed text-[#E7E1DA] md:text-lg"
          >
            getting more into capturing what's around me through my Kodak
            digicam.
          </p>

          <div
            class="mx-auto grid max-w-5xl grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2"
            aria-label="Photo gallery"
          >
            {#each photos as photo}
              <button
                type="button"
                class="group block w-full cursor-pointer overflow-hidden"
                on:click={() => openPhoto(photo)}
                aria-label={`View ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  class="h-auto w-full transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
              </button>
            {/each}
          </div>
        </section>

        <!-- DESIGN GALLERY -->
      {:else}
        <section class="gallery-reveal mt-10">
          <p
            class="mb-10 max-w-3xl text-base leading-relaxed text-[#E7E1DA] md:text-lg"
          >
            challenging myself to create something new every week and
            documenting my progress along the way.
          </p>

          <div
            class="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2"
            aria-label="Design gallery"
          >
            {#each designs as design}
              <button
                type="button"
                class="group block w-full cursor-pointer text-left"
                on:click={() => openDesign(design)}
                aria-label={`View ${design.title}`}
              >
                <!-- Design image -->
                <div class="overflow-hidden rounded-xl">
                  <img
                    src={design.src}
                    alt={design.alt}
                    class="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                <!-- Design information -->
                <div class="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <p
                      class="text-xs uppercase tracking-[0.14em] text-[#C4CBAF]"
                    >
                      {design.week}
                    </p>

                    <p
                      class="mt-1 text-sm text-[#E7E1DA] transition-colors duration-200 group-hover:text-[#F5F3ED]"
                    >
                      {design.title}
                    </p>
                  </div>

                  <p class="pt-0.5 text-xs italic text-[#D7C3B8]">
                    {design.date}
                  </p>
                </div>
              </button>
            {/each}
          </div>
        </section>
      {/if}
    {/key}
  </div>

  <Footer dark />
</main>

<!-- PHOTO LIGHTBOX -->
{#if selectedPhoto}
  <div
    class="lightbox fixed inset-0 z-50 flex items-center justify-center bg-[#241817]/95 p-5 md:p-10"
    role="presentation"
    on:click={closeLightbox}
  >
    <div
      class="lightbox-content relative flex max-h-full w-full max-w-6xl flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={selectedPhoto.alt}
      on:click|stopPropagation
    >
      <!-- Close -->
      <div class="mb-4 flex justify-end">
        <button
          type="button"
          on:click={closeLightbox}
          class="group flex items-center gap-2 text-sm text-[#D7C3B8] transition-colors duration-200 hover:text-[#F5F3ED]"
          aria-label="Close photo"
        >
          close

          <span
            class="text-lg text-[#C4CBAF] transition-transform duration-200 group-hover:rotate-90"
          >
            ×
          </span>
        </button>
      </div>

      <!-- Full photo -->
      <div class="min-h-0 flex-1 overflow-auto">
        <img
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          class="mx-auto max-h-[82vh] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  </div>
{/if}

<!-- DESIGN LIGHTBOX -->
{#if selectedDesign}
  <div
    class="lightbox fixed inset-0 z-50 flex items-center justify-center bg-[#241817]/95 p-5 md:p-10"
    role="presentation"
    on:click={closeLightbox}
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
          on:click={closeLightbox}
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

      <!-- Design information -->
      <div class="mx-auto mt-4 flex w-full items-start justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.14em] text-[#C4CBAF]">
            {selectedDesign.week}
          </p>

          <p class="mt-1 text-sm text-[#F5F3ED]">
            {selectedDesign.title}
          </p>
        </div>

        <p class="text-xs italic text-[#D7C3B8]">
          {selectedDesign.date}
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

  .gallery-reveal {
    animation: fade-up 0.4s ease-out;
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

    .gallery-reveal,
    .lightbox,
    .lightbox-content {
      animation: none;
    }
  }
</style>
