<template>
<h1>Create a job</h1>

<div class="form-container">

  <form @submit.prevent="onSubmit">
    <h3>Name & describe your job</h3>

    <label>Company</label><br>
    <input
      v-model="job.company"
      type="text"
      placeholder="Company"
    ><br>

    <label>Position</label><br>
    <input
      v-model="job.position"
      type="text"
      placeholder="Position"
    /><br>
    <button type="submit">Submit</button><br>
    <h4>{{ msg }}</h4>
  </form>
</div>
</template>

<script>

export default {
  data () {
    return {
      job: {
        company: '',
        position: '',
      },
      msg: ''
    }
  },
  methods: {
    onSubmit() {
      const job = this.job

      this.$store.dispatch('createJob', job)
        .then(() => {
          console.log(job);
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

<style>
  input {
    margin: 10px;
  }
</style>