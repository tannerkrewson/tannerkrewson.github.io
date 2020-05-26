<template>
  <card>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-text">
      <slot></slot>
    </p>
    <div>
      <a :href="leftButtonHref" target="_blank">
        <button type="button" class="btn btn-outline-dark">
          {{ leftButtonText }}
        </button>
      </a>
      <a v-if="rightButtonHref" :href="rightButtonHref" target="_blank">
        <button type="button" class="btn btn-outline-dark">
          {{ rightButtonText }}
        </button>
      </a>
    </div>
  </card>
</template>
<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  props: {
    title: { type: String, default: '' },
    leftButtonHref: { type: String, default: '' },
    leftButtonText: { type: String, default: '' },
    rightButtonHref: { type: String, default: '' },
    rightButtonText: { type: String, default: '' }
  }
}
</script>
<style>
.card-title {
  font-family: 'Jost', sans-serif;
  font-size: 2rem;
  font-weight: 500;
}

.card-subtitle {
}
</style>
