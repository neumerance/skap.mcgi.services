<template>
  <VideoPlayer :src="videoSrc" />
</template>
<script setup>
import VideoPlayer from '@/components/VideoPlayer.vue'

const props = defineProps({
  data: { type: Object, default: () => ({ questionNumber: 1 }) },
  endOfSequenceCallback: Function
})

const videoSrc = `https://skap-assets.us-sea-1.linodeobjects.com/questions/Q${props.data.questionNumber}.mp4`
</script>
