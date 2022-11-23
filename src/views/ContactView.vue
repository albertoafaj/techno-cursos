<template>
  <div class="contact">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>{{ api.titulo }}</h1>
      <p>{{ api.descricao }}</p>
      <ul>
        <li>
          <b>Email:</b>
          {{ api.contato.email }}
        </li>
        <li>
          <b>Telefone:</b>
          {{ api.contato.telefone }}
        </li>
        <li>
          <b>Endereço:</b>
          {{ api.contato.endereco }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "ContactView",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>
