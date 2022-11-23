<template>
  <div class="contact">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Essa é a Contato</h1>
      <p>{{ api }}</p>
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
