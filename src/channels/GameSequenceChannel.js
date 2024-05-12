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

  listen() {
    this.socket.on('render-sequence', this.onRenderSequence)
  }
}

export default GameSequenceChannel
