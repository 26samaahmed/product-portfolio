<script>
  import AboutMeImage from '$lib/assets/about-me.png';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="min-h-screen flex flex-col text-[#000000] bg-[#FFFFFF] p-4 font-anaheim">

  <Header />
  <div class="w-full max-w-4xl m-auto">
      <p class="text-3xl font-anaheim mb-5 font-semibold">About Me</p>
      <p class="font-anaheim text-lg md:text-xl">
        I’m a senior at Cal State Fullerton majoring in Computer Science, where I’ve led 
        <span class="font-semibold">cross-functional teams</span>, co-directed FullyHacks 2025, and served as Web Lead for FullyBeyond 2024, our first student-run designathon. 
        This past summer, I worked as a 
        <span class="font-semibold">User Experience Researcher at LPL Financial</span>, 
        where I discovered how much I enjoy shaping products by connecting user insights with design and engineering decisions.
        <br>
        <br>
        What excites me most about product management is being involved in the full journey, from defining the problem to delivering solutions that make a real difference for users. I love collaborating with diverse teams, asking the right questions, and turning ideas into thoughtful, impactful products.
        <br>
        <br>
        I’m currently a 
        <span class="font-semibold">Web Design Intern at Titan Radio</span> and a 
        <span class="font-semibold">Figma Campus Leader</span>, where I host workshops and create resources to help students build confidence in design.
      </p>
  </div>

  <Footer />
</main>
