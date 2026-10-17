<script lang="ts">
  import type { Project } from '$lib/types';

  export let projects: Project[] = [];
  export let dark = false;
</script>

<div>
  {#each projects as project}
    <div class="mb-10">
      <div class="mb-2 flex flex-col gap-4 md:flex-row md:items-center">
        <a
          href={`/projects/${project.slug}`}
          class="group inline-flex w-fit items-center gap-2 text-2xl transition-colors duration-200
            {dark
            ? 'text-[#F5F3ED] hover:text-[#C4CBAF]'
            : 'text-[#292B27] hover:text-[#35483A]'}"
        >
          <span
            class="transition-transform duration-200 group-hover:translate-x-1"
          >
            {project.title}
          </span>

          <span
            class="text-lg opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100
            {dark ? 'text-[#D4C0AD]' : 'text-[#783D46]'}"
          >
            ↗
          </span>
        </a>
      </div>

      <div
        class="flex gap-3 text-sm
          {dark ? 'text-[#D4C0AD]' : 'text-[#725747]'}"
      >
        <span>{project.role}</span>
        <span>•</span>
        <span>{project.duration}</span>
      </div>

      <p
        class="mt-2 max-w-4xl leading-relaxed
          {dark ? 'text-[#E9E3DA]' : 'text-[#4F504A]'}"
      >
        {project.preview}
      </p>
    </div>
  {/each}
</div>
