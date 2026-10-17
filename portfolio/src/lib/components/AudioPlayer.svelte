<script lang="ts">
  import type { AudioSegment } from '$lib/data/audioSegments';

  let {
    segment,
    onPlay,
  }: {
    segment: AudioSegment;
    onPlay: (audioElement: HTMLAudioElement) => void;
  } = $props();

  let audioElement: HTMLAudioElement;

  let isPlaying = $state(false);
  let currentTime = $state(0);
  let duration = $state(0);

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
    currentTime = audioElement.currentTime;
  }

  function updateDuration() {
    if (Number.isFinite(audioElement.duration)) {
      duration = audioElement.duration;
    }
  }

  function seek() {
    if (!audioElement) return;

    audioElement.currentTime = currentTime;
  }

  function handlePlay() {
    isPlaying = true;
  }

  function handlePause() {
    isPlaying = false;
  }

  function handleEnded() {
    isPlaying = false;
    currentTime = 0;
    audioElement.currentTime = 0;
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
  class="group border-t border-[#DEDDD4] py-8 transition-colors duration-300"
>
  <div class="flex gap-5 md:gap-8">
    <!-- Number -->
    <p class="pt-1 text-sm text-[#783D46]">
      {segment.number}
    </p>

    <!-- Content -->
    <div class="min-w-0 flex-1">
      <div
        class="flex flex-col justify-between gap-2 md:flex-row md:items-start"
      >
        <div>
          <h2
            class="text-xl font-medium tracking-tight text-[#292B27] md:text-2xl"
          >
            {segment.title}
          </h2>

          <p class="mt-1 text-sm italic text-[#725747]">
            {segment.guest}
          </p>
        </div>

        <p class="text-sm text-[#77786F]">
          {segment.duration}
        </p>
      </div>

      <!-- Description -->
      <p
        class="mt-4 max-w-2xl text-sm leading-relaxed text-[#4F504A] md:text-base"
      >
        {segment.description}
      </p>

      <!-- Player -->
      <div class="mt-6 flex items-center gap-4">
        <!-- Play / Pause -->
        <button
          type="button"
          onclick={togglePlay}
          aria-label={isPlaying
            ? `Pause ${segment.title}`
            : `Play ${segment.title}`}
          class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#35483A] text-sm text-[#F5F3ED] transition duration-200 hover:scale-105 hover:bg-[#783D46]"
        >
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>

        <!-- Progress -->
        <div class="flex min-w-0 flex-1 items-center gap-3">
          <span class="w-9 text-right text-xs text-[#725747]">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            bind:value={currentTime}
            oninput={seek}
            aria-label={`Seek through ${segment.title}`}
            class="audio-progress min-w-0 flex-1"
            style={`--progress: ${
              duration > 0 ? (currentTime / duration) * 100 : 0
            }%`}
          />

          <span class="w-9 text-xs text-[#725747]">
            {duration ? formatTime(duration) : segment.duration}
          </span>
        </div>
      </div>

      <!-- Actual audio -->
      <audio
        bind:this={audioElement}
        src={segment.audio}
        preload="metadata"
        ontimeupdate={updateTime}
        onloadedmetadata={updateDuration}
        ondurationchange={updateDuration}
        onplay={handlePlay}
        onpause={handlePause}
        onended={handleEnded}
      ></audio>
    </div>
  </div>
</div>

<style>
  .audio-progress {
    appearance: none;
    -webkit-appearance: none;

    height: 3px;
    border-radius: 999px;

    background: linear-gradient(
      to right,
      #35483a 0%,
      #35483a var(--progress),
      #deddd4 var(--progress),
      #deddd4 100%
    );

    cursor: pointer;
  }

  .audio-progress::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;

    width: 12px;
    height: 12px;

    border-radius: 999px;
    background: #35483a;

    cursor: grab;

    transition:
      transform 0.2s ease,
      background 0.2s ease;
  }

  .audio-progress::-webkit-slider-thumb:hover {
    transform: scale(1.25);
    background: #783d46;
  }

  .audio-progress::-webkit-slider-thumb:active {
    cursor: grabbing;
    transform: scale(1.35);
  }

  .audio-progress::-moz-range-thumb {
    width: 12px;
    height: 12px;

    border: none;
    border-radius: 999px;

    background: #35483a;
    cursor: grab;
  }

  .audio-progress::-moz-range-thumb:active {
    cursor: grabbing;
  }
</style>
