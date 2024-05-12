import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import PlayerView from '@/views/PlayerView.vue'
import GameMasterView from '@/views/GameMasterView.vue'
import DebuggerMaster from '@/views/DebuggerMaster.vue'
import DebuggerView from '@/views/DebuggerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/game-master',
      name: 'game-master',
      component: GameMasterView
    },
    {
      path: '/debugger',
      name: 'debugger-master',
      component: DebuggerMaster
    },
    {
      path: '/debugger-view/:gameId',
      name: 'debugger-view',
      component: DebuggerView
    }
  ]
})

export default router
