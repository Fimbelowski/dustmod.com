<template>
  <section
    id="hero-image-slider"
  >
    <v-container
      class="ma-0 pa-0"
      fluid
    >
      <v-window
        continuous
        show-arrows
      >
        <v-window-item
          v-for="image in orderedImages"
          :key="image.name"
          eager
          style="position: relative;"
        >
          <v-img
            eager
            :max-height="maxHeight"
            :position="image.position"
            :src="getImageUrlWithContext(image)"
          />
          <v-row
            align-content="center window-item-overlay"
            class="ma-0"
          >
            <v-col
              class="text-subtitle-2 text-center"
              style="font-size: 2rem !important;"
            >
              {{ image.caption }}
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HeroImageSlider',

  props: {
    images: {
      required: true,
      type: Array,
    },
    maxHeight: {
      default: undefined,
      type: [Number, String],
    },
  },

  computed: {
    /** @type {array} */
    orderedImages() {
      const images = [...this.images];

      return images.sort((a, b) => a.order - b.order);
    },
  },

  methods: {
    /** @return {string} */
    getImageUrlWithContext(image) {
      const images = require.context('../assets/hero_images/', false, /\.png$/);
      return images(`./${image.name}.png`);
    },
  },
};
</script>

<style lang="scss">
#hero-image-slider {

  .window-item-overlay {
    position: absolute;
    bottom: 0;

    height: 100px;
    width: 100%;

    background-color: rgba(0, 0, 0, .65);
  }
}
</style>
