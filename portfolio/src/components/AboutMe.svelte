<script>
  import AboutMeImage from '$lib/assets/about-me.png';
</script>

<main>
  <p class="text-3xl font-sans">About Me</p>

  <div class="relative flex flex-col md:flex-row items-center md:items-start justify-between pt-12">


    <div class="relative w-80 h-96 flex-shrink-0">

      <div class="absolute top-2 left-2 w-full h-full bg-[#EAFAE3] rounded-sm -rotate-3 z-0"></div>
  

      <div class="relative w-80 h-96 border-2 shadow-lg rounded-sm -rotate-5 flex items-center justify-center hover:scale-[1.06] duration-500 z-10">
        <img src={AboutMeImage} alt="About Me" class="w-72 h-80 object-cover rounded-sm" />
      </div>
    </div>
  

    <p class="text-xl/10 font-sans w-full md:w-2/3 mt-8 md:mt-0 md:ml-12">
      I’m a senior at Cal State Fullerton majoring in Computer Science, where I’ve had the opportunity to lead teams, co-direct FullyHacks 2025, and serve as web lead for FullyBeyond 2024, our first student-run designathon. Beyond school, I spent the summer as a User Experience Researcher at LPL Financial, where I discovered how much I enjoy shaping products by <span class="bg-[#EAFAE3] rounded-full px-3 py-1 text-center whitespace-nowrap">connecting user insights to real design and engineering decisions.</span>
      What excites me most about product management is being part of the <span class="bg-[#EAFAE3] rounded-full px-3 py-1 text-center whitespace-nowrap">entire journey</span> — from defining a problem to seeing a solution make a difference for users. I love collaborating with diverse teams, <span class="bg-[#EAFAE3] rounded-full px-3 py-1 text-center whitespace-nowrap">asking the right questions</span>, and turning ideas into products that people actually enjoy using.
    </p>
    
  </div>

  <div class="flex justify-center">
    <a href="https://samahmed.info" target="_blank" class="text-2xl mt-12 border p-3 rounded hover:bg-[#EAFAE3] duration-500">Discover Technical & Creative Portfolios →</a>
  </div>

</main>