<template>
  <div class="contact">
    <h1>Essa é a Contato</h1>
    <p>{{ api }}</p>
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
