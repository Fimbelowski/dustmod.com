<template>
  <section
    class="hero-image-slider"
    :style="maxHeight === undefined ? undefined : { height: `${maxHeight}px` }"
  >
    <v-container class="ma-0 pa-0" fluid>
      <v-window continuous show-arrows>
        <v-window-item
          v-for="{ caption, name, position, src } in HERO_IMAGES"
          :key="name"
          eager
          style="position: relative"
        >
          <v-img
            cover
            eager
            :max-height="maxHeight"
            :position="position"
            :src="src"
          />
          <v-row align-content="center" class="ma-0 window-item-overlay">
            <v-col
              class="text-subtitle-2 text-center"
              style="font-size: inherit !important"
            >
              {{ caption }}
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { HERO_IMAGES } from "@/assets/hero_images";

defineProps<{
  maxHeight: number;
}>();
</script>

<style lang="scss">
.hero-image-slider {
  .window-item-overlay {
    background-color: rgba(0, 0, 0, 0.65);
    bottom: 0;
    font-size: 2rem;
    height: 100px;
    position: absolute;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 1rem;
      height: 50px;
    }
  }
}
</style>
