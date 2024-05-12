<template>
  <main>
    <div class="is-flex join-form">
      <input
        class="input is-static mr-2"
        type="text"
        placeholder="Game ID"
        v-model="gameId"
        :disabled="pageData.gameJoined"
        :read-only="pageData.gameJoined"
      />
      <input
        class="input is-static mr-2"
        type="text"
        placeholder="Player ID"
        v-model="playerId"
        :disabled="pageData.gameJoined"
        :read-only="pageData.gameJoined"
      />
      <button class="button is-small is-light" @click="joinGame" :disabled="pageData.gameJoined">
        Join
      </button>
    </div>
    <p v-if="pageData.gameJoined" class="has-text-success">Online</p>
    <p v-else class="has-text-dark">Offline</p>

    <div v-if="pageData.gameJoined">
      <div class="questions">
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q1')">
          Question #1
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q2')">
          Question #2
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q3')">
          Question #3
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q4')">
          Question #4
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q5')">
          Question #5
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q6')">
          Question #6
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('Q7')">
          Question #7
        </button>
      </div>
    </div>
  </main>
</template>
<script setup>
import { reactive } from 'vue'
import GameChannel from '@/channels/GameChannel.js'
import GameSequenceChannel from '@/channels/GameSequenceChannel.js'

const gameId = defineModel('gameId')
const playerId = defineModel('playerId')
let gameSequenceChannel

const pageData = reactive({
  gameJoined: false
})

const joinGame = () => {
  if (!gameId.value) return

  const gameChannel = new GameChannel(gameId.value)
  gameChannel.onJoined = (message) => {
    const { joined } = message
    pageData.gameJoined = joined
  }
  gameChannel.listen()
  gameChannel.join()

  gameSequenceChannel = new GameSequenceChannel(gameId.value)
}
</script>
<style scoped>
main {
  width: 1280px;
  height: 720px;
  max-width: 1280px;
  max-height: 720px;
}
</style>
