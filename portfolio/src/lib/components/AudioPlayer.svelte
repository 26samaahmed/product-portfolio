<script lang="ts">
  import type { AudioSegment } from '$lib/data/audioSegments';

  export let segment: AudioSegment;
  export let onPlay: (audioElement: HTMLAudioElement) => void;
  export let dark = false;

  let audioElement: HTMLAudioElement;
  let isPlaying = false;
  let currentTime = 0;
  let duration = 0;
  let isSeeking = false;

  async function togglePlay() {
    if (!audioElement) return;

    if (audioElement.paused) {
      onPlay(audioElement);

      try {
        await audioElement.play();
      } catch (error) {
        console.error('Unable to play audio:', error);
      }
    } else {
      audioElement.pause();
    }
  }

  function updateTime() {
    if (!isSeeking) {
      currentTime = audioElement.currentTime;
    }
  }

  function updateDuration() {
    duration = audioElement.duration;
  }

  function startSeeking() {
    isSeeking = true;
  }

  function seek(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    currentTime = Number(input.value);
  }

  function finishSeeking(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const time = Number(input.value);

    audioElement.currentTime = time;
    currentTime = time;
    isSeeking = false;
  }

  function formatTime(seconds: number) {
    if (!Number.isFinite(seconds)) return '0:00';

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${remainingSeconds}`;
  }
</script>

<div
  class="group border-t py-8 transition-colors duration-300
    {dark ? 'border-[#6A5050]' : 'border-[#DEDDD4]'}"
>
  <div class="flex gap-5 md:gap-8">
    <!-- Number -->
    <p class="pt-1 text-sm {dark ? 'text-[#C4CBAF]' : 'text-[#783D46]'}">
      {segment.number}
    </p>

    <!-- Content -->
    <div class="min-w-0 flex-1">
      <div
        class="flex flex-col justify-between gap-2 md:flex-row md:items-start"
      >
        <div>
          <h2
            class="text-xl font-medium tracking-tight md:text-2xl
              {dark ? 'text-[#F5F3ED]' : 'text-[#292B27]'}"
          >
            {segment.title}
          </h2>

          <p
            class="mt-1 text-sm italic
              {dark ? 'text-[#D4C0AD]' : 'text-[#725747]'}"
          >
            {segment.guest}
          </p>
        </div>

        <p class="text-sm {dark ? 'text-[#D4C0AD]' : 'text-[#77786F]'}">
          {segment.duration}
        </p>
      </div>

      <p
        class="mt-4 max-w-2xl text-sm leading-relaxed md:text-base
          {dark ? 'text-[#E9E3DA]' : 'text-[#4F504A]'}"
      >
        {segment.description}
      </p>

      <!-- Player -->
      <div class="mt-6 flex items-center gap-4">
        <button
          type="button"
          on:click={togglePlay}
          aria-label={isPlaying
            ? `Pause ${segment.title}`
            : `Play ${segment.title}`}
          class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-sm transition duration-200 hover:scale-105
            {dark
            ? 'bg-[#C4CBAF] text-[#422D2D] hover:bg-[#F5F3ED]'
            : 'bg-[#35483A] text-[#F5F3ED] hover:bg-[#783D46]'}"
        >
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>

        <div class="flex min-w-0 flex-1 items-center gap-3">
          <span
            class="w-9 text-right text-xs
              {dark ? 'text-[#D4C0AD]' : 'text-[#725747]'}"
          >
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            step="0.1"
            on:pointerdown={startSeeking}
            on:input={seek}
            on:change={finishSeeking}
            on:pointerup={finishSeeking}
            aria-label={`Seek through ${segment.title}`}
            class:dark-progress={dark}
            class="audio-progress min-w-0 flex-1"
          />

          <span
            class="w-9 text-xs
              {dark ? 'text-[#D4C0AD]' : 'text-[#725747]'}"
          >
            {duration ? formatTime(duration) : segment.duration}
          </span>
        </div>
      </div>

      <audio
        bind:this={audioElement}
        src={segment.audio}
        on:timeupdate={updateTime}
        on:loadedmetadata={updateDuration}
        on:play={() => (isPlaying = true)}
        on:pause={() => (isPlaying = false)}
        on:ended={() => {
          isPlaying = false;
          currentTime = 0;
          audioElement.currentTime = 0;
        }}
      ></audio>
    </div>
  </div>
</div>

<style>
  .audio-progress {
    appearance: none;
    height: 2px;
    border-radius: 999px;
    background: #deddd4;
    cursor: pointer;
  }

  .audio-progress.dark-progress {
    background: #6a5050;
  }

  .audio-progress::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #35483a;
    cursor: grab;
    transition: transform 0.2s ease;
  }

  .audio-progress.dark-progress::-webkit-slider-thumb {
    background: #c4cbaf;
  }

  .audio-progress::-webkit-slider-thumb:hover {
    transform: scale(1.25);
  }

  .audio-progress::-webkit-slider-thumb:active {
    cursor: grabbing;
    transform: scale(1.35);
  }

  .audio-progress::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 999px;
    background: #35483a;
    cursor: grab;
  }

  .audio-progress.dark-progress::-moz-range-thumb {
    background: #c4cbaf;
  }

  .audio-progress::-moz-range-thumb:active {
    cursor: grabbing;
  }
</style>
