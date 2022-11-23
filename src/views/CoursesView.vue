<template>
  <div class="courses">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul>
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
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
