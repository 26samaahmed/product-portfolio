<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  {href}
  class="group flex items-center gap-2 rounded-full border border-[#35483A]
    bg-[#35483A] px-5 py-2.5 text-sm text-[#F5F3ED]
    transition duration-200
    hover:-translate-y-0.5 hover:border-[#783D46] hover:bg-[#783D46]
    md:text-base"
>
  <slot name="icon-left" />
  {label}
  <slot name="icon-right" />
</a>
