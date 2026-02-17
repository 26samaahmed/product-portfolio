<script lang="ts">
  import type { Project } from '$lib/types';
  export let projects: Project[] = [];
</script>

<div>
  {#each projects as project}
    <div class="mb-10">
      
      <div class="flex gap-6 items-center mb-2">
        <a
          href={project.caseStudyUrl} target="_blank"
          class="text-2xl flex"
        >
          {project.title}
        </a>

        <div>
          {#each project.tags as tag}
            <span class="text-sm text-gray-500 mr-2 border border-[#105C42] px-2 md:px-4 py-1 rounded-full shadow-sm">{tag}</span>
          {/each}
        </div>

      </div>

      <div class="flex justify-between mt-2 text-md text-gray-600">
        <span>{project.role}</span>
        <span>{project.duration}</span>
      </div>

      <p class="text-gray-700 mt-2"><i>{project.preview}</i></p>
    </div>
  {/each}

</div>