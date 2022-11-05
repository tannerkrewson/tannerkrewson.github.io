<template>
  <card :card-width="cardWidth">
    <h3 class="card-title">
      {{ title }}
      <div v-if="rocketcrab" class="rocketcrab-superscript">
        <img src="https://rocketcrab.com/rocketcrab-logo-text.svg" />
      </div>
    </h3>
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
    rightButtonText: { type: String, default: '' },
    cardWidth: { type: String, default: '6' },
    rocketcrab: { type: Boolean, default: false }
  }
}
</script>
<style>
.card-title {
  font-family: 'Jost', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
}

.card-subtitle {
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
