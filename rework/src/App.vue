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
          <DownloadDialog v-model="showDownloadDialog" />
        </v-row>
      </PageSection>
      <PageSection title="Installation">
        <v-card>
          <v-card-text class="text-body-1">
            <ol class="installation-steps mb-4">
              <li>
                Download the version of Dustmod suitable for your installation
                of Dustforce
              </li>
              <li>
                Unpack the contained files into the directory where Dustforce is
                already installed
              </li>
            </ol>
            <h5 class="mb-4 text-center text-h5">Adding Dustmod to Steam</h5>
            <ol class="installation-steps">
              <li>
                In Steam, navigate to
                <kbd>Games -> Add a Non-Steam Game to My Library</kbd>
              </li>
              <li>
                Find the Dustmod executable (typically at
                <kbd>
                  C:\Program Files
                  (x86)\Steam\steamapps\common\Dustforce\dustmod.exe </kbd
                >)
              </li>
            </ol>
          </v-card-text>
        </v-card>
      </PageSection>
      <PageSection title="Support">
        <v-card>
          <v-card-text class="text-body-1">
            <div class="mb-4">
              If you need any assistance installing or troubleshooting Dustmod
              please feel free to click the button below to join the Dustforce
              Discord server for help.
            </div>
            <div class="text-center">
              <v-btn
                color="#9b59c8"
                href="https://discord.gg/4F9WQeV"
                max-width="100%"
                rel="noopener"
                target="_blank"
              >
                Join the Dustforce Discord Server
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </PageSection>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, type ComputedRef, ref, useTemplateRef } from "vue";
import { useDisplay } from "vuetify";

import { images } from "./assets/hero_images/index";
import PageSection from "./components/PageSection.vue";

const headerRef = useTemplateRef("header");

const { lgAndUp } = useDisplay();

const showDownloadDialog = ref(false);

const heroImageMaxHeight: ComputedRef<number | undefined> = computed(() => {
  if (headerRef.value === null) {
    return 0;
  }

  const height = headerRef.value.height;
  const heightAsNumber =
    typeof height === "number" ? height : parseInt(height, 10);

  return lgAndUp ? window.innerHeight - heightAsNumber : undefined;
});

function onDownloadClick() {
  showDownloadDialog.value = true;
}
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

.installation-steps {
  list-style-position: inside;
}
</style>
