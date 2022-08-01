<template>
  <h1>Homepage</h1>
  <div>
    <h4 v-if="isLoggedIn">Hello, {{ username }}</h4>
    <h4 v-else>Please login to get access to the jobs</h4>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.payload.user.name
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  }
}

</script>
<style>
  
</style>