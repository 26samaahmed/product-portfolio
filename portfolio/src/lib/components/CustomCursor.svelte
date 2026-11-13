<script lang="ts">
  import { onMount } from 'svelte';

  let cursor: HTMLDivElement;
  let ring: HTMLDivElement;

  let visible = false;
  let hovering = false;
  let overLight = false;
  let enabled = false;

  type Particle = {
    id: number;
    x: number;
    y: number;
    dark: boolean;
  };

  let particles: Particle[] = [];
  let nextId = 0;

  // Tiny stardust dots around the cursor
  const dust = [
    { x: -18, y: -15, size: 3, delay: 0 },
    { x: 19, y: -11, size: 2, delay: 0.4 },
    { x: -15, y: 17, size: 2, delay: 0.8 },
    { x: 17, y: 16, size: 3, delay: 0.2 },
  ];

  onMount(() => {
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!pointer.matches || reducedMotion.matches) return;

    enabled = true;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrame: number;

    const timeouts = new Set<number>();

    const clickableSelector =
      'a, button, input, textarea, select, [role="button"]';

    function isLightBackground(element: Element): boolean {
      let current: Element | null = element;

      while (current) {
        const background = window.getComputedStyle(current).backgroundColor;

        const match = background.match(/rgba?\(([^)]+)\)/);

        if (match) {
          const values = match[1]
            .split(/[,\s/]+/)
            .filter(Boolean)
            .map(Number);

          const [r, g, b] = values;
          const alpha = values[3] ?? 1;

          if (alpha > 0.5) {
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;

            return brightness > 150;
          }
        }

        current = current.parentElement;
      }

      return false;
    }

    function updateHover(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        hovering = false;
        overLight = false;
        return;
      }

      const clickable = target.closest(clickableSelector);

      hovering = Boolean(clickable);

      overLight = clickable ? isLightBackground(clickable) : false;
    }

    function moveCursor(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;

      visible = true;

      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      updateHover(event);
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animateRing);
    }

    function createParticles(event: MouseEvent) {
      const id = nextId++;

      particles = [
        ...particles,
        {
          id,
          x: event.clientX,
          y: event.clientY,
          dark: overLight,
        },
      ];

      const timeout = window.setTimeout(() => {
        particles = particles.filter((particle) => particle.id !== id);

        timeouts.delete(timeout);
      }, 600);

      timeouts.add(timeout);
    }

    function hideCursor() {
      visible = false;
      hovering = false;
      overLight = false;
    }

    window.addEventListener('mousemove', moveCursor);

    window.addEventListener('mousedown', createParticles);

    document.addEventListener('mouseleave', hideCursor);

    animationFrame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveCursor);

      window.removeEventListener('mousedown', createParticles);

      document.removeEventListener('mouseleave', hideCursor);

      cancelAnimationFrame(animationFrame);

      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  });
</script>

{#if enabled && visible}
  <!-- Four-point star cursor -->
  <div
    bind:this={cursor}
    class="cursor-star"
    class:cursor-dark={overLight}
    aria-hidden="true"
  >
    <span class="star-symbol">✦</span>

    {#if hovering}
      {#each dust as particle}
        <span
          class="hover-dust"
          style:--x={`${particle.x}px`}
          style:--y={`${particle.y}px`}
          style:--size={`${particle.size}px`}
          style:--delay={`${particle.delay}s`}
        ></span>
      {/each}
    {/if}
  </div>

  <!-- Circular ring -->
  <div
    bind:this={ring}
    class="cursor-ring"
    class:cursor-hover={hovering}
    class:cursor-dark={overLight}
    aria-hidden="true"
  ></div>
{/if}

<!-- Click particle burst -->
{#each particles as particle (particle.id)}
  <div
    class="particle-burst"
    class:burst-dark={particle.dark}
    style:left={`${particle.x}px`}
    style:top={`${particle.y}px`}
    aria-hidden="true"
  >
    {#each Array(6) as _, index}
      <span
        class="burst-dot"
        style:--angle={`${index * 60}deg`}
        style:--distance={`${18 + (index % 2) * 9}px`}
        style:--size={`${index % 2 === 0 ? 3 : 2}px`}
      ></span>
    {/each}
  </div>
{/each}

<style>
  .cursor-star,
  .cursor-ring,
  .particle-burst {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
  }

  /* Four-point star cursor */

  .cursor-star {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;

    color: #c4cbaf;

    transition: color 0.2s ease;
  }

  .star-symbol {
    font-size: 13px;
    line-height: 1;
    user-select: none;
  }

  /* Circular ring */

  .cursor-ring {
    width: 28px;
    height: 28px;

    border: 1px solid rgba(196, 203, 175, 0.65);
    border-radius: 50%;

    transition:
      width 0.25s ease,
      height 0.25s ease,
      border-color 0.25s ease;
  }

  .cursor-hover {
    width: 42px;
    height: 42px;
    border-color: #c4cbaf;
  }

  /* Contrast on cream buttons */

  .cursor-star.cursor-dark {
    color: #4b302e;
  }

  .cursor-ring.cursor-dark {
    border-color: #4b302e;
  }

  /* Tiny stardust particles */

  .hover-dust {
    position: absolute;

    top: 50%;
    left: 50%;

    width: var(--size);
    height: var(--size);

    border-radius: 50%;
    background: currentColor;

    transform: translate(var(--x), var(--y));

    animation: dust-twinkle 1.8s ease-in-out infinite;

    animation-delay: var(--delay);
  }

  @keyframes dust-twinkle {
    0%,
    100% {
      opacity: 0.2;
      scale: 0.6;
    }

    50% {
      opacity: 1;
      scale: 1.2;
    }
  }

  /* Click particle burst */

  .particle-burst {
    width: 0;
    height: 0;
    color: #c4cbaf;
  }

  .particle-burst.burst-dark {
    color: #4b302e;
  }

  .burst-dot {
    position: absolute;

    width: var(--size);
    height: var(--size);

    border-radius: 50%;
    background: currentColor;

    opacity: 0;

    animation: particle-pop 0.6s ease-out forwards;
  }

  @keyframes particle-pop {
    0% {
      opacity: 0;
      transform: rotate(var(--angle)) translateX(0) scale(0.5);
    }

    25% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: rotate(var(--angle)) translateX(var(--distance)) scale(0.3);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor-star,
    .cursor-ring,
    .particle-burst {
      display: none;
    }
  }
</style>
