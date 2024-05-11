<template>
  <button class="button is-large is-primary" @click="emitBuzz">Buzzer</button>
</template>
<script setup>
import { onMounted } from "vue";
import socket from "@/socket.js";

const emitBuzz = () => {
  socket.emit("BUZZER", { playerID: 'fdsfsdfsdf' });
}
</script>
<style lang="scss">
</style>
