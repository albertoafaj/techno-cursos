<template>
  <div class="courses">
    <h1>Essa é a Cursos</h1>
    <p>{{ api }}</p>
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
