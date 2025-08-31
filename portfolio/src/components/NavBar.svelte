<script>
  export let buttons = {};

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>


<div class="flex justify-center">
  <nav class="w-fit rounded-full bg-[#FFF6D1] z-10 border px-12 py-5">
    <div class="flex justify-center space-x-3 md:space-x-24">
      {#each buttons as button}
        <a
          href={button.link}
          on:click|preventDefault={scrollIntoView}
          class="text-lg sm:text-4xl inline-block relative 
                 after:content-[''] after:absolute after:w-full after:h-0.5 
                 after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right 
                 after:transition-transform after:duration-[250ms] after:ease-out after:bg-[#3E35EE]
                 hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          {button.name}
        </a>
      {/each}
    </div>
  </nav>
</div>
