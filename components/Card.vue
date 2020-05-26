<template>
  <div class="col-md-6 card-col">
    <div class="card">
      <div class="card-block">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style>
.card-col {
  display: flex;
  padding: 0.8em;
}

.card {
  background-color: rgba(200, 200, 255, 0.2);
  border: none;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.5em 1em;
}
</style>
