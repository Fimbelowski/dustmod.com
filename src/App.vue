<template>
  <v-app>
    <v-main>
      <AppBar />
      <HeroImageSlider
        :images="heroImages"
      />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import HeroImageSlider from './components/HeroImageSlider.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    HeroImageSlider,
  },

  data() {
    return {
      heroImages: [
        {
          caption: 'infinidifficult',
          src: 'infini.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Caracteres';
  src: url('./assets/Caracteres L1.ttf') format('truetype');
}
</style>
