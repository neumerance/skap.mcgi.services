<template>
  <main>
    <video ref="sequencePlayer" class="video-js">
      <source :src="props.src" type="video/mp4" />
    </video>
  </main>
</template>
<script setup>
import videojs from 'video.js'
import { ref, onMounted, onUnmounted, reactive, watch } from 'vue'

const sequencePlayer = ref(null)
const componentData = reactive({
  player: null
})

const fadeOutPlayer = () => {
  sequencePlayer.value.style.opacity = 0
}

const props = defineProps({
  src: String,
  options: { type: Object, default: () => ({}) },
  onEnded: { type: Function, default: null }
})

watch(props, (props) => initializePlayer(props.src))

const initializePlayer = (src = null) => {
  if (!componentData.player) {
    componentData.player = videojs(sequencePlayer.value, {
      videoWidth: 1280,
      videoHeight: 720,
      autoplay: true,
      // muted: true,
      debug: false,
      ...props.options
    })
  }

  if (src) {
    componentData.player.src({
      src,
      type: 'video/mp4'
    })
    componentData.player.play()
  }

  componentData.player.on('ended', () => {
    if (props.onEnded) {
      props.onEnded()
    } else {
      fadeOutPlayer()
    }
  })
}

onMounted(() => {
  initializePlayer()
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
