<template>
  <div class="home">
    <h1>Essa é a Home</h1>
    <p>{{ api }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      api: {},
    };
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/home")
        .then((r) => r.json())
        .then((r) => (this.api = r));
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
