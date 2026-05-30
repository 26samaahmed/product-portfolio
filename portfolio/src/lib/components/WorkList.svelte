<script lang="ts">
  import type { Project } from '$lib/types';
  export let projects: Project[] = [];
</script>

<div>
  {#each projects as project}
    <div class="mb-10">
      <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
        <a
          href={project.caseStudyUrl}
          class="text-2xl inline-flex items-center gap-2 group"
        >
          <span
            class="transition-transform duration-200 group-hover:translate-x-1"
          >
            {project.title}
          </span>

          <span
            class="text-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            ↗
          </span>
        </a>
      </div>

      <div class="text-sm text-neutral-500 flex gap-3">
        <span>{project.role}</span>
        <span>•</span>
        <span>{project.duration}</span>
      </div>

      <p class="text-neutral-600 mt-2 max-w-4xl">
        {project.preview}
      </p>
    </div>
  {/each}
</div>
