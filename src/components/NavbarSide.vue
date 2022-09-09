<template>
  <div class="ma-12 pa-12">
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item>
            Módulo Acadêmico
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link>
            <v-list-item-title>Alunos</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavbarSide",

  data: () => ({}),
};
</script>
