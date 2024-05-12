<template>
  <video ref="sequencePlayer" class="video-js">
    <source :src="getVideoUrl()" type="video/mp4" />
  </video>
</template>
<script setup>
import { reactive, shallowRef, onMounted, watch, onUnmounted } from 'vue'
import videojs from 'video.js'

const props = defineProps({
  data: { type: Object, default: { questionNumber: 1 } },
  endOfSequenceCallback: Function
})
const componentData = reactive({
  player: null
})
const sequencePlayer = shallowRef(null)
const initializePlayer = () => {
  componentData.player = videojs(sequencePlayer.value, {
    videoWidth: 1280,
    videoHeight: 720,
    muted: true,
    controls: false,
    autoplay: true,
    debug: false
  })

  componentData.player.on('ended', function () {
    sequencePlayer.value.style.opacity = 0
  })
}

const getVideoUrl = () => {
  return `https://skap-assets.us-sea-1.linodeobjects.com/questions/Q${props.data.questionNumber}.mp4`
}

const updateSrc = (newProps) => {
  componentData.player.src({
    src: getVideoUrl(),
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
video,
.video-js {
  width: 1280px;
  height: 720px;
  max-width: 1280px;
  max-height: 720px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  background: transparent;
}
</style>
