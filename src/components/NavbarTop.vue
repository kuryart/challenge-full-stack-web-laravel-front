<template>
  <div>
    <div>
      <v-toolbar dark prominent>
        <v-img :src="logo" contain height="120" />
      </v-toolbar>
    </div>
  </div>
</template>

<script>
import logo from "../assets/img/grupo-a-logo.svg";

export default {
  name: "NavbarTop",

  data: () => ({
    logo,
  }),
};
</script>
