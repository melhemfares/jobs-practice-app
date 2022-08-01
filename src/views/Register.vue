<template>
  <div class="form-container">
    <h1>Register</h1>

    <form @submit.prevent="onSubmit">
      <label>Name: </label><br>
      <input type="text" v-model="user.name"><br>
      <label for="email">Email: </label><br>
      <input type="email" v-model="user.email"><br>
      <label for="password">Password: </label><br>
      <input type="password" v-model="user.password"><br>
      <input type="submit" value="Submit"><br>
      <h4>{{ msg }}</h4>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      msg: ''
    }
  },
  methods: {
    onSubmit() {
      const user = this.user
      this.$store.dispatch('createUser', user)
        .then(() => {
          console.log(user);
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