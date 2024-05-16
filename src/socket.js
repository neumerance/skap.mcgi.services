import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_SOCKET_IO_URL, {
  reconnectionDelayMax: 10000,
  auth: {},
  query: {}
})

export default socket
