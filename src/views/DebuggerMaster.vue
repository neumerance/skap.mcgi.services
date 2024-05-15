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
        <h4 class="is-size-4 has-text-weight-light">Player Buzzers</h4>
        <button class="button is-small" @click="gameSequenceChannel.playerAttention('Player One')">
          Player 1
        </button>
        <button class="button is-small" @click="gameSequenceChannel.playerAttention('Player Two')">
          Player 2
        </button>
      </div>
      <div class="questions">
        <h4 class="is-size-4 has-text-weight-light">New Question Sequence</h4>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('1')">
          Question #1
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('2')">
          Question #2
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('3')">
          Question #3
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('4')">
          Question #4
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('5')">
          Question #5
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('6')">
          Question #6
        </button>
        <button class="button is-small" @click="gameSequenceChannel.newQuestion('7')">
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
