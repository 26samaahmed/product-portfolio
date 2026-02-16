<svelte:head>
  <title>Sama Ahmed's Portfolio</title>
  <meta name="description" content="Sama Ahmed's Portfolio, 2026" />
  <meta
    name="keywords"
    content="Sama Ahmed, Computer Science, Cal State Fullerton"
  />
  <meta name="author" content="sama ahmed" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<script lang="ts">
  import type { Project, Button, BucketListItem } from '$lib/types'
  import ProjectList from '$lib/components/ProjectList.svelte';
  import AboutMe from '$lib/components/AboutMe.svelte';
  import Photos from '$lib/components/Photos.svelte';
  import Footer from '$lib/components/Footer.svelte';


  import project1 from '$lib/assets/project1.png';
  import project2 from '$lib/assets/project2.png';
  import project3 from '$lib/assets/project3.png';
  import Resume from '$lib/assets/Sama_Ahmed_Resume.pdf';



  const paths: Button[] = [
    { name: 'Resume', link: 'Resume' },
    { name: 'Email', link: 'ssama5336@gmail.com' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/sama-ahmedd/' },
    { name: 'Github', link: 'https://github.com/26samaahmed' },
    { name: 'Gallery', link: '/design-gallery'}
  ];

  const projects: Project[] = [
  {
    title: 'MyRepChat',
    duration: '10 Weeks',
    role: 'UX Researcher Intern',
    problem_statement:
      'How might we improve the usability of a communication platform for financial advisors by identifying pain points and streamlining client interactions?',
    tags: ['User Research', 'Data Analysis', 'Usability Testing'],
    casestudyUrl: "/casestudy/myrepchat"
  },
  {
    title: 'FullyHacks 2025',
    duration: '9 Months',
    role: 'Co-Director',
    problem_statement:
      'How might we design a hackathon that feels welcoming to beginners while still offering advanced challenges, workshops, and mentorship for experienced participants?',
    tags: ['Event Planning', 'Team Leadership', 'Community Building'],
    casestudyUrl: "/casestudy/fullyhacks2025"
  },
  {
    title: 'FullyBeyond 2024',
    duration: '7 Months',
    role: 'Web Lead & Co-Host',
    problem_statement:
      'How might we build a responsive, user-friendly website that communicates event details clearly while attracting participants and sponsors to our designathon?',
    tags: ['Web Development', 'UI/UX Design', 'Collaboration'],
    casestudyUrl: "/casestudy/fullybeyond2024"
  }
];

</script>

<main>
  <div class="text-[#000000] bg-[#FFFFFF] min-h-screen p-8 md:p-10 font-anaheim">

    <div class="w-full flex flex-col">

      <div class="pb-5">
        <!-- About me button-->
        <a href="#about-me" class="text-md md:text-lg px-3 py-1 border border-black-400 rounded-sm text-center hover:bg-[#EAFAE3] transition-colors duration-500 shadow-sm hover:shadow-md">
          About Me →
        </a>
      </div>

      <div class="w-full max-w-4xl">
        <h1 class="text-3xl md:text-3xl md:mb-2">Welcome, I'm Sama Ahmed</h1>
    
        <p class="text-xl/8 md:text-2xl mb-8">
          I build user-centered products by aligning engineering, design, and strategy
        </p>
      </div>
    </div>
    
  <div class="pt-20 md:pt-36">
    <Footer paths={paths} />
  </div>

</main>

