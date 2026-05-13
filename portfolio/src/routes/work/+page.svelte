<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import type { Project } from '$lib/types';

	const projects: (Project & { category: string })[] = [
		{
			title: 'UX Research at LPL Financial',
			duration: '10 Weeks',
			role: 'Intern',
			impact: 'Impact 1',
			preview:
				'How might we improve the usability of a communication platform for financial advisors by identifying pain points and streamlining client interactions?',
			category: 'experience',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Web Design Intern at Titan Radio',
			duration: '5 Months',
			role: 'Intern',
			impact: 'Impact 1',
			preview:
				'How might we improve the usability of a communication platform for financial advisors by identifying pain points and streamlining client interactions?',
			category: 'experience',
			caseStudyUrl: '/projects'
		},
		{
			title: 'FullyHacks 2025',
			duration: '9 months',
			role: 'Director',
			impact: 'Impact 2',
			preview:
				'How might we design a hackathon that feels welcoming to beginners while still offering advanced challenges, workshops, and mentorship?',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'FullyBeyond 2024',
			duration: '7 months',
			role: 'Web Development Lead',
			impact: 'Impact 3',
			preview:
				'How might we build a responsive, user-friendly website that communicates event details clearly while attracting participants and sponsors?',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Titan Radio Segments',
			duration: '5 Months',
			role: 'Host',
			impact: 'Audio Content',
			preview:
				'Recorded radio segments with friends covering campus life, interviews, and casual conversations.',
			category: 'audio',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Figma Campus Leader',
			duration: '5 Months',
			role: 'Leader',
			impact: 'Impact 4',
			preview:
				'Hosted workshops and created resources to help students build confidence in design.',
			category: 'leadership',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Fliq.',
			duration: 'Ongoing',
			role: 'Team Lead + Frontend Dev',
			impact: 'Impact 5',
			preview:
				'Passion projects where I explore design challenges and create solutions for fun and learning.',
			category: 'technical',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Design Gallery',
			duration: 'Ongoing',
			role: 'Creator',
			impact: 'Impact 6',
			preview:
				'An online collection of my design work, including case studies, UI experiments, and more.',
			category: 'design',
			caseStudyUrl: 'https://design-gallery.samahmed.info/'
		},
		{
			title: 'Aura',
			duration: '24 Hours',
			role: 'Designer',
			impact: 'Top 15 Finalists in CreateSC 2024',
			preview:
				'A mobile app that uses AI to generate personalized mindfulness exercises based on user input and preferences.',
			category: 'design',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Fish Tank',
			duration: '24 Hours',
			role: 'Designer',
			impact: 'Impact',
			preview:
				'A mobile app that uses AI to generate personalized mindfulness exercises based on user input and preferences.',
			category: 'design',
			caseStudyUrl: '/projects'
		},
		{
			title: 'E-GO',
			duration: '6 Hours',
			role: 'Designer',
			impact: 'Impact',
			preview:
				'A mobile app that uses AI to generate personalized mindfulness exercises based on user input and preferences.',
			category: 'design',
			caseStudyUrl: '/projects'
		},
		{
			title: 'Webmaster',
			duration: '12 months',
			role: 'Website Maintainer',
			impact: 'Impact',
			preview:
				'A mobile app that uses AI to generate personalized mindfulness exercises based on user input and preferences.',
			category: 'leadership',
			caseStudyUrl: '/projects'
		}
	];

	const categories = ['experience', 'leadership', 'technical', 'design', 'audio'] as const;
	let activeCategory = 'experience';

	$: filteredProjects = projects.filter((p) => p.category === activeCategory);
</script>

<main class="font-anaheim flex min-h-screen flex-col bg-[#FAFAF8] px-5 text-[#111111] md:px-10">
	<Header />

	<div class="mx-auto w-full max-w-4xl flex-1 pt-10 pb-10">
		<!-- TITLE -->
		<p class="mb-6 text-3xl font-semibold">My Work</p>

		<p class="mb-3 text-sm text-neutral-400">
			Viewing <span class="font-medium text-black">{activeCategory}</span>
		</p>
		<!-- FILTERS -->
		<div class="mb-8 flex flex-wrap gap-2">
			{#each categories as cat}
				<button
					on:click={() => (activeCategory = cat)}
					class="relative px-4 py-2 text-sm transition-all duration-200
{activeCategory === cat ? 'text-black' : 'text-neutral-500 hover:text-black'}"
				>
					<span
						class="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-black transition-transform duration-300 ease-out"
						class:scale-x-100={activeCategory === cat}
						class:scale-x-0={activeCategory !== cat}
					></span>

					{cat}
				</button>
			{/each}
		</div>
		<div class="opacity-100 transition-all duration-300">
			<ProjectList projects={filteredProjects} />
		</div>
	</div>

	<Footer />
</main>
