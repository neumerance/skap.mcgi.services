import BaseChannel from '@/channels/BaseChannel.js'

class GameSequenceChannel extends BaseChannel {
  constructor(gameId) {
    super()

    this.gameId = gameId
    this.onRenderSequence = () => {}
  }

  newQuestion(sequenceName) {
    this.socket.emit('new-sequence', {
      gameId: this.gameId,
      sequenceType: 'questions',
      sequenceName
    })
  }

  listen() {
    this.socket.on('render-sequence', this.onRenderSequence)
  }
}

export default GameSequenceChannel
