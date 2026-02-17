<script lang="ts">
  import Resume from '$lib/assets/Sama_Ahmed_Resume.pdf';
  import type { Button} from '$lib/types';

  const paths: Button[] = [
    { name: 'Resume', link: Resume },
    { name: 'Email', link: 'ssama5336@gmail.com' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/sama-ahmedd/' },
    { name: 'Github', link: 'https://github.com/26samaahmed' },
    { name: 'Gallery', link: 'https://design-gallery.samahmed.info/'}
  ];

  const linkClasses = `
    tracking-wide text-base sm:text-sm inline-block relative 
    text-black/60 hover:text-black transition-colors
    after:content-[''] after:absolute after:w-full after:h-0.5 
    after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
    after:transition-transform after:duration-[350ms] after:ease-out after:bg-[#105C42]
    hover:after:scale-x-100 hover:after:origin-bottom-left
  `;
</script>

<p class="text-sm text-black/60 text-center mb-6">
  Designed and built by Sama Ahmed
</p>

<div class="w-full max-w-5xl mx-auto mb-1">
  <div class="h-px bg-black/10"></div>
</div>

<div class="w-full flex justify-center py-6">
  <div class="flex space-x-10 md:space-x-36">
    {#each paths as path}
      {#if path.name === 'Email'}
        <a href="mailto:{path.link}" class={linkClasses} target="_blank">
          {path.name}
        </a>
      {:else}
        <a href={path.link} class={linkClasses} target="_blank">
          {path.name}
        </a>
      {/if}
    {/each}
  </div>
</div>
