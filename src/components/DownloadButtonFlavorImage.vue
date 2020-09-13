<template>
  <img
    class="download-button-flavor-image"
    :src="getRandomSpriteWithContext()"
  >
</template>

<script>
import SPRITES from '../assets/sprites/index';

export default {
  name: 'DownloadButtonFlavorImage',

  methods: {
    /** @return {string} */
    getRandomSpriteWithContext() {
      const randomSprite = SPRITES[Math.floor(Math.random() * SPRITES.length)];

      const images = require.context('../assets/sprites/', false, /\.png$/);
      return images(`./${randomSprite}.png`);
    },
  },
};
</script>
