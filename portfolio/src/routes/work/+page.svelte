<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';

  import type { Project } from '$lib/types';

  const projects: Project[] = [
  {
    title: 'MyRepChat',
    duration: '10 Weeks',
    role: 'User Experience Research Intern',
    impact: 'Impact 1',
    preview: 'How might we improve the usability of a communication platform for financial advisors by identifying pain points and streamlining client interactions?',
    tags: ['User Research', 'Data Analysis', 'Usability Testing'],
    caseStudyUrl: "/casestudy/myrepchat"
  },
  {
    title: 'FullyHacks 2025',
    duration: '9 months',
    role: 'Director',
    impact: 'Impact 2',
    preview: 'How might we design a hackathon that feels welcoming to beginners while still offering advanced challenges, workshops, and mentorship for experienced participants?',
    tags: ['Event Planning', 'Team Leadership', 'Community Building'],
    caseStudyUrl: "/casestudy/project2"
  },
  {
    title: 'FullyBeyond 2024',
    duration: '7 months',
    role: 'Web Development Lead',
    impact: 'Impact 3',
    preview: 'How might we build a responsive, user-friendly website that communicates event details clearly while attracting participants and sponsors to our designathon?',
    tags: ['Web Development', 'UI/UX Design', 'Collaboration'],
    caseStudyUrl: "/casestudy/project3"
  }
];

</script>

<main class="min-h-screen flex flex-col text-[#000000] bg-[#FFFFFF] p-4 font-anaheim">
  <Header />
  <div class="w-full max-w-4xl m-auto">
      <p class="text-3xl font-anaheim mb-5 font-semibold">My Work</p>
      <ProjectList {projects} />
  </div>

  <Footer />
</main>
