<template>
  <div class="sequence">
    <h1
      :class="{
        'title--slideUp': componentData.sequencePart === 'INTRO',
        'title--slideDown': componentData.sequencePart === 'OUTRO'
      }"
      class="title is-size-1 has-text-weight-bold is-uppercase"
    >
      {{ props.data.playerName }}
    </h1>
    <VideoPlayer :src="componentData.videoSrc" :on-ended="toggleVideoSrc" />
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

const props = defineProps({
  data: { type: Object, default: () => ({ playerName: '<player>', delay: 3000 }) }
})

const setVideoUrl = () => {
  const videoSrcs = {
    INTRO:
      'https://skap-assets.us-sea-1.linodeobjects.com/chargens/name_chargens/INTRO.mp4?t=123232',
    OUTRO:
      'https://skap-assets.us-sea-1.linodeobjects.com/chargens/name_chargens/OUTRO.mp4?t=3435332'
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
    }, props.data.delay)
  }
}
</script>
<style lang="scss" scoped>
.sequence,
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
@keyframes slideUp {
  0% {
    opacity: 0;
    bottom: -50px;
  }
  55% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    bottom: 135px;
  }
}

@keyframes slideDown {
  0% {
    bottom: 135px;
    opacity: 1;
  }
  45% {
    opacity: 0;
  }
  100% {
    bottom: -50px;
    opacity: 0;
  }
}

.sequence {
  position: relative;

  video,
  .video-js {
    z-index: 1020;
  }

  .title {
    position: absolute;
    color: #024b88;
    width: 100%;
    text-align: center;
    z-index: 1030;
  }
  .title--slideUp {
    bottom: -50px;
    animation: slideUp 1.2s forwards;
  }
  .title--slideDown {
    bottom: 135px;
    animation: slideDown 1.2s forwards;
  }
}
</style>
