<script lang="ts">
  import type { Project } from '$lib/types';

  export let projects: Project[] = [];
</script>

<div>
  {#each projects as project, index}
    <div
      class="project-item mb-10"
      style={`animation-delay: ${index * 70}ms`}
    >
      <div class="mb-2 flex flex-col gap-4 md:flex-row md:items-center">
        <a
          href={`/projects/${project.slug}`}
          class="group inline-flex items-center gap-2 text-2xl text-[#292B27] transition-colors duration-200 hover:text-[#35483A]"
        >
          <span
            class="transition-transform duration-200 group-hover:translate-x-1"
          >
            {project.title}
          </span>

          <span
            class="text-lg text-[#783D46] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
          >
            ↗
          </span>
        </a>
      </div>

      <div class="flex gap-3 text-sm text-[#725747]">
        <span>{project.role}</span>
        <span class="text-[#783D46]">•</span>
        <span>{project.duration}</span>
      </div>

      <p class="mt-2 max-w-4xl text-[#4F504A]">
        {project.preview}
      </p>
    </div>
  {/each}
</div>

<style>
  @keyframes project-reveal {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .project-item {
    opacity: 0;
    animation: project-reveal 0.5s ease-out forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .project-item {
      opacity: 1;
      animation: none;
    }
  }
</style>