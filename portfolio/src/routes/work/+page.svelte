<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectList from '$lib/components/WorkList.svelte';
  import Tab from '$lib/components/Tab.svelte';

  import type { Project } from '$lib/types';

  const projects: (Project & { category: string })[] = [
    {
      title: 'Titan Radio',
      duration: '5 Months',
      role: 'Web Design Intern',
      preview:
        'How might we redesign Titan Radio’s digital presence to better engage students and improve content discoverability?',
      category: 'experience',
      caseStudyUrl: '/projects/titan-radio',
    },
    {
      title: 'LPL Financial',
      duration: '10 Weeks',
      role: 'UX Research Intern',
      preview:
        'How might we simplify communication workflows for financial advisors while making client interactions more intuitive and efficient?',
      category: 'experience',
      caseStudyUrl: '/projects/lpl-financial',
    },
    {
      title: 'Figma',
      duration: '5 Months',
      role: 'Campus Leader',
      preview:
        'How might we make design education and community-building more accessible to students interested in product design?',
      category: 'leadership',
      caseStudyUrl: '/projects/figma',
    },
    {
      title: 'FullyHacks',
      duration: '3 Years',
      role: 'Director & UI/UX Designer',
      preview:
        'How might we create a beginner-friendly hackathon experience while still supporting technical growth and innovation?',
      category: 'leadership',
      caseStudyUrl: '/projects/fullyhacks',
    },
    {
      title: 'Fliq.',
      duration: '6 Months',
      role: 'Team Lead + Frontend Developer',
      preview:
        'How might we recreate the nostalgic photo booth experience through real-time collaboration and playful interaction?',
      category: 'technical',
      caseStudyUrl: '/projects/fliq.',
    },
    {
      title: 'acmcsuf.com',
      duration: '1 year',
      role: 'Webmaster',
      preview:
        'How might we improve ACM’s online presence to better support students, events, and technical resources?',
      category: 'technical',
      caseStudyUrl: '/projects/acm',
    },
    {
      title: 'FullyBeyond',
      duration: '7 Months',
      role: 'Web Development Lead',
      preview:
        'How might we design a responsive event website that clearly communicates schedules, speakers, and registration details?',
      category: 'technical',
      caseStudyUrl: '/projects/fullybeyond',
    },
    {
      title: 'Aura',
      duration: '24 Hours',
      role: 'Designer',
      preview:
        'A mobile app that reimagines how deaf individuals experience music through visuals inspired by people with color synesthesia.',
      category: 'design',
      caseStudyUrl: '/projects/aura',
    },
    {
      title: 'Fish Tank',
      duration: '24 Hours',
      role: 'Designer',
      preview:
        'An AI-powered app that curates local events based on user interests and prompts to foster connection and well-being among college students.',
      category: 'design',
      caseStudyUrl: '/projects/fish-tank',
    },
    {
      title: 'E-GO',
      duration: '6 Hours',
      role: 'Designer',
      preview:
        'A mobile app that helps students find affordable, convenient transportation by integrating public transit options and rewarding sustainable travel.',
      category: 'design',
      caseStudyUrl: '/projects/ego',
    },
    {
      title: 'Titan Radio Segments',
      duration: '5 Months',
      role: 'Host',
      preview: 'Fun radio segments and conversations with my friends',
      category: 'audio',
      caseStudyUrl: '/projects/titan-radio-segments',
    },
  ];

  const categories = [
    { label: 'experience', value: 'experience' },
    { label: 'leadership', value: 'leadership' },
    { label: 'technical', value: 'technical' },
    { label: 'design', value: 'design' },
    { label: 'audio', value: 'audio' },
  ];

  let activeCategory = 'experience';

  $: filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );
</script>

<main
  class="font-portfolio flex min-h-screen flex-col bg-[#F5F3ED] p-4 pt-1 text-[#292B27]"
>
  <Header />

  <div class="mx-auto w-full max-w-4xl flex-1 pt-14 pb-14">
    <!-- Heading -->
    <div class="page-reveal">
      <h1
        class="flex items-center gap-2 text-4xl font-medium tracking-tight md:text-5xl"
      >
        My Work

        <span
          class="inline-flex text-lg text-[#783D46] md:text-xl"
          aria-hidden="true"
        >
          ✷
        </span>
      </h1>

      <p class="mt-2 text-sm italic text-[#725747] md:text-base">
        a mix of research, leadership, design, and things I've built
      </p>
    </div>

    <!-- Tabs -->
    <div class="page-reveal delay-1 mt-8 mb-10 flex flex-wrap gap-8">
      {#each categories as cat}
        <Tab
          label={cat.label}
          active={activeCategory === cat.value}
          onClick={() => (activeCategory = cat.value)}
        />
      {/each}
    </div>

    <!-- Projects -->
    <div class="page-reveal delay-2">
      {#key activeCategory}
        <ProjectList projects={filteredProjects} />
      {/key}
    </div>
  </div>

  <Footer />
</main>

<style>
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .page-reveal {
    opacity: 0;
    animation: fade-up 0.6s ease-out forwards;
  }

  .delay-1 {
    animation-delay: 0.1s;
  }

  .delay-2 {
    animation-delay: 0.2s;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-reveal {
      opacity: 1;
      animation: none;
    }
  }
</style>