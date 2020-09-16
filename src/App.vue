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
      <PageSection>
        <h2
          class="mb-8 text-center text-h2"
        >
          What is Dustmod?
        </h2>
        <v-card>
          <v-card-text>
            <blockquote
              class="text-body-1"
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
      </PageSection>
      <PageSection>
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
      </PageSection>
      <PageSection>
        <h2
          class="mb-8 text-center text-h2"
        >
          Installation
        </h2>
        <v-card>
          <v-card-text
            class="text-body-1"
          >
            <ol
              class="mb-4"
            >
              <li>
                Download the version of Dustmod suitable for your installation of Dustforce
              </li>
              <li>
                Unpack the contained files into the directory where Dustforce is already installed
              </li>
            </ol>
            <h5
              class="mb-4 text-center text-h5"
            >
              Adding Dustmod to Steam
            </h5>
            <ol>
              <li>
                In Steam, navigate to
                <kbd>Games -> Add a Non-Steam Game to My Library</kbd>
              </li>
              <li>
                Find the Dustmod executable (typically at <kbd>
                  C:\Program Files (x86)\Steam\steamapps\common\Dustforce\dustmod.exe
                </kbd>)
              </li>
            </ol>
          </v-card-text>
        </v-card>
      </PageSection>
    </v-main>
  </v-app>
</template>

<script>
import DownloadButtonFlavorImage from './components/DownloadButtonFlavorImage.vue';
import DownloadDialog from './components/DownloadDialog.vue';
import HeroImageSlider from './components/HeroImageSlider.vue';
import images from './assets/hero_images/index';
import PageSection from './components/PageSection.vue';

export default {
  name: 'App',

  components: {
    DownloadButtonFlavorImage,
    DownloadDialog,
    HeroImageSlider,
    PageSection,
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

  .v-app-bar {
    h1 {
      font-family: Caracteres, sans-serif;
      letter-spacing: 1px;
    }
  }
}
</style>
