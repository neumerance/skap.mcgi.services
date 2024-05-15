<template>
  <NewQuestionSequence
    v-if="componentData.currentComponent === 'NewQuestionSequence'"
    :key="`${componentData._id}-NewQuestionSequence`"
    :data="componentData.data"
  />
  <PlayerAttentionSequence
    v-if="componentData.currentComponent === 'PlayerAttentionSequence'"
    :key="`${componentData._id}-PlayerAttentionSequence`"
    :data="componentData.data"
  />
</template>
<script setup>
import { reactive } from 'vue'
import GameSequenceChannel from '@/channels/GameSequenceChannel.js'
import NewQuestionSequence from '@/components/GameMaster/NewQuestionSequence.vue'
import PlayerAttentionSequence from '@/components/GameMaster/PlayerAttentionSequence.vue'

const componentData = reactive({
  currentComponent: null,
  data: null,
  _id: null
})
const props = defineProps({
  gameId: String
})

const gameSequenceChannel = new GameSequenceChannel(props.gameId)
gameSequenceChannel.onRenderSequence = async (message) => {
  const { sequenceComponent, data, _id } = message

  componentData._id = _id
  componentData.data = data
  componentData.currentComponent = sequenceComponent
}
gameSequenceChannel.listen()
</script>
