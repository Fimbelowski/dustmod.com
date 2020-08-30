<template>
  <v-container
    id="hero-image-slider"
  >
    <v-row>
      <v-col
        :key="image.src"
        v-for="image in images"
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
