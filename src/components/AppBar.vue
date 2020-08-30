<template>
  <v-app-bar
    id="app-bar"
  >
    <v-img
      class="mr-4"
      max-width="40"
      src="../assets/apple.png"
    />
    <h1>
      DUSTMOD
    </h1>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style lang="scss">
#app-bar {
  h1 {
    font-family: Caracteres, sans-serif;
    letter-spacing: 1px;
  }
}
</style>
