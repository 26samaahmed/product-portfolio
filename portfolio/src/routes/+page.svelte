<svelte:head>
  <title>Sama Ahmed's Portfolio</title>
  <meta name="description" content="Sama Ahmed's Portfolio, 2025" />
  <meta
    name="keywords"
    content="Sama Ahmed, Computer Science, Cal State Fullerton"
  />
  <meta name="author" content="sama ahmed" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&family=Ephesis&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import NavBar from '../components/NavBar.svelte';
  import ProjectPreview from '../components/ProjectPreview.svelte';
  let buttons = [
    { name: 'Home', link: '#home' },
    { name: 'Work', link: '#work' },
    { name: 'Extras', link: '#extras' },
    { name: 'Contact', link: '#contact' },
  ];
</script>

<div class="text-[#000000] bg-[#FFFFFF] min-h-screen p-8">
  <NavBar {buttons} />

  <div class="flex flex-col md:flex-row items-center md:items-start justify-between pt-24 m-10">

    <div class="text-left space-y-8">
      <h1 class="text-8xl mb-4 font-heading">Welcome!</h1>
      <p class="text-4xl font-sans w-5/6">
        I’m Sama Ahmed, an <em>aspiring product manager</em> passionate about building intuitive, user-centered products.
        With experience across tech, design, and user research, I bring both creativity and <em>analytical thinking</em> to product development .☘︎ ݁˖
      </p>
    </div>


    <div class="relative md:w-1/2 flex justify-center pt-12 md:pt-0">
      <div class="w-64 h-80 border-2 shadow-lg"></div>
      <div class="w-64 h-80 border-2 shadow-lg -ml-20 mt-16"></div>
    </div>
  </div>

  <div id="work" class="mt-44 m-10">
    <p class="text-5xl font-sans">Case Studies</p>
    <ProjectPreview />
    <!--  Have a previous and next button for projects transition  `-->
    <p class="text-2xl mt-6 inline-block relative"> ← Previous Project </p>
    <p class="text-2xl mt-6 inline-block relative float-right"> Next Project → </p>
  </div>

  <div id="extras" class="mt-44 m-10">
    <p class="text-5xl font-sans">About Me</p>

    <div class="flex flex-col md:flex-row items-center md:items-start justify-between pt-12">
    <div class="w-80 h-96 border-2 shadow-lg -rotate-5"></div>
    <p class="text-3xl leading-relaxed font-sans w-2/3">
      I’m a senior at Cal State Fullerton majoring in Computer Science, where I’ve had the opportunity to lead teams, co-direct FullyHacks 2025, and serve as web lead for FullyBeyond 2024, our first student-run designathon. Beyond school, I spent the summer as a User Experience Researcher at LPL Financial, where I discovered how much I enjoy <em>shaping products by connecting user insights to real design and engineering decisions</em>.
      What excites me most about product management is being part of the <em>entire journey</em> — from defining a problem to seeing a solution make a difference for users. I love collaborating with diverse teams, <em>asking the right questions</em>, and turning ideas into products that people actually enjoy using.
    </p>
    </div>
    <p class="text-2xl mt-6 inline-block relative float-right">Discover Technical & Creative Portfolio →</p>
    
  </div>


</div>

