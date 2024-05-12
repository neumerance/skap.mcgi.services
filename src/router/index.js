import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import PlayerView from '@/views/PlayerView.vue'
import GameMasterView from '@/views/GameMasterView.vue'

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
    }
  ]
})

export default router
