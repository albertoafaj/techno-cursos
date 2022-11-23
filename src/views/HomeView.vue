<template>
  <div class="home">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Essa é a Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>
