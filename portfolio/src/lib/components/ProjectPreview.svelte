<script lang="ts">
  import placeholder from '$lib/assets/project1.png';
  import type { Project } from '$lib/types';
  export let project: Project;
</script>

<main>
  <div class="w-full md:w-2/3 max-w-5xl md:mt-12 m-auto relative">

    <div class="bg-[#547E6F] text-[#F8F8F8] rounded-xl shadow-xl pt-10 pb-6 px-8 hover:scale-[1.03] transition-transform duration-300">
      
      <div class="flex flex-col md:flex-row md:justify-between mb-4 align-center">
        <p class="text-2xl">
          {project.title}
        </p>
        <p class="text-xl mt-2 md:mt-0">
          {project.duration} ⟡ {project.role}
        </p>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        {#each project.tags as tag}
          <span class="bg-white border border-[#105C42] text-[#105C42] px-2 md:px-4 py-1 rounded-full text-sm shadow-sm">
            {tag}
          </span>
        {/each}
      </div>

 
      <p class="text-md md:text-xl mb-6 leading-relaxed">
        {project.problem_statement}
      </p>

      <div class="flex justify-end">
        <a class="text-md md:text-lg hover:text-gray-300 duration-600" href={project.casestudyUrl}>
          Read Case Study →
        </a>
      </div>
        

    </div>
  </div>
</main>
