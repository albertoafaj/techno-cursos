<template>
  <div class="courses">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Essa é a Cursos</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "CoursesView",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>
