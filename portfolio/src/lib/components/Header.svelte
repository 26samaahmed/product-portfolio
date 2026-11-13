
<script lang="ts">
  export let dark = false;
</script>

<div class="flex w-full items-center justify-start p-4">
  <a
    href="/"
    aria-label="Sama Ahmed home"
    class="group inline-flex cursor-pointer items-center justify-center
      {dark
      ? 'text-[#F5F3ED] hover:text-[#C4CBAF]'
      : 'text-[#292B27] hover:text-[#35483A]'}
      transition-colors duration-300"
  >
    <span
      class="inline-block text-4xl transition-transform duration-300 ease-out
        group-hover:-rotate-12 group-hover:scale-110
        motion-reduce:transform-none"
      aria-hidden="true"
    >
      ⏾
    </span>
  </a>
</div>
