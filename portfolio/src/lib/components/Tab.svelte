<script lang="ts">
  export let label: string;
  export let active = false;
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="relative pb-1 text-base transition-all duration-200
    {active ? 'text-black' : 'text-neutral-500 hover:text-black'}"
>
  <span
    class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-black transition-transform duration-300 ease-out"
    class:scale-x-100={active}
    class:scale-x-0={!active}
  />

  {label}
</button>
