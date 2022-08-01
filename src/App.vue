<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'register' }">Register</router-link> |
    <router-link v-if="isLoggedIn" @click="logout" :to="{ name: 'logout' }">Log out</router-link>
    <router-link v-else :to="{ name: 'login' }">Log in</router-link> |
    <router-link v-if="isLoggedIn" :to="{ name: 'view-jobs' }">View Jobs</router-link> |
    <router-link v-if="isLoggedIn" :to="{ name: 'create-job' }">Create Job</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}

</style>

<script>
import store from "@/store"

export default {
  computed: {
    isLoggedIn() {
      return store.state.isLoggedIn
    }
  },
  methods: {
    logout() {
      store.state.isLoggedIn = false
    }
  }
}
</script>
