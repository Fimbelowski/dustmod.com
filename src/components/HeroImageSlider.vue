<template>
  <v-container
    id="hero-image-slider"
  >
    <v-row>
      <v-col
        v-for="image in images"
        :key="image.src"
      >
        <v-img
          src="../assets/hero_images/infini.png"
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
};
</script>
