<template>
  <main>
    <h1 v-if="componentData.buzzing" class="is-size-1">Some buzzed</h1>
  </main>
</template>
<script setup>
import { onMounted, reactive } from 'vue'

const componentData = reactive({ buzzing: false })
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  background: #04f904 !important;
  overflow: hidden;
}
</style>
