<script>
  let year = $state(new Date().getFullYear());
</script>

<div class="divider">==============================</div>

<footer aria-label="Site footer">
  <p class="footer-text">
    <span class="footer-year">tannerkrewson, {year}</span>
    <span class="footer-sep"> / </span>
    <a href="https://github.com/tannerkrewson/tannerkrewson.github.io" target="_blank" class="link-accent">source</a>
  </p>
</footer>

<style>
  .divider {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: rgba(114, 122, 137, 0.25);
    letter-spacing: 0.05em;
    margin: 2.5rem 0;
    user-select: none;
  }

  footer {
    margin-top: 0;
  }

  .footer-text {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-muted);
  }

  .footer-year {
    color: var(--text-muted);
  }

  .footer-sep {
    color: var(--text-muted);
  }
</style>
