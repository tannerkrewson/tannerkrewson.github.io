<script>
  import { base } from '$app/paths';

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

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
  <title>Blog</title>
  <meta
    name="description"
    content="Articles, project notes, and development insights."
  />
</svelte:head>

<section class="blog-index">
  <nav aria-label="Breadcrumb">
    <a href={`${base}/`}>← Home</a>
  </nav>

  <header>
    <h1>Blog</h1>
  </header>

  {#if data.posts.length > 0}
    <div class="post-list">
      {#each data.posts as post}
        <article class="post-card">
          <p class="post-date">
            <time datetime={post.date}>{formatDate(post.date)}</time>
          </p>

          <h2>
            <a href={`${base}/blog/${post.slug}`}>
              {post.title}
            </a>
          </h2>


        </article>
      {/each}
    </div>
  {:else}
    <p>No posts have been published yet.</p>
  {/if}
</section>

<style>
  .blog-index {
    max-width: 42rem;
    padding: 0;
  }

  .blog-index nav {
    margin-bottom: 1.25rem;
  }

  .blog-index nav a {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    transition: color 0.1s ease;
  }

  .blog-index nav a:hover {
    color: var(--text-strong);
  }

  .blog-index header {
    margin-bottom: 2.5rem;
  }

  .blog-index h1 {
    font-family: var(--font-serif);
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--text-strong);
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .post-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .post-card {
    border-top: 1px solid var(--line-subtle);
    padding-top: 1.5rem;
  }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 0.3rem;
  }

  .post-card h2 {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }

  .post-card h2 a {
    color: var(--text-strong);
    text-decoration: none;
    transition: color 0.1s ease;
  }

  .post-card h2 a:hover {
    color: var(--text-display-accent);
  }

  .post-card > p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--text-default);
  }

</style>
