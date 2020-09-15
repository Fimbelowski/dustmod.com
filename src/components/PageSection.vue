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
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageSection',
};
</script>
