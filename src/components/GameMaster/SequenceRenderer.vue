<template>
  <component
    :is="componentData.currentComponent"
    :data="componentData.data"
    :end-of-sequence-callback="resetComponentData"
  >
  </component>
</template>
<script setup>
import { reactive } from 'vue'
import GameSequenceChannel from '@/channels/GameSequenceChannel.js'

const componentData = reactive({
  currentComponent: null,
  data: null
})
const props = defineProps({
  gameId: String
})

const loadComponent = async (componentName) => {
  return await import(`./${componentName}.vue`)
}

const resetComponentData = () => {
  componentData.currentComponent = null
  componentData.sequenceAnimationComponent = null
  componentData.videoUrl = null
}

const gameSequenceChannel = new GameSequenceChannel(props.gameId)
gameSequenceChannel.onRenderSequence = async (message) => {
  const { sequenceComponent, data } = message

  componentData.data = data
  const comp = await loadComponent(sequenceComponent)
  componentData.currentComponent = comp.default
}
gameSequenceChannel.listen()
</script>
