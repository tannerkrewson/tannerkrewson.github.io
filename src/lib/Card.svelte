<script>
  let { children } = $props();
</script>

<div class="card">
  {@render children?.()}
</div>

<style>
  .card {
    background: var(--surface-elevated);
    border: 1px solid var(--line-subtle);
    border-radius: 4px;
    padding: 24px;
  }
</style>
