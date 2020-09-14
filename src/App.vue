<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-img
          class="mr-4"
          max-width="40"
          src="./assets/apple.png"
        />
        <h1>
          DUSTMOD
        </h1>
      </v-app-bar>
      <HeroImageSlider
        :images="config.HERO_IMAGES"
        :max-height="heroImageMaxHeight"
      />
      <section
        id="about-section"
        class="mx-auto py-8"
      >
        <h2
          class="mb-8 text-center text-h2"
        >
          What is Dustmod?
        </h2>
        <v-card>
          <v-card-text>
            <blockquote
              class="body-1"
            >
              {{ aboutText }}
            </blockquote>
            <div
              class="text-body-1 text-right"
            >
              -msg555, Creator of Dustmod and
              <a
                href="http://dustkid.com/"
                rel="noopener"
                target="_blank"
              >
                dustkid.com
              </a>
            </div>
          </v-card-text>
        </v-card>
      </section>
      <v-container
        id="download-section"
        class="mx-auto py-8"
        tag="section"
      >
        <v-row
          align="center"
          justify="center"
        >
          <DownloadButtonFlavorImage
            class="mr-10"
          />
          <v-btn
            color="#9b59c8"
            x-large
            @click="dialogs.download.display = true"
          >
            Download
          </v-btn>
        </v-row>
        <DownloadDialog
          :display.sync="dialogs.download.display"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DownloadButtonFlavorImage from './components/DownloadButtonFlavorImage.vue';
import DownloadDialog from './components/DownloadDialog.vue';
import HeroImageSlider from './components/HeroImageSlider.vue';
import images from './assets/hero_images/index';

export default {
  name: 'App',

  components: {
    DownloadButtonFlavorImage,
    DownloadDialog,
    HeroImageSlider,
  },

  data() {
    return {
      aboutText: 'Dustmod is a hobby project that came as a natural extension to dustkid.com, a website that I operate that collects all sorts of Dustforce related statistics. While integrating dustkid.com curated leaderboards into Dustmod and extending the replay system to give richer metadata was an initial goal, the project has expanded to include quite a variety of extended functionality on top of the base game. It\'s my hope that Dustmod continues to be a way to launch deep into the nearly unlimited content that Dustforce and the surrounding community offers.',
      config: {
        HERO_IMAGES: images,
      },
      dialogs: {
        download: {
          display: false,
        },
      },
    };
  },

  computed: {
    /** @type {number} */
    heroImageMaxHeight() {
      return this.$vuetify.breakpoint.lgAndUp ? window.innerHeight - 64 : undefined;
    },
  },
};
</script>

<style lang="scss">
#app {

  #about-section {
    max-width: 900px;
  }

  .v-app-bar {
    h1 {
      font-family: Caracteres, sans-serif;
      letter-spacing: 1px;
    }
  }
}
</style>
