<template>
  <button
    v-if="componentData.buzzersEnabled"
    class="button is-large is-danger"
    @click="buzzerChannel.disableAllBuzzers"
  >
    Disable All Buzzers
  </button>
  <button v-else class="button is-large is-primary" @click="buzzerChannel.enableAllBuzzers">
    Enable All Buzzers
  </button>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import socket from '@/socket.js'
import BuzzerChannel from '@/channels/BuzzerChannel.js'

const props = defineProps({ playerId: String, gameId: String })
const componentData = reactive({
  buzzersEnabled: false
})

const buzzerChannel = new BuzzerChannel(props.playerId, props.gameId)

// buzzer callbacks
buzzerChannel.onBuzzerEnabled = (message) => {
  componentData.buzzersEnabled = true
}
buzzerChannel.onBuzzerDisabled = (message) => {
  componentData.buzzersEnabled = false
}

// listen to events
buzzerChannel.listen()
</script>
