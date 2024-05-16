<template>
  <div class="sequence">
    <h1
      :class="{
        'title--slideUp': componentData.sequencePart === 'OUTRO',
        'title--slideDown': componentData.sequencePart === 'INTRO'
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
@keyframes slideDown {
  0% {
    top: 0px;
    opacity: 0;
  }
  55% {
    opacity: 0;
  }
  100% {
    top: 530px;
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    top: 530px;
    opacity: 1;
  }
  15% {
    opacity: 0;
  }
  100% {
    top: 0px;
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
    top: 530px;
    color: #024b88;
    width: 100%;
    text-align: center;
    z-index: 1030;
  }
  .title--slideDown {
    animation: slideDown 1.2s forwards;
  }
  .title--slideUp {
    animation: slideUp 1.2s forwards;
  }
}
</style>
