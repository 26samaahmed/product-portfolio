<script lang="ts">
  import ProjectPreview from './ProjectPreview.svelte';
  import type { Project } from '$lib/types';
  import {slide} from 'svelte/transition';

  export let projects: Project[]; 

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
</script>

<main>

  <p class="text-5xl font-sans">Case Studies</p>

  {#key currentIndex}
    <div transition:slide={{ duration: 600 }}>
      <ProjectPreview {...projects[currentIndex]} />
    </div>
  {/key}


  <div class="flex justify-between items-center mt-6 m-auto w-2/3">
    {#if currentIndex > 0}
      <button on:click={previousProject} class="text-2xl inline-block relative">
        ← <span
          class="relative after:content-[''] after:absolute after:w-full after:h-0.5 
            after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
            after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#FFFFFF]
            hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          Previous
        </span>
      </button>
    {/if}

    <div class="flex gap-4">
      {#each projects as _, index}
        <div class="w-4 h-4 rounded-full border"
          class:bg-white={index === currentIndex}
          class:bg-black={index !== currentIndex}>
        </div>
      {/each}
    </div>

    {#if currentIndex < projects.length - 1}
      <button on:click={nextProject} class="text-2xl inline-block relative float-right">
        <span
          class="relative after:content-[''] after:absolute after:w-full after:h-0.5 
            after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
            after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#FFFFFF]
            hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          Next
        </span> →
      </button>
    {/if}
  </div>
</main>
