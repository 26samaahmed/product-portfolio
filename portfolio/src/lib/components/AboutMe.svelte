<script>
  import AboutMeImage from '$lib/assets/about-me.png';
</script>

<main class="px-1 md:px-16">
  <p class="text-3xl md:text-4xl font-sans mb-8 text-center">More About Me</p>

  <div class="relative flex flex-col items-center md:flex-row md:items-start justify-center md:pt-12 md:gap-11">


    <div class="relative w-56 h-64 md:w-80 md:h-96 flex-shrink-0">
      <div class="absolute top-2 left-2 w-full h-full bg-[#105C42] rounded-sm rotate-3 z-0"></div>
      <div class="relative w-56 h-64 md:w-80 md:h-96 border-2 border-[#105C42] shadow-lg rounded-sm -rotate-3 flex items-center justify-center transition-transform duration-500 hover:scale-105 z-10">
        <img src={AboutMeImage} alt="About Me" class="w-full h-full object-cover rounded-sm" />
      </div>
    </div>

 
    <div class="flex flex-col max-w-2xl mt-8 md:mt-0">
      <p class="font-sans text-lg leading-8 md:text-xl md:leading-10 text-center">
        I’m a senior at Cal State Fullerton majoring in Computer Science, where I’ve had the opportunity to 
        <span class="bg-[#EAFAE3] rounded-full px-2 md:px-3 py-1">lead teams</span>, 
        co-direct <span class="bg-[#EAFAE3] text-wrap rounded-full px-2 md:px-3 py-1">FullyHacks 2025</span>, and serve as web lead for 
        <span class="bg-[#EAFAE3] text-wrap rounded-full px-2 md:px-3 py-1">FullyBeyond 2024</span>, our first student-run designathon. Beyond school, I spent the summer as a User Experience Researcher at LPL Financial, where I discovered how much I enjoy shaping products by 
        <span class="bg-[#EAFAE3] text-wrap rounded-full px-2 md:px-3 py-1">connecting user insights</span> to design and engineering decisions.
     
        What excites me most about product management is being part of the 
        <span class="bg-[#EAFAE3] text-wrap rounded-full px-2 md:px-3 py-1">entire journey</span> — from defining a problem to seeing a solution make a difference for users. I love collaborating with diverse teams, 
        <span class="bg-[#EAFAE3] text-wrap rounded-full px-2 md:px-3 py-1">asking the right questions</span>, and turning ideas into products that people actually enjoy using.
      </p>

      <a href="/old"
         target="_blank"
         class="mt-8 md:mt-12 text-md md:text-xl md:text-2xl px-4 py-2 md:px-8 md:py-3 border border-gray-400 rounded-lg text-center hover:bg-[#EAFAE3] transition-colors duration-500 w-full md:w-auto shadow-sm hover:shadow-md">
        Discover Technical & Creative Portfolios →
      </a>
    </div>

  </div>
</main>
