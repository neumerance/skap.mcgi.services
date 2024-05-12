<template>
  <button
    class="button is-large is-primary"
    @click="buzzerChannel.buzz"
    :disabled="!componentData.buzzerEnabled"
  >
    Buzzer
  </button>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import socket from '@/socket.js'
import BuzzerChannel from '@/channels/BuzzerChannel.js'

const componentData = reactive({ buzzerEnabled: false })
const props = defineProps({ playerId: String, gameId: String })

const buzzerChannel = new BuzzerChannel(props.playerId, props.gameId)

// buzzer callbacks
buzzerChannel.onBuzzerEnabled = (message) => {
  componentData.buzzerEnabled = true
}
buzzerChannel.onBuzzerDisabled = (message) => {
  componentData.buzzerEnabled = false
}

buzzerChannel.listen()
</script>
<style lang="scss"></style>
