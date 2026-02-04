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
  import highlight11 from '$lib/assets/highlight11.png';
  import highlight12 from '$lib/assets/highlight12.png';
  import highlight13 from '$lib/assets/highlight13.png';

  const highlights = [highlight1, highlight2, highlight3, highlight4, highlight5, highlight6, highlight7, highlight8, highlight9, highlight10, highlight11, highlight12, highlight13];
</script>

<main class="max-w-6xl mx-auto px-6 text-center">
  <p class="text-3xl md:text-4xl font-sans">College Through My Eyes</p>

  <p class="text-xl md:text-2xl font-sans mt-8">
    ⟢ A visual reflection on the friendships, memories, and everyday moments that made my college journey feel like home ⟢ 
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
