import BaseChannel from '@/channels/BaseChannel.js'

class GameSequenceChannel extends BaseChannel {
  constructor(gameId) {
    super()

    this.gameId = gameId
    this.onRenderSequence = () => {}
  }

  newQuestion(questionNumber) {
    this.socket.emit('new-sequence', {
      gameId: this.gameId,
      sequenceComponent: 'NewQuestionSequence',
      data: { questionNumber }
    })
  }

  playerAttention(playerName) {
    this.socket.emit('new-sequence', {
      gameId: this.gameId,
      sequenceComponent: 'PlayerAttentionSequence',
      data: { playerName, delay: 4000 }
    })
  }

  listen() {
    this.socket.on('render-sequence', this.onRenderSequence)
  }
}

export default GameSequenceChannel
