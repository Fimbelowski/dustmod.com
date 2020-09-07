<template>
  <v-container
    id="hero-image-slider"
    class="ma-0 pa-0"
    fluid
  >
    <v-row>
      <v-col
        v-for="image in images"
        :key="image.name"
        class="pa-0"
      >
        <v-img
          :src="getImageUrlWithContext(image)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeroImageSlider',

  props: {
    images: {
      required: true,
      type: Array,
    },
  },

  methods: {
    /** @return {object} */
    getImageUrlWithContext(image) {
      const images = require.context('../assets/hero_images/', false, /\.png$/);
      return images(`./${image.name}.png`);
    },
  },
};
</script>
