<template>
  <main>
    <JoinGame game-id="12345" playerId="game-master-1" />
    <ToggleBuzzerButtons game-id="12345" playerId="game-master-1" />
  </main>
</template>
<script setup>
import JoinGame from '@/components/JoinGame.vue'
import ToggleBuzzerButtons from '@/components/GameMaster/ToggleBuzzerButtons.vue'
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
