<script lang="ts">
  import type { Button } from '$lib/types';
  export let buttons: Button[] = [];

  const linkClasses = `
    text-md sm:text-3xl inline-block relative 
    after:content-[''] after:absolute after:w-full after:h-0.5 
    after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
    after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#105C42]
    hover:after:scale-x-100 hover:after:origin-bottom-left
  `;

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>


<div class="w-full flex justify-center pb-10">
  <div class="flex space-x-6 md:space-x-24">
    {#each buttons as button}
      {#if button.name !== 'Resume'}
        {#if button.name === 'Contact'}
          <a href="mailto:{button.link}" class={linkClasses}>
            {button.name}
          </a>
        {:else}
          <a
            href={button.link}
            on:click|preventDefault={scrollIntoView}
            class={linkClasses}
          >
            {button.name}
          </a>
        {/if}
      {/if}
    {/each}
  </div>
</div>
