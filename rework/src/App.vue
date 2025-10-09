<template>
  <v-app>
    <v-main>
      <v-app-bar class="px-4 py-1" ref="header">
        <v-img class="mr-4" max-width="40" src="./assets/apple.png" />
        <h1 class="heading">DUSTMOD</h1>
      </v-app-bar>
      <HeroImageSlider :images="images" :max-height="heroImageMaxHeight" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, type ComputedRef, useTemplateRef } from "vue";
import { useDisplay } from "vuetify";

import { images } from "./assets/hero_images/index";

const headerRef = useTemplateRef("header");

const { lgAndUp } = useDisplay();

const heroImageMaxHeight: ComputedRef<number | undefined> = computed(() => {
  if (headerRef.value === null) {
    return 0;
  }

  const height = headerRef.value.height;
  const heightAsNumber =
    typeof height === "number" ? height : parseInt(height, 10);

  return lgAndUp ? window.innerHeight - heightAsNumber : undefined;
});
</script>

<style lang="scss">
@font-face {
  font-family: "Caracteres";
  src: url("@/assets/Caracteres L1.ttf") format("truetype");
}

.heading {
  font-family: Caracteres, sans-serif;
  letter-spacing: 1px;
}
</style>
