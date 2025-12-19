<script lang="ts">
  import ProjectPreview from './ProjectPreview.svelte';
  import type { Project } from '$lib/types';
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let projects: Project[] = [];

  let currentIndex = 0;

  function nextProject() {
    if (currentIndex < projects.length - 1) {
      currentIndex += 1;
    }
  }

  function previousProject() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    }
  }

  // keyboard navigation
  function handleKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') previousProject();
    if (e.key === 'ArrowRight') nextProject();
  }
</script>

<main class="w-full flex flex-col items-center px-4 md:px-12" on:keydown={handleKey} tabindex="0">
  <p class="text-3xl md:text-4xl font-sans mb-8">Case Studies</p>


  {#if projects.length}
    {#key currentIndex}
      <div transition:slide={{ duration: 600, easing: cubicOut }}>
        <ProjectPreview project={projects[currentIndex]} />
      </div>
    {/key}
  {/if}


  <div class="flex justify-between items-center mt-8 w-full max-w-3xl">
    

    {#if currentIndex > 0}
      <button 
        on:click={previousProject} 
        class="hover:text-[#9FA6A4] transition duration-600 text-md md:text-lg">
        ← Previous
      </button>
    {/if}


    <div class="flex gap-3">
      {#each projects as _, index}
        <div 
          class="w-3 h-3 md:w-4 md:h-4 rounded-full border border-[#105C42] transition-colors duration-300"
          class:bg-[#105C42]={index === currentIndex}
          class:bg-[#EAFAE3]={index !== currentIndex}>
        </div>
      {/each}
    </div>


    {#if currentIndex < projects.length - 1}
      <button 
        on:click={nextProject} 
        class="hover:text-[#9FA6A4] transition duration-600 text-md md:text-lg">
        Next →
      </button>
    {/if}

  </div>
</main>
