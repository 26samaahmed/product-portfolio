<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="min-h-screen flex flex-col text-[#000000] bg-[#FAFAF8] p-4 pt-1 font-anaheim">

  <Header />

  <div class="w-full max-w-4xl m-auto pt-10 pb-10">
    <p class="text-3xl font-anaheim mb-5 font-semibold">About Me</p>

    <p class="font-anaheim text-lg md:text-xl">
      I recently graduated from Cal State Fullerton with a degree in Computer Science, where I led 
      <span class="font-semibold">cross-functional teams</span>, co-directed FullyHacks 2025, and served as Web Lead for FullyBeyond 2024, our first student-run designathon. 

      <br><br>

      This past summer, I worked as a 
      <span class="font-semibold">User Experience Researcher at LPL Financial</span>, 
      where I explored how user insights can meaningfully shape product and design decisions.
      I’ll be joining LPL Financial full-time in July as a 
      <span class="font-semibold">UX Researcher</span>, continuing to grow in product thinking and user-centered design.

      <br><br>

      What excites me most about product and UX is being involved in the full journey—from understanding the problem to shaping solutions that genuinely improve user experiences. I love collaborating with diverse teams, asking the right questions, and turning insights into thoughtful, impactful products.
    </p>
  </div>

  <Footer />
</main>
