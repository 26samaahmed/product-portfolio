<script lang="ts">
  import type { Project } from '$lib/types';
  export let projects: Project[] = [];
</script>

<div>
  {#each projects as project}
    <div class="mb-8">
      <h2 class="text-2xl mb-2">{project.title}</h2>
      <p class="text-gray-700 mb-4">{project.description}</p>
      <a href={project.link} class="text-blue-500 hover:underline" target="_blank">View Project</a>
    </div>
  {/each}

</div>