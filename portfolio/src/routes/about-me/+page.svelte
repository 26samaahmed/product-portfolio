<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />

  <div class="mx-auto w-full max-w-3xl flex-1 pt-14 pb-14">
    <h1 class="mb-8 text-4xl font-semibold tracking-tight md:text-5xl">
      About Me
    </h1>
    <div class="space-y-6 text-lg leading-relaxed text-neutral-800 md:text-xl">
      <p>
        I recently graduated from Cal State Fullerton with a degree in Computer
        Science, where I led
        <span class="font-semibold">cross-functional teams</span>, co-directed
        FullyHacks 2025, and served as Web Lead for FullyBeyond 2024, our first
        student-run designathon.
      </p>

      <p>
        This past summer, I worked as a
        <span class="font-semibold"
          >User Experience Researcher at LPL Financial</span
        >, where I explored how user insights can meaningfully shape product and
        design decisions. I’ll be joining LPL Financial full-time in July as a
        <span class="font-semibold">UX Researcher</span>, continuing to grow in
        product thinking and user-centered design.
      </p>

      <p>
        What excites me most about product and UX is being involved in the full
        journey—from understanding the problem to shaping solutions that
        genuinely improve user experiences. I love collaborating with diverse
        teams, asking the right questions, and turning insights into thoughtful,
        impactful products.
      </p>
    </div>
  </div>
  <Footer />
</main>
