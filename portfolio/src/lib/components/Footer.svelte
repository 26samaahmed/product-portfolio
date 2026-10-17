<script lang="ts">
  import Resume from '$lib/assets/Sama_Ahmed_Resume.pdf';
  import type { Button } from '$lib/types';

  export let dark = false;

  const paths: Button[] = [
    { name: 'Resume', link: Resume },
    { name: 'Email', link: 'ssama5336@gmail.com' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/sama-ahmedd/' },
    { name: 'Github', link: 'https://github.com/26samaahmed' },
    {
      name: 'Design Gallery',
      link: 'https://design-gallery.samahmed.info/',
    },
  ];

  $: linkClasses = dark
    ? `
        tracking-wide text-xs sm:text-sm inline-block relative
        text-[#D4C0AD] hover:text-[#F5F3ED] transition-colors
        after:content-[''] after:absolute after:w-full after:h-0.5
        after:bottom-0 after:left-0 after:scale-x-0
        after:origin-bottom-right after:transition-transform
        after:duration-[350ms] after:ease-out after:bg-[#C4CBAF]
        hover:after:scale-x-100 hover:after:origin-bottom-left
      `
    : `
        tracking-wide text-xs sm:text-sm inline-block relative
        text-[#77786F] hover:text-[#35483A] transition-colors
        after:content-[''] after:absolute after:w-full after:h-0.5
        after:bottom-0 after:left-0 after:scale-x-0
        after:origin-bottom-right after:transition-transform
        after:duration-[350ms] after:ease-out after:bg-[#35483A]
        hover:after:scale-x-100 hover:after:origin-bottom-left
      `;
</script>

<p
  class="mb-6 text-center text-sm {dark ? 'text-[#D4C0AD]' : 'text-[#77786F]'}"
>
  © 2026 Sama Ahmed ⊹₊⟡⋆
</p>

<div class="mx-auto mb-1 w-full max-w-4xl md:max-w-5xl">
  <div class="h-px {dark ? 'bg-[#6A5050]' : 'bg-[#DEDDD4]'}"></div>
</div>

<div
  class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 py-6 md:gap-x-32"
>
  {#each paths as path}
    {#if path.name === 'Email'}
      <a href="mailto:{path.link}" class={linkClasses}>
        {path.name}
      </a>
    {:else}
      <a href={path.link} class={linkClasses} target="_blank" rel="noreferrer">
        {path.name}
      </a>
    {/if}
  {/each}
</div>
