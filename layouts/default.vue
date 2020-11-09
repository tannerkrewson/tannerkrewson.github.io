<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

export default {
  mounted() {
    this.vantaEffect = WAVES({
      el: '#vanta',
      THREE,
      mouseControls: false,
      touchControls: false,
      color: '#5C369C'
    })
  }
}
</script>

<style></style>
