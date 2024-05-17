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
import { reactive } from 'vue'
import BuzzerChannel from '@/channels/BuzzerChannel.js'

const componentData = reactive({ buzzerEnabled: false })
const props = defineProps({ playerId: String, gameId: String })

const buzzerChannel = new BuzzerChannel(props.playerId, props.gameId)

// buzzer callbacks
buzzerChannel.onBuzzerEnabled = (_message) => {
  componentData.buzzerEnabled = true
}
buzzerChannel.onBuzzerDisabled = (_message) => {
  componentData.buzzerEnabled = false
}

buzzerChannel.listen()
</script>
<style lang="scss"></style>
