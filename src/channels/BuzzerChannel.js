import BaseChannel from './BaseChannel.js'

class BuzzerChannel extends BaseChannel {
  constructor(playerId, gameId) {
    super()

    this.playerId = playerId
    this.gameId = gameId
    this.onBuzzerEnabled = () => {}
    this.onBuzzerDisabled = () => {}
  }

  listen() {
    this.socket.on('buzzer_enabled', this.onBuzzerEnabled)
    this.socket.on('buzzer_disabled', this.onBuzzerDisabled)
  }

  enableAllBuzzers() {
    this.socket.emit('all_buzzer_enable', { gameId: this.gameId })
  }

  disableAllBuzzers() {
    this.socket.emit('all_buzzer_disable', { gameId: this.gameId })
  }

  buzz() {
    this.socket.emit('buzzer', { playerId: this.playerId, gameId: this.gameId })
  }
}

export default BuzzerChannel
