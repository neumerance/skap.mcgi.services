import { createRouter, createWebHistory } from 'vue-router'
import GameView from "@/views/GameView.vue";
import PlayerView from "@/views/PlayerView.vue";

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
  ]
})

export default router
