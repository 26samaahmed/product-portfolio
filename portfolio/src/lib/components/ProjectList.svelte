<script lang="ts">
  import type { Project } from '$lib/types';
  export let projects: Project[] = [];
</script>

<div>
  {#each projects as project}
    <div class="mb-10">
      
      <div class="flex flex-col md:flex-row gap-6 items-start md:items-center mb-2">
        <a
          href={project.caseStudyUrl}
          target="_blank"
          class="text-2xl inline-flex items-center gap-2 group"
        >
          <span class="transition-transform duration-200 group-hover:translate-x-1">
            {project.title}
          </span>

          <span class="text-lg opacity-0 group-hover:opacity-100 transition-all duration-200">
            ↗
          </span>
        </a>

        <div>
          {#each project.tags as tag}
            <span class="text-xs md:text-sm text-gray-500 mr-2 border border-[#black] px-2 md:px-4 py-1 rounded-full shadow-sm">{tag}</span>
          {/each}
        </div>

      </div>

      <div class="mt-2 text-md text-gray-600 flex gap-4">
          <span>{project.role}</span>
          <span>•</span>
          <span>{project.duration}</span>
      </div>

      <p class="text-gray-700 mt-2">{project.preview}</p>
    </div>
  {/each}

</div>