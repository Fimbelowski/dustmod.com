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
      <AboutSection />
    </v-main>
  </v-app>
</template>

<script>
import AboutSection from './components/AboutSection.vue';
import HeroImageSlider from './components/HeroImageSlider.vue';
import images from './assets/hero_images/index';

export default {
  name: 'App',

  components: {
    AboutSection,
    HeroImageSlider,
  },

  data() {
    return {
      config: {
        HERO_IMAGES: images,
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
  @font-face {
    font-family: 'Caracteres';
    src: url('/src/assets/Caracteres L1.ttf') format('truetype');
  }

  .v-app-bar {
    h1 {
      font-family: Caracteres, sans-serif;
      letter-spacing: 1px;
    }
  }
}
</style>
