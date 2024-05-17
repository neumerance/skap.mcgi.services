<template>
  <main>
    <SequenceRenderer :game-id="gameId" />
  </main>
</template>
<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import GameChannel from '@/channels/GameChannel.js'
import SequenceRenderer from '@/components/sequences/SequenceRenderer.vue'

const route = useRoute()
const gameId = route.params.gameId

const pageData = reactive({
  gameJoined: false
})

const gameChannel = new GameChannel(gameId)
gameChannel.onJoined = (message) => {
  const { joined } = message
  pageData.gameJoined = joined
}
gameChannel.listen()
gameChannel.join()
</script>
<style scoped>
main {
  width: 1280px;
  height: 720px;
  max-width: 1280px;
  max-height: 720px;
  background: #008000;
}
</style>
