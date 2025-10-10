<template>
  <v-app>
    <v-main>
      <v-app-bar class="px-4 py-1" ref="header">
        <v-img class="mr-4" max-width="40" src="./assets/apple.png" />
        <h1 class="heading">DUSTMOD</h1>
      </v-app-bar>
      <HeroImageSlider :images="images" :max-height="heroImageMaxHeight" />
      <PageSection title="What is Dustmod?">
        <v-card>
          <v-card-text>
            <blockquote class="text-body-1">
              Dustmod is a hobby project that came as a natural extension to
              dustkid.com, a website that I operate that collects all sorts of
              Dustforce related statistics. While integrating dustkid.com
              curated leaderboards into Dustmod and extending the replay system
              to give richer metadata was an initial goal, the project has
              expanded to include quite a variety of extended functionality on
              top of the base game. It's my hope that Dustmod continues to be a
              way to launch deep into the nearly unlimited content that
              Dustforce and the surrounding community offers.
            </blockquote>
            <div class="text-body-1 text-right">
              -msg555, Creator of Dustmod and
              <a
                href="http://dustkid.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                dustkid.com
              </a>
            </div>
          </v-card-text>
        </v-card>
      </PageSection>
      <PageSection>
        <v-row align="center" justify="center">
          <DownloadButtonFlavorImage class="mr-10" />
          <v-btn color="#9b59c8" size="x-large"> Download</v-btn>
        </v-row>
        <!-- <DownloadDialog :display.sync="dialogs.download.display" /> -->
      </PageSection>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, type ComputedRef, useTemplateRef } from "vue";
import { useDisplay } from "vuetify";

import { images } from "./assets/hero_images/index";
import PageSection from "./components/PageSection.vue";

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
