<template>
  <v-app>
    <v-main>
      <AppBar/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    AppBar,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Caracteres';
  src: url('./assets/Caracteres L1.ttf') format('truetype');
}
</style>
