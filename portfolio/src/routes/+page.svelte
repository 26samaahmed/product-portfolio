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
  <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=Ephesis&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import NavBar from '../components/NavBar.svelte';
  import ProjectList from '../components/ProjectList.svelte';
  import type { Project, Button, BucketListItem } from '$lib/types'
  import AboutMe from '../components/AboutMe.svelte';
  import Photos from '../components/Photos.svelte';


  import project1 from '$lib/assets/project1.png';
  import project2 from '$lib/assets/project2.png';
  import project3 from '$lib/assets/project3.png';
  import placeholder from '$lib/assets/placeholder.png';
  import Resume from '$lib/assets/Sama_Ahmed_Resume.pdf';



  const buttons: Button[] = [
    { name: 'Work', link: '#work' },
    { name: 'About', link: '#about' },
    { name: 'Extras', link: '#extras' },
    { name: 'Contact', link: 'ssama5336@gmail.com' }
  ];

  const projects: Project[] = [
  {
    title: 'MyRepChat',
    project_duration: '10 Weeks',
    role: 'UX Researcher Intern',
    problem_statement:
      'How might we improve the usability of a communication platform for financial advisors by identifying pain points and streamlining client interactions?',
    imageUrl: placeholder,
    tags: ['User Research', 'Data Analysis', 'Usability Testing']
  },
  {
    title: 'FullyHacks 2025',
    project_duration: '9 Months',
    role: 'Co-Director',
    problem_statement:
      'How might we design a hackathon that feels welcoming to beginners while still offering advanced challenges, workshops, and mentorship for experienced participants?',
    imageUrl: placeholder,
    tags: ['Event Planning', 'Team Leadership', 'Community Building']
  },
  {
    title: 'FullyBeyond 2024',
    project_duration: '7 Months',
    role: 'Web Lead & Co-Host',
    problem_statement:
      'How might we build a responsive, user-friendly website that communicates event details clearly while attracting participants and sponsors to our designathon?',
    imageUrl: placeholder,
    tags: ['Web Development', 'UI/UX Design', 'Collaboration']
  }
];


</script>

<main>
  <div class="text-[#105C42] bg-[#CDD9C9] min-h-screen p-10">
    <NavBar {buttons} />

    <div class="w-full flex flex-col items-center pt-36 pb-36 text-center">
      <div class="w-full max-w-4xl">
        <h1 class="text-5xl mb-6 font-sans">Welcome!</h1>
    
        <p class="text-3xl font-sans mb-8">
          I’m Sama Ahmed, an
          <span class="text-xl bg-[#EAFAE3] rounded-full px-3 py-1 whitespace-nowrap">
            aspiring product manager
          </span>
          passionate about building intuitive, user-centered products.
          With experience across tech, design, and user research, I bring both creativity and
          analytical thinking to product development ⟡
        </p>
    

        <a href={Resume} target="_blank" 
           class="px-6 py-2 text-xl rounded-md border border-[#105C42] hover:bg-[#EAFAE3] duration-500">
          View Resume
        </a>
      </div>
    </div>
    
  
    <!--
    <div id="work" class="m-36">
      <ProjectList {projects} />
    </div>
    -->

    <div id="about" class="m-36">
      <AboutMe />
    </div>

    <div id="extras" class="m-36">
      <Photos />
    </div>

    
  </div>
</main>

