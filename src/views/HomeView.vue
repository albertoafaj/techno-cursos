<template>
  <div class="home">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link to="/cursos">
            <button class="btn-courses">Cursos</button>
          </router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/aprender.jpg" alt="Aprenda web design" />
      </div>
    </transition>
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

<style scoped>
.btn-courses {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
  padding: 15px 40px;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
