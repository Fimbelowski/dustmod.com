<template>
  <v-app>
    <v-main>
      <AppBar />
      <HeroImageSlider
        :images="config.HERO_IMAGES"
        :max-height="heroImageMaxHeight"
      />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import HeroImageSlider from './components/HeroImageSlider.vue';
import images from './assets/hero_images/index';

export default {
  name: 'App',

  components: {
    AppBar,
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
@font-face {
  font-family: 'Caracteres';
  src: url('./assets/Caracteres L1.ttf') format('truetype');
}
</style>
