<script>
  import { base } from '$app/paths';

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  let Content = $derived(data.content);

  const dateFormatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });

  /**
   * @param {string} date
   * @returns {string}
   */
  function formatDate(date) {
    return dateFormatter.format(new Date(date));
  }
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
  <style>
    :root { --page-max-width: 64rem; }
  </style>

  {#if data.metadata.image}
    <meta property="og:image" content={data.metadata.image} />
  {/if}

  <meta property="og:title" content={data.metadata.title} />
  <meta property="og:description" content={data.metadata.description} />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content={data.metadata.date} />
</svelte:head>

<article class="blog-post">
  <nav aria-label="Breadcrumb">
    <a href={`${base}/`}>← Home</a>
    <span class="breadcrumb-sep">/</span>
    <a href={`${base}/blog`}>Blog</a>
  </nav>

  <header class="post-header">
    <h1>{data.metadata.title}</h1>

    <p class="post-date">
      <time datetime={data.metadata.date}>
        {formatDate(data.metadata.date)}
      </time>
      {#if data.metadata.disclaimer}
        <span class="date-sep">/</span>
        <span class="disclaimer">{data.metadata.disclaimer}</span>
      {/if}
    </p>
  </header>

  <div class="post-content">
    <Content />
  </div>
</article>

<style>
  .blog-post {
    padding: 0;
  }

  .blog-post nav {
    margin-bottom: 2rem;
  }

  .blog-post nav a {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    transition: color 0.1s ease;
  }

  .blog-post nav a:hover {
    color: var(--text-strong);
  }

  .breadcrumb-sep {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0 0.35rem;
  }

  .post-header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--line-subtle);
  }

  .post-header h1 {
    font-family: var(--font-serif);
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--text-strong);
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    align-items: baseline;
  }

  .date-sep {
    color: var(--text-muted);
  }

  .disclaimer {
    color: var(--text-muted);
  }

  .post-content {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-default);
  }

  .post-content :global(h2) {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-strong);
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .post-content :global(h3) {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--text-strong);
    margin-top: 1.75rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .post-content :global(h4) {
    font-family: var(--font-serif);
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-strong);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .post-content :global(p) {
    margin-bottom: 1rem;
  }

  .post-content :global(ul),
  .post-content :global(ol) {
    margin-bottom: 1rem;
    padding-left: 1.25rem;
  }

  .post-content :global(li) {
    margin-bottom: 0.3rem;
  }

  .post-content :global(a) {
    color: var(--text-display-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.1s ease;
  }

  .post-content :global(a:hover) {
    color: var(--text-strong);
  }

  .post-content :global(blockquote) {
    margin: 1.25rem 0;
    padding: 0.5rem 1rem;
    border-left: 2px solid var(--line-panel);
    color: var(--text-muted);
    font-style: italic;
  }

  .post-content :global(code) {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    background: var(--surface-elevated);
    padding: 0.1rem 0.35rem;
    border: 1px solid var(--line-subtle);
  }

  .post-content :global(pre) {
    margin: 1.25rem 0;
    padding: 1rem;
    background: var(--surface-deep);
    border: 1px solid var(--line-subtle);
    overflow-x: auto;
  }

  .post-content :global(pre code) {
    background: none;
    border: none;
    padding: 0;
    font-size: 0.8rem;
    line-height: 1.6;
  }

  .post-content :global(img) {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1.5rem 0;
    border: 1px solid var(--line-subtle);
  }

  .post-content :global(hr) {
    border: none;
    border-top: 1px solid var(--line-subtle);
    margin: 2rem 0;
  }

  .post-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0;
    font-size: 0.85rem;
  }

  .post-content :global(th),
  .post-content :global(td) {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--line-subtle);
    text-align: left;
  }

  .post-content :global(th) {
    background: var(--surface-elevated);
    color: var(--text-strong);
    font-weight: 500;
  }

  .post-content :global(td) {
    color: var(--text-default);
  }

  .post-content :global(strong) {
    color: var(--text-strong);
  }
</style>
