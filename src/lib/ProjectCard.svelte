<script>
  import Card from './Card.svelte';

  let {
    title = '',
    leftButtonHref = '',
    leftButtonText = '',
    rightButtonHref = '',
    rightButtonText = '',
    cardWidth = '6',
    rocketcrab = false,
    children
  } = $props();
</script>

<Card {cardWidth}>
  <h3 class="card-title">
    {title}
    {#if rocketcrab}
      <span class="rocketcrab-superscript">
        <img src="https://rocketcrab.com/rocketcrab-logo-text.svg" alt="" />
      </span>
    {/if}
  </h3>
  <p class="card-text">
    {@render children?.()}
  </p>
  <div>
    <a href={leftButtonHref} target="_blank">
      <button type="button" class="btn btn-outline-light">
        {leftButtonText}
      </button>
    </a>
    {#if rightButtonHref}
      <a href={rightButtonHref} target="_blank">
        <button type="button" class="btn btn-outline-light">
          {rightButtonText}
        </button>
      </a>
    {/if}
  </div>
</Card>

<style>
  .card-title {
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
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
