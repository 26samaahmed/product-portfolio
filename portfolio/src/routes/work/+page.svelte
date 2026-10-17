<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectList from '$lib/components/WorkList.svelte';
  import Tab from '$lib/components/Tab.svelte';

  import { projects } from '$lib/projects';

  const categories = [
    { label: 'experience', value: 'experience' },
    { label: 'leadership', value: 'leadership' },
    { label: 'technical', value: 'technical' },
    { label: 'design', value: 'design' },
    { label: 'audio', value: 'audio' },
  ];

  let activeCategory = 'experience';

  $: filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );
</script>

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#F5F3ED] p-4 pt-1 text-[#292B27]"
>
  <Header />

  <div class="mx-auto w-full max-w-4xl flex-1 pt-14 pb-14">
    <!-- Heading -->
    <div class="page-reveal">
      <h1
        class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
      >
        My Work

        <span
          class="inline-flex text-lg text-[#783D46] md:text-xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <p class="mt-2 text-sm italic text-[#725747] md:text-base">
        a mix of research, leadership, design, and things I've built
      </p>
    </div>

    <!-- Tabs -->
    <div class="page-reveal delay-1 mt-8 mb-10 flex flex-wrap gap-8">
      {#each categories as cat}
        <Tab
          label={cat.label}
          active={activeCategory === cat.value}
          onClick={() => (activeCategory = cat.value)}
        />
      {/each}
    </div>

    <!-- Projects -->
    <div class="page-reveal delay-2">
      {#key activeCategory}
        <ProjectList projects={filteredProjects} />
      {/key}
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