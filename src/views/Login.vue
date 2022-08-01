<template>
  <div class="form-container">
    <h1>Login</h1>

    <form @submit.prevent="onSubmit">
      <label>Email: </label><br>
      <input type="email" v-model="user.email"><br>
      <label>Password: </label><br>
      <input type="password" v-model="user.password"><br>
      <input type="submit" value="Submit">
    </form>

    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      msg: ''
    }
  },
  methods: {
    onSubmit() {
      const user = this.user
      this.$store.dispatch('logUser', user)
        .then(() => {
          this.msg = this.$store.state.msg
        })
        .catch(error => {
          console.log(error);
          this.msg = this.$store.state.msg
        })
    }
  }
}
</script>

<style scoped>
  input {
    margin: 10px;
  }
</style>