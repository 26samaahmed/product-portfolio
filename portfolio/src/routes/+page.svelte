<svelte:head>
  <title>Sama Ahmed's Portfolio</title>
  <meta name="description" content="Sama Ahmed's Portfolio, 2026" />
  <meta
    name="keywords"
    content="Sama Ahmed, Computer Science, Cal State Fullerton"
  />
  <meta name="author" content="Sama Ahmed" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<script lang="ts">
  import { onMount } from "svelte";
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const fullText = "I build user-centered products by aligning engineering, design, and strategy 𐔌՞ ܸ.ˬ.ܸ՞𐦯";

  let displayedText = "";
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

<main class="min-h-screen flex flex-col text-[#000000] bg-[#FFFFFF] p-4 font-anaheim">

  <Header/>
  <div class="flex-1 w-full flex flex-col">

    <div class="w-full max-w-4xl m-auto text-center">
      <h1 class="text-3xl md:text-4xl md:mb-2">
        Welcome, I'm
        <span class="relative inline-block px-2">
          <span class="relative z-10">Sama Ahmed</span>
        
          <span
            class="absolute -left-4 -right-4 top-1/2 -translate-y-1/2
                   h-8 bg-[#CDE8DF]/80 -z-0
                   rotate-[-2deg]
                   rounded-[60%_40%_55%_45%/50%_60%_40%_60%]"
          ></span>
        </span>
      </h1>
      

      <p class="text-xl/8 md:text-3xl mb-8 min-h-[3rem]">
        {displayedText}
        <span class="animate-pulse">|</span>
      </p>
      
      <div class="flex justify-center gap-6 mt-6">
        <a
          href="/about-me"
          class="group flex items-center gap-2 px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          <span class="transition-transform group-hover:-translate-x-1">←</span>
          About Me
        </a>
      
        <a
          href="/work"
          class="group flex items-center gap-2 px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          View My Work
          <span class="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </div>
  
  <Footer/>

</main>
