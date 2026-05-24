<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectList from '$lib/components/WorkList.svelte';
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
    'experience',
    'leadership',
    'technical',
    'design',
    'audio',
  ] as const;
  let activeCategory = 'experience';

  $: filteredProjects = projects.filter((p) => p.category === activeCategory);
</script>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />

  <div class="mx-auto w-full max-w-4xl flex-1 pt-14 pb-14">
    <h1 class="mb-2 text-4xl font-medium tracking-tight md:text-5xl">
      My Work
    </h1>

    <p class="mb-5 text-base text-neutral-500">
      Viewing
      <span class="font-medium text-black capitalize">
        {activeCategory}
      </span>
    </p>

    <div class="mb-10 flex flex-wrap gap-8">
      {#each categories as cat}
        <button
          on:click={() => (activeCategory = cat)}
          class="relative pb-1 text-base capitalize transition-all duration-200
					{activeCategory === cat ? 'text-black' : 'text-neutral-500 hover:text-black'}"
        >
          <span
            class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-black transition-transform duration-300 ease-out"
            class:scale-x-100={activeCategory === cat}
            class:scale-x-0={activeCategory !== cat}
          ></span>

          {cat}
        </button>
      {/each}
    </div>

    <div class="transition-all duration-300">
      <ProjectList projects={filteredProjects} />
    </div>
  </div>

  <Footer />
</main>
