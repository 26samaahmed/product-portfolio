<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  {href}
  class="group flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-sm md:text-base transition duration-200 hover:bg-black hover:text-white"
>
  <slot name="icon-left" />
  {label}
  <slot name="icon-right" />
</a>
