<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let selected = 'career';
</script>

<main
  class="font-anaheim flex min-h-screen flex-col bg-[#F7F6F2] p-4 pt-1 text-neutral-900"
>
  <Header />

  <div class="mx-auto w-full max-w-3xl flex-1 pt-14 pb-14">
    <h1 class="mb-8 text-4xl font-medium tracking-tight md:text-5xl">About</h1>

    <div class="mb-10 flex flex-wrap gap-8">
      <button
        on:click={() => (selected = 'career')}
        class="relative pb-1 text-base transition-all duration-200
        {selected === 'career'
          ? 'text-black'
          : 'text-neutral-500 hover:text-black'}"
      >
        <span
          class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-black transition-transform duration-300 ease-out"
          class:scale-x-100={selected === 'career'}
          class:scale-x-0={selected !== 'career'}
        ></span>

        career
      </button>

      <button
        on:click={() => (selected = 'now')}
        class="relative pb-1 text-base transition-all duration-200
        {selected === 'now'
          ? 'text-black'
          : 'text-neutral-500 hover:text-black'}"
      >
        <span
          class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-black transition-transform duration-300 ease-out"
          class:scale-x-100={selected === 'now'}
          class:scale-x-0={selected !== 'now'}
        ></span>

        now
      </button>

      <button
        on:click={() => (selected = 'someday')}
        class="relative pb-1 text-base transition-all duration-200
        {selected === 'someday'
          ? 'text-black'
          : 'text-neutral-500 hover:text-black'}"
      >
        <span
          class="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left bg-black transition-transform duration-300 ease-out"
          class:scale-x-100={selected === 'someday'}
          class:scale-x-0={selected !== 'someday'}
        ></span>

        someday
      </button>
    </div>

    <div
      class="min-h-[360px] text-lg leading-relaxed text-neutral-800 md:text-xl"
    >
      {#if selected === 'career'}
        <div class="space-y-6">
          <p>
            I recently graduated from Cal State Fullerton with a degree in
            Computer Science, where I led
            <span class="font-semibold">cross-functional teams</span>,
            co-directed FullyHacks 2025, and served as Web Lead for FullyBeyond
            2024, our first student-run designathon.
          </p>

          <p>
            In Summer 2025, I worked as a
            <span class="font-semibold">
              User Experience Researcher at LPL Financial
            </span>, where I explored how user insights can meaningfully shape
            product and design decisions. I'll be joining LPL Financial
            full-time in July as a
            <span class="font-semibold">UX Researcher</span>, continuing to grow
            in product thinking and user-centered design.
          </p>

          <p>
            What excites me most about product and UX is being involved in the
            full journey—from understanding the problem to shaping solutions
            that genuinely improve user experiences. I love collaborating with
            diverse teams, asking the right questions, and turning insights into
            thoughtful, impactful products.
          </p>
        </div>
      {:else if selected === 'now'}
        <div class="space-y-6">
          <p>
            Outside of work, I'm usually planning my next trip, listening to
            music, or picking up a new creative hobby. Lately that's been
            learning DaVinci Resolve, experimenting with Adobe Illustrator, and
            trying to be more creative outside of research and design.
          </p>

          <p>
            A lot of my daily life revolves around music I replay too much,
            K-dramas I find through TikTok edits, and shows I randomly get
            attached to for no reason.
          </p>

          <p>
            I’ve also somehow become a collector of all things Miffy. It started
            with a small Miffy lamp and slowly turned into a collection of
            things I definitely did not need but bought anyway.
          </p>

          <p>
            More than anything, I like trying new things and finding new
            interests. If something sounds fun, there’s a pretty good chance
            I’ll eventually try it. I’m slowly practicing the art of patience
            and trusting the process.
          </p>
        </div>
      {:else}
        <div class="space-y-6">
          <p>
            I have a long list of things I want to try someday, even if I have
            no idea how to do them right now.
          </p>

          <p>
            I want to write a song even though I don’t know how to sing or play
            an instrument. I do own a guitar I got for my 20th birthday though,
            so maybe that’s a start.
          </p>

          <p>
            I'd love to direct a movie someday despite knowing nothing about
            filmmaking. I’ve always been drawn to storytelling — even back in
            high school when I used to read books, I would automatically “see”
            them like movies in my head. I’d imagine faces for characters, build
            scenes visually, and basically direct the story as I read. I always
            thought that was fascinating.
          </p>

          <p>
            I also hope to retire in my 30s. Is it realistic? Probably not. Am I
            still going to try? Absolutely. I'd love to travel more, create
            something that reaches millions of people, and maybe settle
            somewhere in the countryside of Korea or Japan one day.
          </p>
        </div>
      {/if}
    </div>
  </div>

  <Footer />
</main>
