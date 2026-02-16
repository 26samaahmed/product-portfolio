<script lang="ts">
  export let paths: Button[] = [];
  const linkClasses = `
    text-xl sm:text-md inline-block relative 
    after:content-[''] after:absolute after:w-full after:h-0.5 
    after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
    after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#105C42]
    hover:after:scale-x-100 hover:after:origin-bottom-left
  `;
</script>

<div class="w-full flex justify-center mb-10">
  <div class="flex space-x-10 md:space-x-24">
    {#each paths as path}
        {#if path.name === 'Email'}
          <a href="mailto:{path.link}" class={linkClasses} target="_blank">
            {path.name}
          </a>
        {:else}
          <a
            href={path.link}
            class={linkClasses}
            target="_blank"
          >
            {path.name}
          </a>
      {/if}
    {/each}
  </div>
</div>