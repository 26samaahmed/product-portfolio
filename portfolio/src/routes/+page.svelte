<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const fullText =
		'I’m an aspiring product manager who builds user-centered products at the intersection of engineering, design, and strategy.';

	let displayedText = '';
	let index = 0;

	onMount(() => {
		const interval = setInterval(() => {
			displayedText += fullText[index];
			index++;

			if (index >= fullText.length) {
				clearInterval(interval);
			}
		}, 35); // typing speed (lower = faster)

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Sama Ahmed's Portfolio</title>
	<meta name="description" content="Sama Ahmed's Portfolio, 2026" />
	<meta name="keywords" content="Sama Ahmed, Computer Science, Cal State Fullerton" />
	<meta name="author" content="Sama Ahmed" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="font-anaheim flex min-h-screen flex-col bg-[#FAFAF8] p-4 pt-1 text-[#000000]">
	<Header />
	<div class="flex w-full flex-1 flex-col">
		<div class="m-auto w-full max-w-3xl text-center md:max-w-4xl">
			<h1 class="text-3xl md:mb-2 md:text-4xl">
				Welcome, I'm
				<span class="relative inline-block px-2">
					<span class="relative z-10">Sama Ahmed</span>

					<span
						class="absolute top-1/2 -right-4 -left-4 -z-0
                   h-8 -translate-y-1/2 rotate-[-2deg]
                   rounded-[60%_40%_55%_45%/50%_60%_40%_60%]
                   bg-[#CDE8DF]/80"
					></span>
				</span>
			</h1>

			<p class="mb-8 min-h-[3rem] text-lg/6 md:text-3xl">
				{displayedText}
				<span class="animate-pulse">|</span>
			</p>

			<div class="mt-6 flex justify-center gap-6">
				<a
					href="/about-me"
					class="group flex items-center gap-2 rounded-sm border border-black px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white"
				>
					<span class="transition-transform group-hover:-translate-x-1">←</span>
					About Me
				</a>

				<a
					href="/work"
					class="group flex items-center gap-2 rounded-sm border border-black px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white"
				>
					View My Work
					<span class="transition-transform group-hover:translate-x-1">→</span>
				</a>
			</div>
		</div>
	</div>

	<Footer />
</main>
