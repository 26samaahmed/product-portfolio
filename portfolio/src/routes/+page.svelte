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

<script lang="ts">
  import NavBar from '../components/NavBar.svelte';
  import ProjectList from '../components/ProjectList.svelte';
  import type { Project, Button } from '$lib/types'
  import AboutMe from '../components/AboutMe.svelte';
  import placeholder from '$lib/assets/project1.png';
  import image1 from '$lib/assets/image1.jpg';
  import image2 from '$lib/assets/image2.jpg';



  let buttons: Button[] = [
    { name: 'Home', link: '#home' },
    { name: 'Work', link: '#work' },
    { name: 'Extras', link: '#extras' },
    { name: 'Contact', link: '#contact' },
  ];

  const projects: Project[] = [
    {
      title: 'FullyHacks 2025',
      project_duration: '9 Months',
      role: 'Co-Director',
      problem_statement:
        'How might we create an engaging and educational hackathon experience for students of all skill levels?',
      imageUrl: placeholder
    },
    {
      title: 'MyRepChat',
      project_duration: '10 Weeks',
      role: 'UX Researcher Intern',
      problem_statement:
        'How might we improve the user experience of financial advisors using our platform?',
      imageUrl: placeholder
    },
    {
      title: 'FullyBeyond 2024',
      project_duration: '7 Months',
      role: 'Web Lead & Co-Host',
      problem_statement:
        'How might we design a user-friendly website to showcase our designathon event and attract participants?',
      imageUrl: placeholder
    },
  ];

</script>

<main>
  <div class="text-[#FFFFFF] bg-[#000000] min-h-screen p-8">
    <NavBar {buttons} />

    <div class="flex flex-col md:flex-row items-center md:items-start justify-between pt-24 m-10">

      <div class="text-left space-y-8">
        <h1 class="text-8xl mb-4 font-heading">Welcome!</h1>
        <p class="text-4xl font-sans w-5/6">
          I’m Sama Ahmed, an <em class="text-[#4696fd]">aspiring product manager</em> passionate about building intuitive, user-centered products.
          With experience across tech, design, and user research, I bring both creativity and <em class="text-[#e775f8]">analytical thinking</em> to product development <span class="text-[#92fe8c]">☘︎ ݁˖</span>.
        </p>
      </div>


      <div class="relative md:w-1/2 flex justify-center pt-12 md:pt-0">
        <div class="w-64 h-80 border-2 shadow-lg flex items-center justify-center">
          <img src={image1} alt="Profile 1" class="w-48 h-64 object-cover" />
        </div>

        <div class="w-64 h-80 border-2 shadow-lg -ml-20 mt-16 flex items-center justify-center">
          <img src={image2} alt="Profile 2" class="w-48 h-64 object-cover" />
        </div>
      </div>
    </div>

    <div id="work" class="mt-44 m-10">
      <ProjectList {projects} />
    </div>

    <div id="extras" class="mt-44 m-10">
      <AboutMe />
    </div>

    <div id="extras" class="mt-44 m-10">
      <p class="text-5xl font-sans">[thinking of title for this]</p>
    </div>


  </div>
</main>

