<script lang="ts">
  export let label: string;
  export let active = false;
  export let onClick: () => void;
  export let dark = false;
</script>

<button
  on:click={onClick}
  class="relative cursor-pointer pb-1 text-base transition-all duration-200
    {dark
    ? active
      ? 'text-[#C4CBAF]'
      : 'text-[#D4C0AD] hover:text-[#F5F3ED]'
    : active
      ? 'text-[#35483A]'
      : 'text-[#77786F] hover:text-[#35483A]'}"
  aria-pressed={active}
>
  <span
    class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left transition-transform duration-300 ease-out
      {dark ? 'bg-[#C4CBAF]' : 'bg-[#35483A]'}"
    class:scale-x-100={active}
    class:scale-x-0={!active}
  ></span>

  {label}
</button>
