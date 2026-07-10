<script>
  let { cardWidth = '6', children } = $props();
</script>

<div class="col-md-{cardWidth} card-col">
  <div class="card">
    <div class="card-block">
      {@render children?.()}
    </div>
  </div>
</div>
