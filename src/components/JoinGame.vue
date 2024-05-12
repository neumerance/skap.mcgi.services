<template>
  <p v-if="componentData.joinedGame">
    You have joined game #{{ props.gameId }} as {{ props.playerId }}
  </p>
  <p v-else>Joining game...</p>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import GameChannel from '@/channels/GameChannel.js'

const props = defineProps({
  gameId: String,
  playerId: String
})
const componentData = reactive({
  joinedGame: false
})

const gameChannel = new GameChannel(props.gameId)
gameChannel.onJoined = (message) => {
  const { joined } = message

  componentData.joinedGame = joined
}
gameChannel.listen()

onMounted(() => {
  gameChannel.join(props.playerId)
})
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
