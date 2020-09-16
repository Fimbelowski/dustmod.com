<template>
  <v-container
    class="mx-auto page-section py-8"
    tag="section"
  >
    <v-row
      justify="center"
    >
      <v-col
        cols="6"
      >
        <h2
          v-if="title !== ''"
          class="mb-8 text-center text-h2"
        >
          {{ title }}
        </h2>
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageSection',

  props: {
    title: {
      default: '',
      type: String,
    },
  },
};
</script>
