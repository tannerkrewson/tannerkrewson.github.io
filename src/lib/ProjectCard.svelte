<script>
  import Card from './Card.svelte';

  let {
    title = '',
    leftButtonHref = '',
    leftButtonText = '',
    rightButtonHref = '',
    rightButtonText = '',
    rocketcrab = false,
    children
  } = $props();
</script>

<Card>
  <h3 class="project-title">
    {title}
    {#if rocketcrab}
      <span class="rocketcrab-superscript">
        <img src="https://rocketcrab.com/rocketcrab-logo-text.svg" alt="" />
      </span>
    {/if}
  </h3>
  <p class="project-desc">
    {@render children?.()}
  </p>
  <div class="project-actions">
    <a href={leftButtonHref} target="_blank">
      <button type="button" class="btn-secondary">{leftButtonText}</button>
    </a>
    {#if rightButtonHref}
      <a href={rightButtonHref} target="_blank">
        <button type="button" class="btn-secondary">{rightButtonText}</button>
      </a>
    {/if}
  </div>
</Card>

<style>
  .project-title {
    font-family: var(--font-serif);
    font-size: 21px;
    font-weight: 400;
    color: var(--text-strong);
    margin-bottom: 8px;
  }

  .project-desc {
    font-size: 16px;
    line-height: 24px;
    color: var(--text-default);
    margin-bottom: 16px;
    letter-spacing: -0.4px;
  }

  .project-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .rocketcrab-superscript {
    display: inline-block;
    overflow: hidden;
    width: 1.6em;
    margin-left: -0.4em;
    margin-bottom: 0.4em;
    margin-top: -1em;
  }

  .rocketcrab-superscript img {
    margin: -1.4em -0.2em -1.6em -0.2em;
  }
</style>
