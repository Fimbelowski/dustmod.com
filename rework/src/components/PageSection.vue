<template>
  <v-container class="mx-auto page-section py-8" tag="section">
    <v-row justify="center">
      <v-col lg="5" md="8" sm="10">
        <h2 v-if="title !== undefined" class="mb-8 text-center text-h2">
          {{ title }}
        </h2>
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<style lang="scss">
.text-h2 {
  @media (max-width: 600px) {
    font-size: 2.5rem !important;
  }
}
</style>
