<template>
  <v-app>
    <v-main>
      <navbar-top></navbar-top>
      <router-view></router-view>
      <navbar-side></navbar-side>
    </v-main>
  </v-app>
</template>

<script>
import NavbarTop from "./components/NavbarTop.vue";
import NavbarSide from "./components/NavbarSide.vue";

export default {
  name: "App",

  components: {
    NavbarTop,
    NavbarSide,
  },  

  data: () => ({
    //
  }),
};
</script>
