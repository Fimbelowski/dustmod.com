<template>
  <img class="download-button-flavor-image" :src="getRandomSprite()" />
</template>

<script setup lang="ts">
import SPRITES from "@/assets/sprites";

function getRandomSprite() {
  return SPRITES[Math.floor(Math.random() * SPRITES.length)];
}
</script>
