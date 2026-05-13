<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProjectList from '$lib/components/WorkList.svelte';
	import type { Project } from '$lib/types';

	const projects: (Project & { category: string })[] = [
		{
			title: 'LPL Financial',
			duration: '10 Weeks',
			role: 'UX Research Intern',
			preview:
				'How might we simplify communication workflows for financial advisors while making client interactions more intuitive and efficient?',
			category: 'experience',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Titan Radio',
			duration: '5 Months',
			role: 'Web Design Intern',
			preview:
				'How might we redesign Titan Radio’s digital presence to better engage students and improve content discoverability?',
			category: 'experience',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Figma',
			duration: '5 Months',
			role: 'Campus Leader',
			preview:
				'How might we make design education and community-building more accessible to students interested in product design?',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'FullyHacks 2025',
			duration: '9 Months',
			role: 'Director',
			preview:
				'How might we create a beginner-friendly hackathon experience while still supporting technical growth and innovation?',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'ACM at CSUF',
			duration: '12 Months',
			role: 'Webmaster',
			preview:
				'How might we improve ACM’s online presence to better support students, events, and technical resources?',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'FullyBeyond 2024',
			duration: '7 Months',
			role: 'Web Development Lead',
			preview:
				'How might we design a responsive event website that clearly communicates schedules, speakers, and registration details?',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Fliq.',
			duration: 'Ongoing',
			role: 'Team Lead + Frontend Dev',
			preview:
				'How might we recreate the nostalgic photo booth experience through real-time collaboration and playful interaction?',
			category: 'technical',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Aura',
			duration: '24 Hours',
			role: 'Designer',
			preview:
				'A mobile app that reimagines how deaf individuals experience music through visuals inspired by people with color synesthesia.',
			category: 'design',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Fish Tank',
			duration: '24 Hours',
			role: 'Designer',
			preview:
				'An AI-powered app that curates local events based on user interests and prompts to foster connection and well-being among college students.',
			category: 'design',
			caseStudyUrl: '/projects'
		},
		{
			title: 'E-GO',
			duration: '6 Hours',
			role: 'Designer',
			preview:
				'A mobile app that helps students find affordable, convenient transportation by integrating public transit options and rewarding sustainable travel.',
			category: 'design',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Titan Radio Segments',
			duration: '5 Months',
			role: 'Host',
			preview:
				'Fun radio segments and conversations with my friends',
			category: 'audio',
			caseStudyUrl: '/projects'
		}
	];

	const categories = ['experience', 'leadership', 'technical', 'design', 'audio'] as const;
	let activeCategory = 'experience';

	$: filteredProjects = projects.filter((p) => p.category === activeCategory);
</script>

<main class="font-anaheim flex min-h-screen flex-col bg-[#FAFAF8] p-4 pt-1 text-[#000000]">
	<Header />

	<div class="mx-auto w-full max-w-4xl flex-1 pt-10 pb-10">
		<!-- TITLE -->
		<h1 class="mb-2 text-3xl font-semibold tracking-tight">
			My Work
		</h1>
	
		<p class="mb-5 text-sm text-neutral-400">
			Viewing
			<span class="font-medium capitalize text-black">
				{activeCategory}
			</span>
		</p>
	
		<!-- FILTERS -->
		<div class="mb-10 flex flex-wrap gap-8">
			{#each categories as cat}
				<button
					on:click={() => (activeCategory = cat)}
					class="relative pb-1 text-sm capitalize transition-all duration-200
					{activeCategory === cat
						? 'text-black'
						: 'text-neutral-500 hover:text-black'}"
				>
					<span
						class="absolute left-0 -bottom-1 h-[1.5px] w-full origin-left bg-black transition-transform duration-300 ease-out"
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
