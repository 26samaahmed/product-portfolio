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
        I’m a senior at Cal State Fullerton majoring in Computer Science, where I’ve had the opportunity to lead teams, 
        co-direct FullyHacks 2025, and serve as web lead for FullyBeyond 2024, our first student-run designathon. Beyond school, 
        I spent the summer as a User Experience Researcher at LPL Financial, where I discovered how much I enjoy shaping products
        by connecting user insights to design and engineering decisions.
     
        What excites me most about product management is being part of the entire journey — from defining a problem to seeing a solution make a difference for users. I love collaborating with diverse teams, 
        asking the right questions, and turning ideas into products that people actually enjoy using.
      </p>
  </div>

  <Footer />
</main>
