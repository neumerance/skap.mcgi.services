<template>
  <VideoPlayer :src="componentData.videoSrc" :on-ended="toggleVideoSrc" />
</template>
<script setup>
import { reactive } from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

// const props = defineProps({
//   data: { type: Object, default: () => ({ playerName: '<player>', delay: 3000 }) }
// })

const setVideoUrl = () => {
  const videoSrcs = {
    INTRO: 'https://skap-assets.us-sea-1.linodeobjects.com/chargens/name_chargens/INTRO.mp4',
    OUTRO: 'https://skap-assets.us-sea-1.linodeobjects.com/chargens/name_chargens/OUTRO.mp4'
  }
  componentData.videoSrc = videoSrcs[componentData.sequencePart]
}

const componentData = reactive({
  player: null,
  sequencePart: 'INTRO',
  videoSrc: null
})

setVideoUrl()

const toggleVideoSrc = () => {
  if (componentData.sequencePart === 'INTRO') {
    setTimeout(() => {
      componentData.sequencePart = 'OUTRO'
      setVideoUrl()
    }, 3000)
  }
}
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
