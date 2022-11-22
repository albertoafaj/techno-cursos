<template>
  <div class="home">
    <h1>Essa é a Home</h1>
    <p>{{ api }}</p>
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
