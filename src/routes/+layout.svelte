<script>
  /**
   * +layout.svelte — page shell, tokens, and background layers
   */

  // Noise SVG filter for the subtle grain overlay
  const noiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#n)" opacity="0.012"/>
</svg>`;
</script>

<svelte:head>
  <meta name="color-scheme" content="dark" />
</svelte:head>

<div class="page">
  <!-- noise overlay -->
  <div
    class="noise"
    aria-hidden="true"
    style="background-image: url('data:image/svg+xml,{encodeURIComponent(noiseSvg)}')"
  ></div>
  <slot />
</div>

<!-- fine grid pattern for hero area -->
<svg aria-hidden="true" style="position:absolute;width:0;height:0">
  <defs>
    <pattern id="fine-grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M.5 10V.5H10" fill="none" stroke="currentColor" stroke-width="1" opacity="0.06"/>
    </pattern>
    <pattern id="slash-divider" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" opacity="0.14"/>
    </pattern>
  </defs>
</svg>

<style>
  :root {
    /* palette — dark */
    --surface-page: #111216;
    --surface-deep: #00040a;
    --surface-elevated: #181a1f;
    --surface-nav: #121417;
    --text-strong: #ffffff;
    --text-default: #a8adb7;
    --text-muted: #727a89;
    --text-display-accent: #8ec5ff;
    --action-primary: #155dfc;
    --brand-blue: #1348dc;
    --line-subtle: rgba(114, 122, 137, 0.14);
    --line-panel: #464b57;

    /* typography */
    --font-sans: "IBM Plex Sans", system-ui, sans-serif;
    --font-serif: "IBM Plex Serif", Georgia, serif;
    --font-mono: "IBM Plex Mono", ui-monospace, monospace;

    /* layout */
    --content-max: 70rem;
    --rail: 1rem;
  }

  @media (min-width: 40rem) {
    :root { --rail: 1.5rem; }
  }
  @media (min-width: 48rem) {
    :root { --rail: 3rem; }
  }

  :global(*), :global(*::before), :global(*::after) {
    box-sizing: border-box;
    margin: 0;
  }

  :global(body) {
    font-family: var(--font-sans);
    background: var(--surface-page);
    color: var(--text-default);
    -webkit-font-smoothing: antialiased;
  }

  :global(h1), :global(h2), :global(h3), :global(h4) {
    font-family: var(--font-serif);
  }

  :global(code), :global(pre), :global(kbd), :global(samp), :global(.technical) {
    font-family: var(--font-mono);
  }

  :global(a) {
    color: var(--action-primary);
    text-decoration: none;
  }
  :global(a:hover) {
    text-decoration: underline;
  }

  :global(button) {
    font-family: var(--font-sans);
  }

  /* page frame */
  .page {
    --content-max: 70rem;
    --rail: 1rem;
    overflow-x: clip;
    position: relative;
    min-height: 100vh;
  }

  /* noise overlay */
  .noise {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-repeat: repeat;
    opacity: 1;
  }

  /* framed section — the standard content wrapper */
  :global(.framed-section) {
    display: grid;
    grid-template-columns: var(--rail) minmax(0, var(--content-max)) var(--rail);
    justify-content: center;
    position: relative;
  }

  :global(.framed-section > *) {
    grid-column: 2;
  }

  /* full-bleed utility (for hairlines, dividers) */
  :global(.full-bleed) {
    grid-column: 1 / -1;
  }

  :global(.rail-left) {
    grid-column: 1;
    position: relative;
    pointer-events: none;
  }

  :global(.rail-right) {
    grid-column: 3;
    position: relative;
    pointer-events: none;
  }

  /* rail rules */
  :global(.rail-rule) {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--line-subtle);
  }
  :global(.rail-left .rail-rule) { right: 0; }
  :global(.rail-right .rail-rule) { left: 0; }

  /* intersection node */
  :global(.node) {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--surface-page);
    border: 1px solid var(--line-subtle);
    transform: rotate(45deg);
    z-index: 2;
  }

  /* hairline */
  :global(.hairline) {
    border: 0;
    border-top: 1px solid var(--line-subtle);
    margin: 0;
  }

  /* section divider */
  :global(.section-divider) {
    height: 14px;
    border-top: 1px solid var(--line-subtle);
    border-bottom: 1px solid var(--line-subtle);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
  }

  /* buttons */
  :global(.btn-primary) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.35px;
    font-weight: 400;
    background: var(--action-primary);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.2);
    transition: background 0.15s ease;
  }
  :global(.btn-primary:hover) {
    background: #1a5bf7;
    color: #fff;
  }

  :global(.btn-secondary) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.35px;
    font-weight: 400;
    background: transparent;
    color: var(--text-default);
    border: 1px solid var(--line-subtle);
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  :global(.btn-secondary:hover) {
    background: var(--surface-elevated);
    border-color: var(--line-panel);
  }

  :global(.btn-link) {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: var(--action-primary);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  :global(.btn-link::after) {
    content: '→';
    font-size: 12px;
  }

  /* content padding inside framed sections */
  :global(.content-pad) {
    padding: 64px 0;
  }

  :global(.subsection-pad) {
    padding: 40px 0;
  }
</style>
