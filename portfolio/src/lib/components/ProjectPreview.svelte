<script lang="ts">
  import placeholder from '$lib/assets/project1.png';
  import type { Project } from '$lib/types';

  //export let project_duration = "[] Weeks";
  //export let role = "Example Role";
  export let projects: Project;
</script>

<main>
  <div class="w-2/3 h-full mt-6 m-auto p-8 border rounded border-white">
    <div class="flex flex-col md:flex-row space-x-4 items-center mb-4">
      <h1 class="text-4xl">{projects.title}</h1>
      {#each projects.tags as tag}
      <p class="bg-[#eef066] text-lg text-black rounded-full px-3 py-1 text-center whitespace-nowrap">{tag}</p>
    {/each}
      
      <!--
      <p class="text-xl mb-1">Duration: {projects_duration}</p>
    -->
    </div>


    <p class="text-2xl mb-4"><em>Problem Statement:</em> {projects.problem_statement}</p>
    <img src={projects.imageUrl} alt="Project" 
         class="w-2/3 h-auto object-cover rounded-sm border border-white mb-5" />

    <!--
    <div class="flex justify-end">
      <a href={projects.casestudyUrl} target="_blank" 
          class="text-xl text-white relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:mt-1 hover:after:scale-x-100">
            Check Case Study
      </a>
    </div> 
    --> 

    <div class="flex justify-end">
      <a
        href={projects.casestudyUrl}
        class="text-2xl text-white relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:mt-1 hover:after:scale-x-100"
        target="_blank"
      >
        Check Case Study
      </a>

    </div>
    
        
    
  </div>  
</main>
