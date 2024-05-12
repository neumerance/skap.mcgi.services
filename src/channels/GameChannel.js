import BaseChannel from '@/channels/BaseChannel.js'

class GameChannel extends BaseChannel {
  constructor(gameId) {
    super()

    this.gameId = gameId
    this.onJoined = (_message) => {}
  }

  listen() {
    this.socket.on('joined-game', this.onJoined)
  }

  join(message = {}) {
    this.socket.emit('join-game', { gameId: this.gameId, ...message })
  }
}

export default GameChannel
