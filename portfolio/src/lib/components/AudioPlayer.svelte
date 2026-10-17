<script lang="ts">
  import type { AudioSegment } from '$lib/data/audioSegments';

  export let segment: AudioSegment;
  export let onPlay: (audioElement: HTMLAudioElement) => void;

  let audioElement: HTMLAudioElement;
  let isPlaying = false;
  let currentTime = 0;
  let duration = 0;

  async function togglePlay() {
    if (!audioElement) return;

    if (audioElement.paused) {
      // Parent pauses any other audio that is currently playing
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
    currentTime = audioElement.currentTime;
  }

  function updateDuration() {
    duration = audioElement.duration;
  }

  function seek(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const time = Number(input.value);

    audioElement.currentTime = time;
    currentTime = time;
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

<div class="group py-7 transition-colors duration-300 md:py-8">
  <div class="flex gap-5 md:gap-8">
    <!-- Number -->
    <p class="pt-1 text-sm text-[#C4CBAF]">
      {segment.number}
    </p>

    <!-- Content -->
    <div class="min-w-0 flex-1">
      <div
        class="flex flex-col justify-between gap-2 md:flex-row md:items-start"
      >
        <div>
          <h2
            class="text-xl font-medium tracking-tight text-[#F5F3ED] md:text-2xl"
          >
            {segment.title}
          </h2>

          <p class="mt-1 text-sm italic text-[#D7C3B8]">
            {segment.guest}
          </p>
        </div>

        <p class="text-sm text-[#D7C3B8]">
          {segment.duration}
        </p>
      </div>

      <!-- Description -->
      <p
        class="mt-4 max-w-2xl text-sm leading-relaxed text-[#E7E1DA] md:text-base"
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
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C4CBAF] text-sm text-[#4B302E] transition duration-200 hover:scale-105 hover:bg-[#F5F3ED]"
        >
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>

        <div class="flex min-w-0 flex-1 items-center gap-3">
          <!-- Current time -->
          <span class="w-9 text-right text-xs text-[#D7C3B8]">
            {formatTime(currentTime)}
          </span>

          <!-- Progress bar -->
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            step="0.1"
            on:input={seek}
            aria-label={`Seek through ${segment.title}`}
            class="audio-progress min-w-0 flex-1"
          />

          <!-- Duration -->
          <span class="w-9 text-xs text-[#D7C3B8]">
            {duration ? formatTime(duration) : segment.duration}
          </span>
        </div>
      </div>

      <!-- Hidden audio element -->
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
    background: rgba(245, 243, 237, 0.22);
    cursor: pointer;
  }

  .audio-progress::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #c4cbaf;
    cursor: grab;
    transition: transform 0.2s ease;
  }

  .audio-progress::-webkit-slider-thumb:hover {
    transform: scale(1.25);
  }

  .audio-progress::-webkit-slider-thumb:active {
    cursor: grabbing;
  }

  .audio-progress::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 999px;
    background: #c4cbaf;
    cursor: grab;
  }

  .audio-progress::-moz-range-thumb:active {
    cursor: grabbing;
  }
</style>