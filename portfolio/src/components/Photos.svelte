<script>
  import highlight1 from '$lib/assets/highlight1.jpg';
  import highlight2 from '$lib/assets/highlight2.jpg';
  import highlight3 from '$lib/assets/highlight3.jpg';
  import highlight4 from '$lib/assets/highlight4.jpg';
  import highlight5 from '$lib/assets/highlight5.jpg';
  import highlight6 from '$lib/assets/highlight6.jpg';

  const highlights = [highlight1, highlight2, highlight3, highlight4, highlight5, highlight6];
</script>

<main class="max-w-6xl mx-auto px-6">
  <p class="text-3xl font-sans">College Through My Eyes</p>

  <p class="text-xl font-sans mt-8">
    ⟢ A visual diary of my journey through software engineering, design, and product—capturing the small moments that made my college experience meaningful.
  </p>

  <div class="columns-1 sm:columns-2 md:columns-3 gap-8 mt-16 space-y-8">
    {#each highlights as img}
      <img
        src={img}
        alt="College highlight"
        class="rounded-sm shadow-lg w-full hover:scale-[1.01] transition-transform"
      />
    {/each}
  </div>
  
</main>
