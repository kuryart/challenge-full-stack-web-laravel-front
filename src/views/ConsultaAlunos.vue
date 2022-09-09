<template>
  <v-banner class="pt-2 pb-2">Consulta de Alunos</v-banner>
  <search-bar></search-bar>
  <alunos-data-table></alunos-data-table>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import AlunosDataTable from "../components/AlunosDataTable.vue";

export default {
  name: "ConsultaAlunos",

  components: {
    SearchBar,
    AlunosDataTable,
  },
};
</script>
