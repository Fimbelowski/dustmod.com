<template>
  <v-app>
    <v-main>
      <v-app-bar class="px-4 py-1">
        <v-img class="mr-4" max-width="40" src="./assets/apple.png" />
        <h1 class="heading">DUSTMOD</h1>
      </v-app-bar>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
@font-face {
  font-family: "Caracteres";
  src: url("@/assets/Caracteres L1.ttf") format("truetype");
}

.heading {
  font-family: Caracteres, sans-serif;
  letter-spacing: 1px;
}
</style>
