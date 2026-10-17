<script lang="ts">
  export let href: string;
  export let label: string;
  export let dark = false;
</script>

<a
  {href}
  class="group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition duration-200 hover:-translate-y-0.5 md:text-base
    {dark
    ? 'border-[#F5F3ED] bg-[#F5F3ED] text-[#422D2D] hover:border-[#C4CBAF] hover:bg-[#C4CBAF]'
    : 'border-[#35483A] bg-[#35483A] text-[#F5F3ED] hover:border-[#783D46] hover:bg-[#783D46]'}"
>
  <slot name="icon-left" />

  {label}

  <slot name="icon-right" />
</a>
