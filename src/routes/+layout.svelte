<script>
  import Footer from '$lib/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="color-scheme" content="dark" />
</svelte:head>

<div class="page">
  {@render children?.()}

  <Footer />
</div>

<!-- Modal teleport target -->
<div id="modal-root"></div>

<style>
  :root {
    /* palette — dark (existing colors, unchanged) */
    --surface-page: #111612;
    --surface-deep: #000a04;
    --surface-elevated: #181f1a;
    --surface-nav: #121714;
    --text-strong: #ffffff;
    --text-default: #a8adb7;
    --text-muted: #727a89;
    --text-display-accent: #8ec5ff;
    --action-primary: #155dfc;
    --brand-blue: #1348dc;
    --line-subtle: rgba(114, 122, 137, 0.14);
    --line-panel: #464b57;

    /* typography — kept as-is per request */
    --font-sans: "IBM Plex Sans", system-ui, sans-serif;
    --font-serif: "IBM Plex Serif", Georgia, serif;
    --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
  }

  :global(html) {
    display: flex;
    justify-content: center;
    background: var(--surface-page);
  }

  :global(body) {
    font-family: var(--font-sans);
    font-size: 14px;
    line-height: 1.7;
    width: 100%;
    max-width: var(--page-max-width, 42rem);
    margin: 0;
    padding: 0 1.5rem;
    background: var(--surface-page);
    color: var(--text-default);
    -webkit-font-smoothing: antialiased;
  }

  :global(h1), :global(h2), :global(h3) {
    font-family: var(--font-serif);
    font-weight: 400;
    color: var(--text-strong);
  }

  :global(.mono) {
    font-family: var(--font-mono);
  }

  :global(a) {
    color: var(--text-default);
    text-decoration: none;
    transition: color 0.1s ease;
  }

  :global(a:hover) {
    color: var(--text-strong);
  }

  :global(a:focus-visible) {
    outline: 1px solid var(--action-primary);
    outline-offset: 2px;
  }

  :global(.link-accent) {
    color: var(--text-display-accent);
  }

  :global(.link-accent:hover) {
    color: var(--text-strong);
  }

  :global(img) {
    max-width: 100%;
  }

  .page {
    min-height: 100vh;
    padding: 2.5rem 0;
  }
</style>
