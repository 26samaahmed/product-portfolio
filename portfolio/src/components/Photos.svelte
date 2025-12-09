<script>
  import highlight1 from '$lib/assets/highlight1.jpg';
  import highlight2 from '$lib/assets/highlight2.jpg';
  import highlight3 from '$lib/assets/highlight3.jpg';
  import highlight4 from '$lib/assets/highlight4.jpg';
  import highlight5 from '$lib/assets/highlight5.jpg';
  import highlight6 from '$lib/assets/highlight6.jpg';
  import highlight7 from '$lib/assets/highlight7.jpg';
  import highlight8 from '$lib/assets/highlight8.jpg';
  import highlight9 from '$lib/assets/highlight9.jpg';
  import highlight10 from '$lib/assets/highlight10.jpg';

  const highlights = [highlight1, highlight2, highlight3, highlight4, highlight5, highlight6, highlight7, highlight8, highlight9, highlight10];
</script>

<main class="max-w-6xl mx-auto px-6">
  <p class="text-4xl font-sans">College Through My Eyes</p>

  <p class="text-2xl font-sans mt-8">
    ⟢ A visual diary of my journey through software engineering, design, and product—capturing the small moments that made my college experience meaningful.
  </p>

  <div class="columns-1 sm:columns-2 md:columns-4 mt-10">
    {#each highlights as img}
      <img
        src={img}
        alt="College highlight"
        class="rounded w-full mb-5 hover:scale-[1.015] transition"
      />
    {/each}
  </div>
  
  
</main>
