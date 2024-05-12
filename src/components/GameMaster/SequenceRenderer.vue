<template>
  <component
    v-if="componentData.currentComponent && componentData.videoUrl"
    :is="componentData.currentComponent"
    :sequence-video-url="componentData.videoUrl"
    :end-of-sequence-callback="resetComponentData"
  >
  </component>
</template>
<script setup>
import { reactive } from 'vue'
import GameSequenceChannel from '@/channels/GameSequenceChannel.js'

const componentData = reactive({
  currentComponent: null,
  videoUrl: null
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
  const { sequenceAnimationComponent, videoUrl } = message

  componentData.videoUrl = videoUrl
  const comp = await loadComponent(sequenceAnimationComponent)
  componentData.currentComponent = comp.default
}
gameSequenceChannel.listen()
</script>
