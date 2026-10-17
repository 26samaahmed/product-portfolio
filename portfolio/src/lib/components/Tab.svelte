<script lang="ts">
  export let label: string;
  export let active = false;
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="relative pb-1 text-base transition-all duration-200
    {active ? 'text-[#35483A]' : 'text-[#77786F] hover:text-[#35483A]'}"
  aria-pressed={active}
>
  <span
    class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-[#783D46] transition-transform duration-300 ease-out"
    class:scale-x-100={active}
    class:scale-x-0={!active}
  ></span>

  {label}
</button>
