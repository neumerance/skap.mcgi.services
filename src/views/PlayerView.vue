<template>
  <main>
    <JoinGame game-id="12345" playerId="player-1" />
    <BuzzerButton playerId="player-1" />
  </main>
</template>
<script setup>
import JoinGame from '@/components/JoinGame.vue'
import BuzzerButton from '@/components/BuzzerButton.vue'
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
