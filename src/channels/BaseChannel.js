import socket from '@/socket.js'

class BaseChannel {
  constructor() {
    this.socket = socket
  }
}

export default BaseChannel
