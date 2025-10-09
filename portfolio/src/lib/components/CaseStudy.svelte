<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&family=Ephesis&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import type {CaseStudy} from '$lib/types';
  


  export let caseStudy: CaseStudy;
</script>

<main class="p-10 font-sans">
  <p class="text-3xl text-[#88B8FF] ml-0 mb-2">Timeline: {caseStudy.timeline}</p>
  <h1 class="text-7xl mb-4">{caseStudy.title}</h1>

  <div class="flex flex-wrap mb-6 mt-6">
  {#each caseStudy.roles as role}
    <span class="inline-block bg-[#FDF7BC] text-black rounded-full px-4 py-2 text-center whitespace-nowrap mr-5 mb-2 text-2xl">{role}</span>
  {/each}
  </div>

  <hr>

  <p class="mt-10 text-3xl">{caseStudy.introduction}</p>
  <!--
  <p>{caseStudy.roles.join(', ')}</p>
  
  <p>{caseStudy.problem_statement}</p>
  -->
</main>


