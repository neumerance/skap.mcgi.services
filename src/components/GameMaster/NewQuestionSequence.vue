<template>
  <video ref="sequencePlayer" class="video-js">
    <source :src="props.sequenceVideoUrl" type="video/mp4" />
  </video>
</template>
<script setup>
import { reactive, shallowRef, onMounted, watch, onUnmounted } from 'vue'
import videojs from 'video.js'

const props = defineProps({
  sequenceVideoUrl: String,
  endOfSequenceCallback: Function
})
const componentData = reactive({
  player: null
})
const sequencePlayer = shallowRef(null)
const initializePlayer = () => {
  componentData.player = videojs(sequencePlayer.value, {
    muted: true,
    controls: false,
    autoplay: true,
    debug: false
  })

  componentData.player.on('ended', function () {
    sequencePlayer.value.style.opacity = 0
  })
}
const updateSrc = (newProps) => {
  componentData.player.src({
    src: newProps.sequenceVideoUrl,
    type: 'video/mp4'
  })
  sequencePlayer.value.style.opacity = 1
}

onMounted(() => {
  initializePlayer()
})

watch(props, (newProps) => {
  updateSrc(newProps)
})

onUnmounted(() => {
  componentData.player.dispose()
})
</script>
<style lang="scss" scoped>
video {
  width: 1280px;
  height: 720px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
</style>
